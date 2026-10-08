// import React from 'react';

import HomeCard from "./HomeCard";

const PriceIncrease = async () => {
    const res = await fetch("https://api.abcz.workers.dev/api/bazardor/products");
    const data = await res.json();
    const increaseProducts = data.filter((pro) => pro.change.dir === "up");
    const decreaseProducts = data.filter((pro) => pro.change.dir === "down");
    return (
        <div className="bg-gray-100">
            <div className="container mx-auto px-4 pb-10">
                <div>
                    <p className="font-bold text-2xl  pt-7"><span className="text-red-600">▲</span> আজ দাম বেড়েছে</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-2">
                        {increaseProducts.map((product) => (
                            <HomeCard key={product?.id} product={product} />
                        ))}
                    </div>
                </div>
                <div>
                    <p className="font-bold text-2xl m-4 mt-7 "><span className="text-green-500">▼</span> আজ দাম কমেছে</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-2">
                        {decreaseProducts.map((product) => (
                            <HomeCard key={product?.id} product={product} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PriceIncrease;