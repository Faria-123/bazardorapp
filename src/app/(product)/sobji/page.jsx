import HomeCard from '@/components/HomeCard';
import { getProductsByCategory } from '@/lib/products';
import React from 'react';

const page = async () => {
    const data = await getProductsByCategory("sobji");
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {
                data.map((product) => <HomeCard key={product.id} product={product} />)
            }
        </div>
    );
};

export default page;