import ReactMarkdown from "react-markdown";
import { useLoaderData } from "react-router";
import remarkGfm from "remark-gfm";

const GroqDetailPage = () => {
  const data = useLoaderData();

  return (
    <div className="prose max-w-none default-content">
      <ReactMarkdown remarkPlugins= {[remarkGfm]}>{data.data}</ReactMarkdown>
    </div>
  );
};

export default GroqDetailPage;
