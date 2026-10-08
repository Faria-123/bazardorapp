// import React from 'react';

import Link from "next/link";

const HomeCard = ({ product }) => {
    return (

        <Link href={`/product/${product.slug}`}>
            <div className="card bg-base-100 border border-base-200 shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer">

                {/* Top section */}
                <div className="card-body p-4">

                    <div className="flex items-start justify-between gap-3">

                        {/* Product info */}
                        <div className="flex items-center gap-3">

                            <div className="w-10 h-10 rounded-lg bg-base-200 flex items-center justify-center text-2xl">
                                {product.image}
                            </div>

                            <div>
                                <h2 className="font-semibold text-sm text-base-content">
                                    {product.nameBn}
                                </h2>

                                <p className="text-xs text-base-content/50 mt-1">
                                    {product.categoryNameBn}
                                </p>
                            </div>

                        </div>

                        {/* Change */}
                        <div
                            className={`badge gap-1 text-[10px] ${product.change.dir === "up"
                                ? "badge-error badge-outline"
                                : "badge-success badge-outline"
                                }`}
                        >
                            <span>{product.change.dir === "up" ? "▲" : "▼"}</span>
                            {product.change.pct}%
                        </div>

                    </div>


                    {/* Price */}
                    <div className="mt-3">
                        <p className="text-[10px] text-base-content/50">
                            আজকের দাম
                        </p>

                        <div className="flex items-baseline gap-1">
                            <span className="text-lg font-bold">
                                ৳{product.today}
                            </span>

                            <span className="text-xs text-base-content/50">
                                / {product.unit}
                            </span>
                        </div>
                    </div>

                </div>
            </div>
        </Link>

    );
};

export default HomeCard;