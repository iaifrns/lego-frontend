const PageNumber = ({
  page,
  setPage,
  totalnum,
  limit,
}: {
  page: number;
  setPage: (v: number) => void;
  totalnum: number;
  limit: number;
}) => {
  const maxPage = Math.floor(totalnum / limit);
  return (
    <div className="flex items-center">
      <div
        className={`flex justify-center items-center w-5 border border-gray-400 cursor-pointer ${page == 1 && "text-gray-400"}`}
        onClick={() => page != 1 && setPage(page - 1)}
      >
        {"<"}
      </div>
      <div
        className={`flex justify-center items-center w-5 border cursor-pointer ${page == 1 ? "border-primary text-primary" : "border-gray-400"}`}
        onClick={() => page != 1 && setPage(1)}
      >
        1
      </div>
      {page > 1 && page < 11 && (
        <div className="flex justify-center items-center w-5 border border-primary cursor-pointer text-primary">
          {page}
        </div>
      )}
      ,...,
      {page != 1 && page > 10 && page < 14 && (
        <div className="flex justify-center items-center w-5 border border-primary cursor-pointer text-primary">
          {page}
        </div>
      )}
      <div
        className={`flex justify-center items-center w-5 border cursor-pointer ${page == maxPage ? "border-primary text-primary" : "border-gray-400"}`}
        onClick={() => page != maxPage && setPage(maxPage)}
      >
        {maxPage}
      </div>
      <div
        className={`flex justify-center items-center w-5 border border-gray-400 cursor-pointer ${page == maxPage && "text-gray-400"}`}
        onClick={() => page != maxPage && setPage(page + 1)}
      >
        {">"}
      </div>
    </div>
  );
};

export default PageNumber;
