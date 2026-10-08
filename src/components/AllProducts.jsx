// import React from 'react';

import HomeCard from "./HomeCard";

const AllProducts = async () => {
    const res = await fetch("https://api.abcz.workers.dev/api/bazardor/products");
    const data = await res.json();
    return (
        <div className="bg-gray-100">
            <div className="container mx-auto px-4 pb-10">
                <p className="font-bold text-2xl">সব পণ্য</p>
                <p className="text-sm text-gray-600"><small>মোট {data.length}টি পণ্য দেখানো হচ্ছে</small></p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {
                        data.map((product) => <HomeCard key={product?.id} product={product} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default AllProducts;