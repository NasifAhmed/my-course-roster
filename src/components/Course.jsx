function Course({ imageSrc, name, details, credit, price, clickHandler }) {
    return (
        <div className="max-w-[280px] p-4 rounded-md bg-white">
            <img
                className="w-full"
                // src="https://i.ibb.co/wLzMYTk/Rectangle-2-2.png"
                src={imageSrc}
                alt=""
            />
            <h2 className="text-lg font-semibold my-4">{name}</h2>
            <p className="text-sm font-normal text-gray-500">{details}</p>
            <div className="flex justify-between text-base font-medium my-5">
                <span>Price : {price}</span>
                <span>Credit : {credit}</span>
            </div>
            <button
                className="w-full rounded-lg bg-blue-600 text-white text-lg font-semibold py-1"
                onClick={clickHandler}
            >
                Select
            </button>
        </div>
    );
}

export default Course;
