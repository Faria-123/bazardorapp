// // import React from 'react';

// import Link from "next/link";

// const Navbar = async () => {
//     const res = await fetch('https://api.abcz.workers.dev/api/bazardor/categories');
//     const headerData = await res.json();
//     return (
//         <div className="bg-gray-100">
//             <div className="container mx-auto p-3.5">


//                 {
//                     headerData.map((item) => (
//                         <Link key={item?.id} href={`/${item?.slug}`} className="px-4 py-2 text-gray-700 hover:text-green-600">{item?.icon} {item?.nameBn}</Link>
//                     ))
//                 }
//             </div>
//         </div>
//     );
// };

// export default Navbar;

import Link from "next/link";

const Navbar = async () => {
    const res = await fetch(
        "https://api.abcz.workers.dev/api/bazardor/categories"
    );

    const headerData = await res.json();

    return (
        <nav className="w-full bg-gray-100 border-b border-gray-200">
            <div className="container mx-auto px-3 sm:px-6 lg:px-8">
                <div
                    className="
            flex items-center gap-2
            overflow-x-auto whitespace-nowrap
            py-3
            sm:flex-wrap sm:justify-center
            sm:overflow-visible sm:whitespace-normal
          "
                >
                    {headerData.map((item) => (
                        <Link
                            key={item?.id}
                            href={`/${item?.slug}`}
                            className="
                inline-flex shrink-0 items-center gap-1
                rounded-lg px-3 py-2
                text-sm font-medium text-gray-700
                transition-colors duration-200
                hover:bg-green-100 hover:text-green-700
                sm:px-4 sm:text-base
              "
                        >
                            <span>{item?.icon}</span>
                            <span>{item?.nameBn}</span>
                        </Link>
                    ))}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;