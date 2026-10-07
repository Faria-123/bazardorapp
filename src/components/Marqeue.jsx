// import React from 'react';

import MarqueeText from "react-marquee-text"
import "react-marquee-text/dist/styles.css"
const Marqeue = async () => {
    const res = await fetch("https://api.abcz.workers.dev/api/bazardor/products");
    const products = await res.json();
    return (
        <div >


            <MarqueeText direction="right" className="p-3.5" duration={25} >
                {products.map((product) => (

                    <span className="mx-4" key={product?.id}>
                        <span>{product?.categoryIcon}</span>
                        <span>{product?.nameBn}</span>

                        <span>{product?.today}</span>

                        <span>
                            টাকা/{product.unit}
                        </span>

                        <span
                            className={
                                product.change?.dir === "up"
                                    ? "text-green-600"
                                    : "text-red-600"
                            }
                        >
                            {product.change?.dir === "up"
                                ? `▲ ${product.change?.pct}%`
                                : `▼ ${product.change?.pct}%`}
                        </span>
                    </span>

                ))}
            </MarqueeText>


        </div>

    );
};

export default Marqeue;