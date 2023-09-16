import { useEffect, useState } from "react";
import Course from "./Course.jsx";

function Body() {
    const [course, setCourse] = useState([]);
    useEffect(() => {
        fetch("course.json").then((res) => res.json()).then.(data => console.log(data));
    }, []);
    return (
        <>
            <Course
                imageSrc="https://i.ibb.co/wLzMYTk/Rectangle-2-2.png"
                name="Introduction to C Programming"
                details="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
                credit="1"
                price="15000"
            />
        </>
    );
}

export default Body;
