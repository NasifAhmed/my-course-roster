function Cart({ item, totalCredit }) {
    return (
        <div className="max-w-[280px] p-4">
            <h2 className="text-lg font-semibold my-4">
                Credit Hour Remaining : {20 - totalCredit}
            </h2>
            <hr />
            <h2 className="text-lg font-semibo  ld my-4">Course Name</h2>
            <ol className="text-base font-normal text-gray-500 list-decimal list-inside my-4">
                {item.map((item) => (
                    <li>{item}</li>
                ))}
            </ol>
            <hr />
            <p className="text-base font-medium">
                Total Credit Hour : {totalCredit}
            </p>
        </div>
    );
}

export default Cart;
