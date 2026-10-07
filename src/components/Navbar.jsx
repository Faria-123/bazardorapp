// import React from 'react';

import Link from "next/link";

const Navbar = async () => {
    const res = await fetch('https://api.abcz.workers.dev/api/bazardor/categories');
    const headerData = await res.json();
    return (
        <div className="bg-gray-100">

            <div className="container mx-auto p-3.5">
                {
                    headerData.map((item) => (
                        <Link key={item?.id} href={`/${item?.id}`} className="px-4 py-2 text-gray-700 hover:text-green-600">{item?.icon} {item?.nameBn}</Link>
                    ))
                }
            </div>
        </div>
    );
};

export default Navbar;