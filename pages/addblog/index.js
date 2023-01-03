import BlogForm from "../../components/blogform/addblogform";

function AddBlog() {
  const addBlogHandler = async (data) => {
    console.log(data);
    const response = await fetch("/api/new-blog", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const responseData = await response.json();

    console.log(responseData);
  };

  return (
    <>
      <h1>Add Blog</h1>
      <BlogForm addBlogHandler={addBlogHandler} />
    </>
  );
}

export default AddBlog;
