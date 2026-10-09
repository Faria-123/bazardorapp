
import Link from "next/link";

const NotFound = () => {
    return (
        <main className="min-h-screen bg-[#f1f6f2] flex items-center justify-center px-4">
            <div className="text-center max-w-md">

                {/* 404 Illustration */}
                <div className="text-8xl font-extrabold text-green-600">
                    404
                </div>

                {/* Message */}
                <h1 className="text-2xl font-bold text-gray-800 mt-4">
                    পেজটি খুঁজে পাওয়া যায়নি!
                </h1>

                <p className="text-sm text-gray-500 mt-3 leading-6">
                    দুঃখিত, আপনি যে পেজটি খুঁজছেন সেটি পাওয়া যাচ্ছে না।
                    পেজটি সরানো হয়েছে অথবা ঠিকানাটি ভুল হতে পারে।
                </p>

                {/* CTA Button */}
                <Link
                    href="/"
                    className="btn bg-green-600 hover:bg-green-700 text-white border-none rounded-lg mt-6 px-6"
                >
                    ← হোম পেজে ফিরে যান
                </Link>

            </div>
        </main>
    );
};

export default NotFound;

