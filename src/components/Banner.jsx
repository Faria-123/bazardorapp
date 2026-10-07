import Image from "next/image";

const Banner = () => {
    const date = new Date().toLocaleString("bn-BD", {
        dateStyle: 'full'
    })
    return (
        <section className="px-4 py-6 bg-gray-100">
            <div className="card mx-auto max-w-6xl overflow-hidden rounded-2xl border border-base-200 bg-base-100 shadow-sm">

                <div className="card-body flex flex-col justify-between gap-6 p-5 sm:p-6 md:flex-row md:items-center">

                    {/* Left Content */}
                    <div className="flex-1">

                        {/* Date Badge */}
                        <div className="badge badge-success badge-soft mb-3 text-xs font-medium">
                            {date}
                        </div>

                        {/* Heading */}
                        <h1 className="text-2xl font-bold leading-tight text-base-content md:text-3xl">
                            আজকের বাজারের দাম এক নজরে
                        </h1>

                        {/* Description */}
                        <p className="mt-3 max-w-2xl text-sm leading-6 text-base-content/60">
                            চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও অন্যান্য পণ্যের
                            আজকের বাজারদর — বাজারভিত্তিক বিশ্লেষণ, তথ্য, পরিবর্তন-
                            সম্পর্কিত সকল তথ্য পাবেন এখানে।
                        </p>

                        {/* Button */}
                        <div className="mt-5">
                            <button className="btn btn-success btn-sm px-5 text-white shadow-sm">
                                সব দাম দেখুন
                            </button>
                        </div>

                    </div>

                    {/* Right Image */}
                    <div className="flex shrink-0 justify-center md:w-52">
                        <Image
                            src="/bazar-hero.png"
                            alt="সবজির ঝুড়ি"
                            width={180}
                            height={150}
                            className="h-auto w-40 object-contain md:w-48"
                        />
                    </div>

                </div>

            </div>
        </section>
    );
};

export default Banner;