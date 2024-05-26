import { useEffect, useState } from 'react';
import './App.css';
import Blog from './components/Blog';
import Form from './components/Form';

function App() {
  const [blogs, setBlogs] = useState([
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
  ]);

  const blogTitles = blogs.map((blog) => {
    return { blogId: blog.id, title: blog.title }
  });

  const [font, setFont] = useState('My Blogs');
  const handleChangeName = () => {
    if ("Nice" === font) {
      setFont("My Blogs")
    }
    else {
      setFont("Nice")
    }
  }

  const generateNewBlog = () => {
    return {
      id: blogs.length + 1,
      title: `Blog Number ${blogs.length + 1}`,
      description: `Blog Description ${blogs.length + 1}`,
      imgUrl: "https://miro.medium.com/v2/da:true/resize:fill:140:140/0*3Xdd_WEaRxryzfLC"
    }
  }

  function handleNewBlog() {
    const newBlog = generateNewBlog();
    setBlogs([...blogs, newBlog]);
  }

  const [display, setDisplay] = useState(true);
  function handleClickMe(display) {
    setDisplay(!display);
  }

  function handleRemoveBlog(id) {
    alert(`Remove Blog ${id}`);
    const newArray = [];
    blogs.forEach((blog) => {
      if (blog.id !== id) {
        newArray.push(blog);
      }
    });
    setBlogs(newArray);
  }

  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  useEffect(() => {
    console.log("Use Effect Occurred");
  }, [x, y])


  return (
    <>
      <h2 onClick={() => handleChangeName()}>{font}</h2>
      <button onClick={() => handleNewBlog()}>New Blog</button>
      <button onClick={() => handleClickMe(display)}>{display ? "Hide" : "Show"} 2 Blog</button>

      {blogs.map((blog) => (
        <>
          <Blog
            key={blog.id}
            title={blog.title}
            description={blog.description}
            imgUrl={blog.imgUrl}
            show={blog.id === 2 ? (display ? true : false) : true}
          />
          <button onClick={() => handleRemoveBlog(blog.id)}>Remove Blog</button>
        </>
      ))}

      <button onClick={() => setX(x === 1 ? 0 : 1)}>Change X</button>
      <button onClick={() => setY(y === 1 ? 0 : 1)}>Change Y</button>

      <Form />
    </>
  )
}

export default App
