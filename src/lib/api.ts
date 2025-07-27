import { Product } from "@/types/product";
import axios from "axios";


const BASE_URL = "https://api.10minuteschool.com/discovery-service/api/v1";

export const getProductData = async (lang: "en" | "bn" = "en"): Promise<Product | null> => {
  try {
    const res = await axios.get(`${BASE_URL}/products/ielts-course`, {
      params: { lang },
      headers: {
        "X-TENMS-SOURCE-PLATFORM": "web",
        Accept: "application/json",
      },
    });

    return res.data.data; 
  } catch (error) {
    console.error("Error fetching product:", error);
    return null;
  }
};

