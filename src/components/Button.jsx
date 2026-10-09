// import { useSession } from '@/lib/auth-client';
// import Link from 'next/link';
// import React from 'react';

// const Button = () => {
//     const data = useSession();
//     const user = data?.data?.user;
//     console.log(user);
//     return (
//         <div>
//             {
//                 !user && <div className="flex justify-center items-center gap-4 mt-4">

//                     <Link href="/signin">
//                         <button className="bg-green-600 text-white px-4 py-2 rounded-md">
//                             সাইন ইন
//                         </button>
//                     </Link>

//                     <Link href="/signup">
//                         <button className="bg-green-300 text-white px-4 py-2 rounded-md">
//                             সাইন আপ
//                         </button>
//                     </Link>
//                 </div>
//             }
//             {
//                 user && <div className="avatar flex justify-center items-center gap-4 mt-4">
//                     <p className='p-3 px-4 bg-green-600 text-white rounded-full'>{user?.name[0]}</p>
//                     <p>{user?.name}</p>
//                 </div>
//             }
//         </div>
//     );
// };

// export default Button; 
"use client";

import { useSession, signOut } from "@/lib/auth-client";
import Link from "next/link";

const Button = () => {
    const { data } = useSession();
    const user = data?.user;

    return (
        <div>
            {!user ? (
                <div className="flex items-center gap-4 mt-4">
                    <Link
                        href="/signin"
                        className="bg-green-600 text-white px-4 py-2 rounded-md"
                    >
                        সাইন ইন
                    </Link>

                    <Link
                        href="/signup"
                        className="bg-green-100 text-green-800 px-4 py-2 rounded-md"
                    >
                        সাইন আপ
                    </Link>
                </div>
            ) : (
                <details className="dropdown dropdown-end">
                    <summary className="flex items-center gap-2 cursor-pointer list-none">

                        <div className="bg-green-600 text-white rounded-full w-9 text-center">
                            <span>{user.name?.[0]?.toUpperCase()}</span>
                        </div>


                        <span className="text-sm font-medium">
                            {user.name}
                        </span>

                        <span className="text-xs">⌄</span>
                    </summary>

                    <ul className="dropdown-content menu bg-base-100 rounded-xl z-50 mt-3 w-60 p-2 shadow-lg border border-base-200">
                        <li className="menu-title">
                            <span className="text-gray-800">
                                {user.name}
                            </span>
                            <span className="text-xs font-normal">
                                {user.email}
                            </span>
                        </li>

                        <li>
                            <Link href="/profile">
                                👤 আমার অ্যাকাউন্ট
                            </Link>
                        </li>

                        <li>
                            <button
                                onClick={() => signOut()}
                                className="text-red-500"
                            >
                                ↩ সাইন আউট
                            </button>
                        </li>
                    </ul>
                </details>
            )}
        </div>
    );
};

export default Button;