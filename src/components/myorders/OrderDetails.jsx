import React from 'react'

const OrderDetails = () => {
    return (
        <section className='orderDetails'>
            <main>
                <h1>Order Details</h1>

                <div>
                    <h1>Shipping</h1>
                    <p>
                        <b>Adress</b>
                        {"asaghsa"}
                    </p>
                </div>
                <div>
                    <h1>Contact</h1>
                    <p>
                        <b>Name</b>
                        {"Anhi"}
                    </p>
                    <p>
                        <b>Number</b>
                        {4568746464}
                    </p>
                </div>
                <div>
                    <h1>Status</h1>
                    <p>
                        <b>Order Status</b>
                        {"Processing"}
                    </p>
                    <p>
                        <b>Ordered Date</b>
                        {"12-11-23"}
                    </p>
                    <p>
                        <b>Delivered Date</b>
                        {"12-16-23"}
                    </p>
                </div>
                <div>
                    <h1>Payment</h1>
                    <p>
                        <b>Payment Method</b>
                        {"Online"}
                    </p>
                    <p>
                        <b>Payment Reference</b>#{"asdasdsadsad"}
                    </p>
                    <p>
                        <b>Paid At</b>
                        {"23-02-2003"}
                    </p>
                </div>

                <div>
                    <h1>Amount</h1>
                    <p>
                        <b>Items Total</b>₹{2132}
                    </p>
                    <p>
                        <b>Shipping Charges</b>₹{200}
                    </p>
                    <p>
                        <b>Tax</b>₹{232}
                    </p>
                    <p>
                        <b>Total Amount</b>₹{232 + 200 + 2132}
                    </p>
                </div>

                <article>
                    <h1>Ordered Items</h1>
                    <div>
                        <h4>Veg Burger</h4>
                        <div>
                            <span>{12}</span> x <span>{232}</span>
                        </div>
                    </div>
                    <div>
                        <h4>Chicken Cheese Burger</h4>
                        <div>
                            <span>{10}</span> x <span>{500}</span>
                        </div>
                    </div>
                    <div>
                        <h4>Burger & Fries</h4>
                        <div>
                            <span>{10}</span> x <span>{1800}</span>
                        </div>
                    </div>

                    <div>
                        <h4
                            style={{
                                fontWeight: 800,
                            }}
                        >
                            Sub Total
                        </h4>
                        <div
                            style={{
                                fontWeight: 800,
                            }}
                        >
                            ₹{2132}
                        </div>
                    </div>
                </article>


            </main>
        </section>
    )
}

export default OrderDetails