import { useLoaderData } from "react-router";

const GroqDetailPage = () => {
  const data = useLoaderData();

  return (
    <div>
      <p>{data.data}</p>
    </div>
  );
};

export default GroqDetailPage;
