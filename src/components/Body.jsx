import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Course from "./Course.jsx";
import Cart from "./Cart.jsx";

function Body() {
    const [course, setCourse] = useState([]);
    const [totalCredit, setCredit] = useState(0);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch("course.json")
            .then((res) => res.json())
            .then((data) => {
                setCourse(data);
                console.log(course);
            });
    }, []);

    function addToCart(item, credit) {
        if (totalCredit + credit > 20) {
            toast("Credit limit exceeded ! Only 20 credits allowed");
        } else {
            setCart([...cart, item]);
            setCredit(totalCredit + credit);
        }
        console.log(cart);
    }

    return (
        <div className="grid grid-cols-4 mx-16 justify-center items-start mb-16">
            <div className="col-span-3 grid grid-cols-3 justify-center items-start gap-y-6">
                {course.map((course) => (
                    <Course
                        imageSrc={course.image_url}
                        name={course.course_name}
                        details={course.details}
                        credit={course.credit}
                        price={course.price}
                        clickHandler={() =>
                            cart.includes(course.course_name)
                                ? toast("Course already added")
                                : addToCart(course.course_name, course.credit)
                        }
                    />
                ))}
            </div>
            <Cart item={cart} totalCredit={totalCredit} />
            <ToastContainer />
        </div>
    );
}

export default Body;
