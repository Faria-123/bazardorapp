
// import Image from "next/image";


// const Header = () => {

//     const date = new Date().toLocaleString("bn-BD", {
//         dateStyle: "full",
//     });
//     return (
//         <div className="bg-gray-100">
//             <div className="container mx-auto flex justify-between items-center p-4 ">
//                 <div className="flex items-center gap-4">
//                     <Image src="/logo-icon.png" alt="Logo" height={50} width={50} className="p-3.5 bg-green-600 rounded-2xl"></Image>
//                     <div>
//                         <p className="font-bold text-[1.15rem]">বাজার দর</p>
//                         <p><small>{date}</small></p>
//                     </div>
//                 </div>
//                 <div className="flex justify-center items-center gap-4 mt-4">
//                     <button className="bg-green-600 text-white px-4 py-2 rounded-md">সাইন ইন</button>
//                     <button className="bg-green-300 text-white px-4 py-2 rounded-md">সাইন আপ</button>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Header;



// // "use client";

// // import Image from "next/image";
// // import { useEffect, useState } from "react";

// // const Header = () => {
// //     const [date, setDate] = useState("");

// //     useEffect(() => {
// //         const today = new Date();

// //         setDate(
// //             today.toLocaleDateString("bn-BD", {
// //                 dateStyle: "full",
// //             })
// //         );
// //     }, []);

// //     return (
// //         <div className="bg-gray-100">
// //             <div className="container mx-auto flex justify-between items-center p-4">

// //                 <div className="flex items-center gap-4">
// //                     <Image
// //                         src="/logo-icon.png"
// //                         alt="Logo"
// //                         height={50}
// //                         width={50}
// //                         className="p-3.5 bg-green-600 rounded-2xl"
// //                     />

// //                     <div>
// //                         <p className="font-bold text-[1.15rem]">
// //                             বাজার দর
// //                         </p>

// //                         <p>
// //                             <small>{date}</small>
// //                         </p>
// //                     </div>
// //                 </div>

// //                 <div className="flex justify-center items-center gap-4 mt-4">
// //                     <button className="bg-green-600 text-white px-4 py-2 rounded-md">
// //                         সাইন ইন
// //                     </button>

// //                     <button className="bg-green-300 text-white px-4 py-2 rounded-md">
// //                         সাইন আপ
// //                     </button>
// //                 </div>

// //             </div>
// //         </div>
// //     );
// // };

// // export default Header;



"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Button from "./Button";

const Header = () => {
    const [date, setDate] = useState("");

    useEffect(() => {
        setDate(
            new Date().toLocaleDateString("bn-BD", {
                dateStyle: "full",
            })
        );
    }, []);

    return (
        <div className="bg-gray-100">
            <div className="container mx-auto flex justify-between items-center p-4">

                <Link href={"/"}>
                    <div className="flex items-center gap-4">
                        <Image
                            src="/logo-icon.png"
                            alt="Logo"
                            height={50}
                            width={50}
                            className="p-3.5 bg-green-600 rounded-2xl"
                        />

                        <div>
                            <p className="font-bold text-[1.15rem]">
                                বাজার দর
                            </p>

                            <p>
                                <small>{date}</small>
                            </p>
                        </div>
                    </div>
                </Link>

                <Button></Button>

            </div>
        </div>
    );
};

export default Header;