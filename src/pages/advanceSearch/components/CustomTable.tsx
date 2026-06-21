import { useMemo, useState } from "react";

type DynamicTableProps = {
  data: Record<string, any>[];
  itemsPerPage?: number;
};

export default function DynamicTable({
  data,
  itemsPerPage = 10,
}: DynamicTableProps) {
  const [page, setPage] = useState(1);

  const columns = useMemo(
    () => Array.from(new Set(data.flatMap((row) => Object.keys(row)))),
    [data],
  );

  const paginatedData = useMemo(() => {
    const start = (page - 1) * itemsPerPage;
    return data.slice(start, start + itemsPerPage);
  }, [data, page, itemsPerPage]);

  const totalPages = Math.ceil(data.length / itemsPerPage);
  console.log(data)
  if (!data.length || data.length == 0) {
    return (
      <div className="rounded-xl border p-6 text-center">No data available</div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow">
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead className="bg-gray-100">
              <tr>
                {columns.map((column) => (
                  <th
                    key={column}
                    className="px-4 py-3 text-left text-sm font-semibold text-gray-700"
                  >
                    {column}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {paginatedData.map((row, rowIndex) => (
                <tr
                  key={rowIndex}
                  className="border-t align-top hover:bg-gray-50"
                >
                  {columns.map((column) => (
                    <td key={column} className="max-w-xs px-4 py-3 text-sm">
                      <CellRenderer value={row[column]} />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between">
        <button
          disabled={page === 1}
          onClick={() => setPage((p) => p - 1)}
          className="rounded bg-gray-200 px-4 py-2 disabled:opacity-50"
        >
          Previous
        </button>

        <span className="text-sm">
          Page {page} of {totalPages}
        </span>

        <button
          disabled={page === totalPages}
          onClick={() => setPage((p) => p + 1)}
          className="rounded bg-gray-200 px-4 py-2 disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
}

function CellRenderer({ value }: { value: any }) {
  if (value === null || value === undefined) {
    return <span className="text-gray-400">-</span>;
  }

  // Primitive values
  if (
    typeof value === "string" ||
    typeof value === "number" ||
    typeof value === "boolean"
  ) {
    return <span>{String(value)}</span>;
  }

  // Arrays
  if (Array.isArray(value)) {
    if (value.length === 0) {
      return <span className="text-gray-400">Empty</span>;
    }

    // Array of objects
    if (typeof value[0] === "object") {
      const keys = Array.from(new Set(value.flatMap((v) => Object.keys(v))));

      return (
        <div className="overflow-hidden rounded-lg border">
          <table className="w-full text-xs">
            <thead className="bg-gray-50">
              <tr>
                {keys.map((k) => (
                  <th key={k} className="border px-2 py-1">
                    {k}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {value.map((item, index) => (
                <tr key={index}>
                  {keys.map((k) => (
                    <td key={k} className="border px-2 py-1">
                      {String(item[k] ?? "-")}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    }

    // Array of primitive values
    return (
      <div className="flex flex-wrap gap-1">
        {value.map((item, i) => (
          <span key={i} className="rounded bg-blue-100 px-2 py-1 text-xs">
            {String(item)}
          </span>
        ))}
      </div>
    );
  }

  // Simple object
  if (typeof value === "object") {
    return (
      <div className="space-y-1 rounded bg-gray-50 p-2 text-xs">
        {Object.entries(value).map(([k, v]) => (
          <div key={k}>
            <strong>{k}:</strong> {String(v)}
          </div>
        ))}
      </div>
    );
  }

  return <span>{String(value)}</span>;
}
