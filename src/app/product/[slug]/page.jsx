
import { getProductBySlug } from "@/lib/products";
const ProductDetails = async ({ params }) => {
    // await connection();

    const { slug } = await params;
    const products = await getProductBySlug();
    const product = products.find((item) => item.slug === slug);

    if (!product) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-[#f1f6f2]">
                <div className="text-center">
                    <h1 className="text-xl font-bold">পণ্য পাওয়া যায়নি</h1>
                    <p className="text-sm text-base-content/60 mt-2">
                        এই পণ্যের কোনো তথ্য পাওয়া যায়নি।
                    </p>
                </div>
            </div>
        );
    }

    // Calculate min, max and average from all markets
    const allMinPrices = product.markets.map((item) => item.min);
    const allMaxPrices = product.markets.map((item) => item.max);

    const minimumPrice = Math.min(...allMinPrices);
    const maximumPrice = Math.max(...allMaxPrices);

    const averagePrice =
        product.markets.reduce(
            (total, market) => total + (market.min + market.max) / 2,
            0
        ) / product.markets.length;

    const isUp = product.change.dir === "up";

    return (
        <main className="min-h-screen bg-[#f1f6f2] py-5 px-4">

            <div className="max-w-6xl mx-auto">

                {/* Breadcrumb */}
                <div className="text-[11px] text-base-content/50 mb-4">
                    হোম
                    <span className="mx-2">›</span>
                    {product.categoryNameBn}
                    <span className="mx-2">›</span>
                    <span className="text-base-content/80">
                        {product.nameBn}
                    </span>
                </div>


                {/* ================= PRODUCT SUMMARY ================= */}
                <section className="bg-base-100 border border-base-200 rounded-xl p-4 md:p-5 shadow-sm">

                    <div className="flex flex-col sm:flex-row justify-between gap-5">

                        {/* Left */}
                        <div className="flex gap-4">

                            {/* Image */}
                            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-[#eef3ee] flex items-center justify-center text-3xl shrink-0">
                                {product.image}
                            </div>

                            {/* Information */}
                            <div>
                                <h1 className="text-lg sm:text-xl font-bold">
                                    {product.nameBn}
                                </h1>

                                <p className="text-[11px] text-base-content/60 mt-1">
                                    {product.categoryNameBn} • বাজারের গড় দামের তথ্য
                                </p>

                                <div className="flex flex-wrap gap-2 mt-2">

                                    <span className="badge badge-sm badge-outline">
                                        {product.categoryNameBn}
                                    </span>

                                    <span className="badge badge-sm badge-outline">
                                        প্রতি {product.unit === "kg" ? "কেজি" : product.unit}
                                    </span>

                                </div>
                            </div>

                        </div>


                        {/* Today's Price */}
                        <div className="bg-[#f3f6f3] rounded-xl px-5 py-3 min-w-[130px]">

                            <p className="text-[9px] text-base-content/50">
                                আজকের দাম
                            </p>

                            <div className="flex items-baseline gap-1 mt-1">
                                <span className="text-2xl font-bold">
                                    ৳{product.today}
                                </span>

                                <span className="text-[10px] text-base-content/50">
                                    / {product.unit}
                                </span>
                            </div>

                            <div
                                className={`text-[9px] mt-1 ${isUp ? "text-error" : "text-success"
                                    }`}
                            >
                                {isUp ? "▲" : "▼"} {product.change.pct}%
                            </div>

                        </div>

                    </div>

                </section>


                {/* ================= PRICE SUMMARY ================= */}
                <section className="bg-base-100 border border-base-200 rounded-xl p-4 mt-4 shadow-sm">

                    <h2 className="text-sm font-semibold mb-3">
                        দামের সারসংক্ষেপ
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">

                        {/* Minimum */}
                        <div className="border border-base-200 rounded-xl p-4">

                            <p className="text-[10px] text-base-content/50">
                                সর্বনিম্ন দাম
                            </p>

                            <p className="text-lg font-bold text-success mt-1">
                                ৳{minimumPrice}
                            </p>

                            <p className="text-[9px] text-base-content/50">
                                প্রতি {product.unit === "kg" ? "কেজি" : product.unit}
                            </p>

                        </div>


                        {/* Maximum */}
                        <div className="border border-base-200 rounded-xl p-4">

                            <p className="text-[10px] text-base-content/50">
                                সর্বোচ্চ দাম
                            </p>

                            <p className="text-lg font-bold text-error mt-1">
                                ৳{maximumPrice}
                            </p>

                            <p className="text-[9px] text-base-content/50">
                                প্রতি {product.unit === "kg" ? "কেজি" : product.unit}
                            </p>

                        </div>


                        {/* Average */}
                        <div className="border border-base-200 rounded-xl p-4">

                            <p className="text-[10px] text-base-content/50">
                                গড় দাম
                            </p>

                            <p className="text-lg font-bold text-info mt-1">
                                ৳{Math.round(averagePrice)}
                            </p>

                            <p className="text-[9px] text-base-content/50">
                                বাজারগুলোর গড়
                            </p>

                        </div>

                    </div>

                </section>


                {/* ================= MARKET TABLE ================= */}
                <section className="bg-base-100 border border-base-200 rounded-xl p-4 mt-4 shadow-sm">

                    <div className="flex items-center justify-between mb-3">

                        <div>
                            <h2 className="text-sm font-semibold">
                                বাজারভিত্তিক আজকের দাম
                            </h2>

                            <p className="text-[10px] text-base-content/50 mt-1">
                                বিভিন্ন বাজার থেকে সংগৃহীত আজকের মূল্য
                            </p>
                        </div>

                        <span className="badge badge-sm badge-ghost">
                            {product.markets.length} বাজার
                        </span>

                    </div>


                    {/* Desktop Table */}
                    <div className="hidden md:block overflow-x-auto">

                        <table className="table table-sm">

                            <thead>
                                <tr className="text-[10px] text-base-content/50">
                                    <th>বাজার</th>
                                    <th>বিভাগ</th>
                                    <th>সর্বনিম্ন</th>
                                    <th>সর্বোচ্চ</th>
                                    <th>গড়</th>
                                </tr>
                            </thead>

                            <tbody>

                                {product.markets.map((market, index) => {

                                    const marketAverage =
                                        (market.min + market.max) / 2;

                                    return (
                                        <tr
                                            key={index}
                                            className="text-[11px] hover:bg-base-200/50"
                                        >

                                            <td className="font-medium">
                                                {market.market}
                                            </td>

                                            <td className="text-base-content/60">
                                                {market.division}
                                            </td>

                                            <td className="text-success font-medium">
                                                ৳{market.min}
                                            </td>

                                            <td className="text-error font-medium">
                                                ৳{market.max}
                                            </td>

                                            <td className="font-medium">
                                                ৳{Math.round(marketAverage)}
                                            </td>

                                        </tr>
                                    );
                                })}

                            </tbody>

                        </table>

                    </div>


                    {/* Mobile Cards */}
                    <div className="md:hidden space-y-2">

                        {product.markets.map((market, index) => {

                            const marketAverage =
                                (market.min + market.max) / 2;

                            return (
                                <div
                                    key={index}
                                    className="border border-base-200 rounded-lg p-3"
                                >

                                    <div className="flex justify-between">

                                        <div>
                                            <p className="text-xs font-semibold">
                                                {market.market}
                                            </p>

                                            <p className="text-[9px] text-base-content/50 mt-1">
                                                {market.division}
                                            </p>
                                        </div>

                                        <div className="text-right">

                                            <p className="text-xs font-bold">
                                                ৳{Math.round(marketAverage)}
                                            </p>

                                            <p className="text-[9px] text-base-content/50">
                                                গড় দাম
                                            </p>

                                        </div>

                                    </div>


                                    <div className="flex gap-4 mt-2 text-[10px]">

                                        <span className="text-success">
                                            সর্বনিম্ন ৳{market.min}
                                        </span>

                                        <span className="text-error">
                                            সর্বোচ্চ ৳{market.max}
                                        </span>

                                    </div>

                                </div>
                            );
                        })}

                    </div>

                </section>

            </div>

        </main>
    );
};

export default ProductDetails;