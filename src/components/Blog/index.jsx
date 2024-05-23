import './styles/Blog.css';
import { useState } from 'react';

function Blog({ title, description, imgUrl, show }) {

    const [color, setColor] = useState("red")

    const handleColorChange = () => {
        if (color === "red") {
            setColor("black");
        }
        else {
            setColor("red");
        }
    }


    return (
        <>
            {
                show ? (
                    <div className="BlogContainer">
                        <div className="details">
                            <h3 style={{ color: color }} onClick={() => handleColorChange()}>{title}</h3>
                            <p>{description}</p>
                        </div>
                        <div className="imageWrapper">
                            <img src={imgUrl} alt="" />
                        </div>
                    </div>
                ) :
                    (
                        <></>
                    )
            }
        </>
    )
};
export default Blog;
