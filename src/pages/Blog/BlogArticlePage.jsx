
import { Navigate, useParams } from "react-router-dom";
import BlogDetails from "../../features/blog/BlogDetails/BlogDetails.jsx";

function BlogArticlePage() {
  const { id } = useParams();

  if (!id) {
    return <Navigate to="/blog" replace />;
  }

  return <BlogDetails />;
}

export default BlogArticlePage;
