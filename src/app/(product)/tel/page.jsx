import HomeCard from '@/components/HomeCard';
import ProductList from '@/components/ProductList';
import { getProductsByCategory } from '@/lib/products';
import React from 'react';

const page = async () => {
    const data = await getProductsByCategory("tel");
    return (
        <main className="min-h-screen bg-[#f1f6f2] px-2 py-2">
            <div className="max-w-7xl mx-auto">

                {/* Category Header */}
                <section className="bg-base-100 border border-base-200 rounded-xl px-4 py-3 shadow-sm">
                    <div className="flex items-center gap-3">

                        <div className="w-10 h-10 rounded-full bg-[#eef1ed] flex items-center justify-center text-2xl">
                            {data[0].categoryIcon}
                        </div>

                        <div>
                            <h1 className="text-base font-bold">
                                {data.categoryNameBn}
                            </h1>

                            <p className="text-[10px] text-base-content/50">
                                {data.length}টি পণ্য • আজকের বাজারের দাম ও পরিবর্তন
                            </p>
                        </div>

                    </div>
                </section>

                {/* Product List + Sort */}
                <ProductList products={data} />

            </div>
        </main>
    );
};

export default page;