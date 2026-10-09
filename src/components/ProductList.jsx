"use client";

import { useState } from "react";
import HomeCard from "./HomeCard";
// import HomeCard from "./HomeCard";

const ProductList = ({ products }) => {
    const [sort, setSort] = useState("default");

    const sortedProducts = [...products].sort((a, b) => {
        if (sort === "low") {
            return a.today - b.today;
        }

        if (sort === "high") {
            return b.today - a.today;
        }



        return 0;
    });

    return (
        <>
            {/* Sort Bar */}
            <section className="bg-base-100 border border-base-200 rounded-xl mt-3 px-4 py-2.5 shadow-sm">
                <div className="flex items-center justify-end gap-2">

                    <span className="text-[10px] text-base-content/50">
                        সাজান
                    </span>

                    <select
                        value={sort}
                        onChange={(e) => setSort(e.target.value)}
                        className="select select-bordered select-xs w-24 text-[10px]"
                    >
                        <option value="default">
                            ডিফল্ট
                        </option>

                        <option value="low">
                            কম দাম
                        </option>

                        <option value="high">
                            বেশি দাম
                        </option>


                    </select>

                </div>
            </section>

            {/* Products */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">

                {sortedProducts.map((product) => (
                    <HomeCard
                        key={product.id}
                        product={product}
                    />
                ))}

            </div>
        </>
    );
};

export default ProductList;