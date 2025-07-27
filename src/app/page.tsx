import { getProductData } from "@/lib/api";
import { Product } from "@/types/product";
import ProductPage from "./ProductPage";
import "./globals.css";

export default async function home() {
  const data: Product | null = await getProductData("en");

  if (!data) return <div className="text-red-500">Error loading product</div>;

  return <ProductPage product={data} />;
}
