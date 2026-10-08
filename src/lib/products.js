"use cache";

export async function getProductsByCategory(category) {
    const res = await fetch(
        `https://api.abcz.workers.dev/api/bazardor/products?category=${category}`
    );

    if (!res.ok) {
        throw new Error("Failed to fetch products");
    }

    return res.json();
}