import { useState } from "react";


function Form() {

    const [name, setName] = useState("");
    function handleName(e) {
        setName(e.target.value);
    }

    const [address, setAddress] = useState("");
    function handeladdress(e) {
        setAddress(e.target.value);
    }

    const [display, setDisplay] = useState(true);

    function handleValue() {
        setDisplay(!display);
    }

    return (
        <>
            <form action="">
                <label>Name</label>
                <input type="text" placeholder='Enter Your Name' name="name" onKeyUp={(e) => handleName(e)} />
                <br />
                <br />
                <textarea name="address" onKeyUp={(e) => handeladdress(e)}></textarea>
            </form>

            <button onClick={handleValue}>{display ? "Hide" : "show"} Values</button>

            <div style={{ display: display ? "none" : "block" }}>
                <p>My Name is {name} and I lives at {address}</p>
            </div >
        </>
    );
};
export default Form;

