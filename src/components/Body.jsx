import { useEffect, useState } from "react";
import Course from "./Course.jsx";
import Cart from "./Cart.jsx";

function Body() {
    const [course, setCourse] = useState([]);
    useEffect(() => {
        fetch("course.json")
            .then((res) => res.json())
            .then((data) => {
                setCourse(data);
                console.log(course);
            });
    }, []);

    return (
        <div className="grid grid-cols-4 mx-16 justify-center items-start">
            <div className="col-span-3 grid grid-cols-3 justify-center items-start gap-y-6">
                {course.map((course) => (
                    <Course
                        imageSrc={course.image_url}
                        name={course.course_name}
                        details={course.details}
                        credit={course.credit}
                        price={course.price}
                    />
                ))}
            </div>
            <Cart />
        </div>
    );
}

export default Body;
