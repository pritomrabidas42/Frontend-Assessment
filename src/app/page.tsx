import { getProductData } from "@/lib/api";
import { Product } from "@/types/product";
import ProductPageClient from "./ProductPageClient";

export default async function home() {
  const data: Product | null = await getProductData("en");

  if (!data) return <div className="text-red-500">Error loading product</div>;

  return <ProductPageClient product={data} />;
}
