"use client";

import { useParams } from "next/navigation"; // 👈 Next.js hook
import { useScreen } from "../context/ScreenContext";
import { ProductDesk, ProductMobile } from "@/components/ProductDetail";
import useProductsByID  from "@/hooks/products/ProductsByID";
import Spinner from "../components/Spinner";



export default function ItemDetailContainer() {
  const params = useParams();
  const productID = params.productID as string;

  const { isMobile } = useScreen();
  const { product, spinner } = useProductsByID({
    id: productID,
    isDepend: productID,
  });

  return (
    <>
      <Spinner loading={spinner} />
      {product && (
        <table style={{ width: "70%", marginLeft: "15%", marginTop: "1%" }}>
          <tbody>
            {isMobile ? (
              <ProductMobile product={product[0]} />
            ) : (
              <ProductDesk product={product[0]} />
            )}
          </tbody>
        </table>
      )}
    </>
  );
}
