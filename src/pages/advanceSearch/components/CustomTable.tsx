type DynamicTableProps = {
  data: Record<string, any>[];
};

export default function DynamicTable({ data }: DynamicTableProps) {
  if (!data.length) return <p>No data available</p>;

  const columns = Array.from(
    new Set(data.flatMap((row) => Object.keys(row)))
  );

  return (
    <div className="overflow-x-auto rounded-xl border border-gray-200 shadow">
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
          {data.map((row, index) => (
            <tr
              key={index}
              className="border-t hover:bg-gray-50"
            >
              {columns.map((column) => (
                <td
                  key={column}
                  className="px-4 py-3 text-sm text-gray-600"
                >
                  {row[column] !== undefined
                    ? String(row[column])
                    : "-"}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}