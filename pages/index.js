import BlogItem from "../components/blogitem";

const Blog_Posts = [
  {
    id: 1,
    title: "First Blog",
    img: "https://images.unsplash.com/photo-1661956600684-97d3a4320e45?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=1400&q=60",
    description: "First Blog",
    details: "How it all began",
    slug: 'first-blog'
  },
  {
    id: 2,
    title: "First Blog",
    img: "https://images.unsplash.com/photo-1661956600684-97d3a4320e45?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=1400&q=60",
    description: "Second Blog",
    details: "How it all began",
    slug: 'second-blog'
  },
];

function HomePage(props) {
  console.log(props)
  return (
    <>
      <h1>Blogs</h1>
      <div>
        {props.blogPosts.map((blog) => (
          <BlogItem
            key={blog.id}
            title={blog.title}
            image={blog.img}
            description={blog.description}
            details={blog.details}
            slug = {blog.slug}
          />
        ))}
      </div>
    </>
 );
}
/*
export async function getServerSideProps(context){

  const { req, res } = context;
  console.log(req, res);

  return{
    props: {
      blogPosts: Blog_Posts
    }
  }
}
*/


export async function getStaticProps(){

  return{
    props: {
      blogPosts: Blog_Posts
    },
    revalidate: 3600
  }
}


export default HomePage;
