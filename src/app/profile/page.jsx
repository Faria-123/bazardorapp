// // import React from 'react';
// "use client"

// import { useSession } from "@/lib/auth-client";

// // import { useSession } from "@/lib/auth-client";

// const page = () => {
//     const { data, isPending } = useSession();
//     const user = data?.user;
//     console.log(user);

//     if (isPending) {
//         return (
//             <div className="flex min-h-screen items-center justify-center">
//                 <span className="loading loading-spinner loading-lg"></span>
//             </div>
//         );
//     }

//     return (
//         <div className="bg-gray-100">

//             <div className="text-center">
//                 <div>
//                     <h1 className="text-2xl font-bold">আমার প্রোফাইল</h1>
//                     <p className="text-gray-500">আপনার অ্যাকাউন্টের তথ্য এখানে দেখুন।</p>
//                 </div>
//                 <div>
//                     <div >
//                         <p className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-green-600 bg-green-100 text-2xl font-bold text-green-700">
//                             {user.name?.[0]?.toUpperCase() || "U"}
//                         </p>
//                     </div>
//                     <div className=" gap-3">
//                         <p className="text-2xl font-bold">{user.name}</p>
//                         <p className="text-gray-400">{user.email}</p>
//                     </div>
//                     <div></div>
//                 </div>
//                 <div></div>
//             </div>
//         </div>
//     );
// };

// export default page;

"use client";

import { useSession, signOut, updateUser } from "@/lib/auth-client";
import { toast } from "react-toastify";


const Page = () => {
    const { data, isPending } = useSession();
    const user = data?.user;
    const handleUpdate = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const dataa = Object.fromEntries(formData.entries());
        console.log(dataa);
        const { data, error } = await updateUser({
            name: dataa?.name,
        });
        if (data) {
            toast.success("Successfully Update");
        }
        if (error) {
            toast.success("Failed to Update");
        }
    }

    if (isPending) {
        return (
            <div className="flex min-h-screen items-center justify-center">
                <span className="loading loading-spinner loading-lg text-success"></span>
            </div>
        );
    }

    if (!user) {
        return (
            <div className="flex min-h-screen items-center justify-center">
                <div className="text-center">
                    <p className="mb-4 text-gray-600">
                        আপনার প্রোফাইল দেখতে সাইন ইন করুন।
                    </p>
                    <a href="/signin" className="btn bg-green-600 text-white">
                        সাইন ইন
                    </a>
                </div>
            </div>
        );
    }


    return (
        <div className="min-h-screen bg-gray-100 px-4 py-8">
            <div className="mx-auto max-w-3xl">


                <div className="mb-6">
                    <h1 className="text-2xl font-bold text-gray-800">
                        আমার প্রোফাইল
                    </h1>
                    <p className="mt-1 text-sm text-gray-500">
                        আপনার অ্যাকাউন্টের তথ্য এখানে দেখুন।
                    </p>
                </div>


                <div className="mb-6 flex flex-col items-center justify-between gap-4 rounded-xl border border-gray-200 bg-white p-6 shadow-sm sm:flex-row">
                    <div className="flex items-center gap-4">
                        <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border-2 border-green-600 bg-green-100 text-2xl font-bold text-green-700">
                            {user.name?.[0]?.toUpperCase() || "U"}
                        </div>

                        <div>
                            <h2 className="text-lg font-bold text-gray-800">
                                {user.name || "নাম দেওয়া নেই"}
                            </h2>
                            <p className="text-sm text-gray-500">
                                {user.email}
                            </p>
                        </div>
                    </div>

                    <button
                        onClick={() => signOut()}
                        className="btn btn-outline btn-error btn-sm"
                    >
                        ↪ সাইন আউট
                    </button>
                </div>


                <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                    <h3 className="mb-6 text-lg font-bold text-gray-800">
                        তথ্য
                    </h3>

                    <form onSubmit={handleUpdate} className="space-y-3">


                        <div>
                            <label
                                htmlFor="name"
                                className="label py-0 mb-1"
                            >
                                <span className="label-text text-[10px]">
                                    নাম
                                </span>
                            </label>

                            <input
                                id="name"
                                name="name"
                                type="text"
                                defaultValue={user.name || ""}

                                placeholder="আপনার পুরো নাম"
                                required
                                className="input input-bordered input-sm w-full text-xs"
                            />
                        </div>

                        <button type="submit" className="btn w-full border-none bg-green-600 text-white hover:bg-green-700" > আপডেট </button>

                    </form>
                </div>

            </div>
        </div>
    );


};

export default Page;
