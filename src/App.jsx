import './App.css';
import Blog from './components/Blog'

function App() {
  const blogs = [
    {
      id: 1,
      title: "Securing Node.js in Production: Expert Practices for Every Developer",
      description: "Perspiciatis sunt ducimus facere est voluptates tempora. Totam eius dignissimos dicta maiores.",
      imgUrl: "https://miro.medium.com/v2/da:true/resize:fill:140:140/0*3Xdd_WEaRxryzfLC"
    },
    {
      id: 2,
      title: "Because of a Question About try…catch, I Failed My Interview",
      description: "Perspiciatis sunt ducimus facere est voluptates tempora. Totam eius dignissimos dicta maiores.",
      imgUrl: "https://miro.medium.com/v2/da:true/resize:fill:140:140/0*oY_ucPmMlywwHFow"
    }
  ];

  const blogTitles = blogs.map((blog) => {
    return { blogId: blog.id, title: blog.title }
  });

  console.log(blogTitles);

  return (
    <>
      <h2>My Blogs</h2>

      {blogs.map((blog) => (
        <Blog
          title={blog.title}
          description={blog.description}
          imgUrl={blog.imgUrl}
        />
      ))}

    </>
  )
}

export default App
