"use client";

import { Box, Button, Typography } from "@mui/material";
import Link from "next/link"; // 👈 Next.js Link
import { routes } from "../router/router";
import ProductCounter from "./ProductCounter";
import useProductDetailHook from "@/hooks/products/ProductDetail";
import GameType from "@/types/games";

export function ProductMobile({ product }: { product: GameType }) {
  const { quantity, setQuantity, inCart, handleAddToCart } =
    useProductDetailHook(product);

  return (
    <>
      <tr>
        <td style={{ height: "50px" }}></td>
      </tr>
      <tr>
        <td style={{ width: "100%" }}>
          <Box
            component="img"
            sx={{ width: "100%" }}
            alt="videogame"
            src={product.img}
          />
        </td>
      </tr>
      <tr>
        <td style={{ textAlign: "center" }}>
          <Typography color="var(--bs-font-color)" variant="h2">
            {product.name.toUpperCase()}
          </Typography>
        </td>
      </tr>
      <tr>
        <td>
          <Typography
            color="var(--bs-font-color)"
            sx={{ marginTop: "25px", marginLeft: "20px" }}
            variant="h5"
          >
            {product.desc}
          </Typography>
        </td>
      </tr>
      <tr>
        <td>
          <Box sx={{ width: "100%", textAlign: "center", mt: 3 }}>
            <Typography
              color="var(--bs-font-color)"
              variant="h4"
              sx={{ mb: 1 }}
            >
              ${product.price}
            </Typography>

            <Typography
              color="var(--bs-font-color)"
              variant="body2"
              sx={{ mb: 2 }}
            >
              Stock: {product.stock}
            </Typography>

            {!inCart && (
              <ProductCounter
                quantity={quantity}
                setQuantity={setQuantity}
                stock={product.stock}
              />
            )}

            <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
              {!inCart && (
                <Button
                  aria-label="carrito"
                  onClick={handleAddToCart}
                  sx={{
                    color: "white",
                    backgroundColor: "transparent",
                    "&:hover": { backgroundColor: "rgba(255,255,255,0.1)" },
                  }}
                >
                  <Typography variant="h5">Añadir al Carrito</Typography>
                </Button>
              )}

              <Button
                aria-label="carrito"
                component={Link} // 👈 reemplazo NavLink por Link
                href={routes.productPay}
                sx={{
                  color: "white",
                  backgroundColor: "transparent",
                  "&:hover": { backgroundColor: "rgba(255,255,255,0.1)" },
                }}
              >
                <Typography variant="h5">Pagar</Typography>
              </Button>
            </Box>
          </Box>
        </td>
      </tr>
    </>
  );
}

export function ProductDesk({ product }: { product: GameType }) {
  const { quantity, setQuantity, inCart, handleAddToCart } =
    useProductDetailHook(product);

  return (
    <>
      <tr>
        <td style={{ width: "30%" }}>
          <Box
            component="img"
            sx={{ width: "100%" }}
            alt="videogame"
            src={product.img}
          />
        </td>
        <td className="w-70" style={{ verticalAlign: "top" }}>
          <span style={{ textAlign: "center" }}>
            <Typography color="var(--bs-font-color)" variant="h2">
              {product.name.toUpperCase()}
            </Typography>
          </span>
          <Typography
            color="var(--bs-font-color)"
            sx={{ marginTop: "25px", marginLeft: "20px" }}
            variant="h5"
          >
            {product.desc}
          </Typography>
          <Box
            sx={{ width: "100%", paddingRight: "20px", textAlign: "center" }}
          >
            <Box sx={{ width: "100%", textAlign: "center", mt: 3 }}>
              <Typography
                color="var(--bs-font-color)"
                variant="h4"
                sx={{ mb: 1 }}
              >
                ${product.price}
              </Typography>

              <Typography
                color="var(--bs-font-color)"
                variant="body2"
                sx={{ mb: 2 }}
              >
                Stock: {product.stock}
              </Typography>

              {!inCart && (
                <ProductCounter
                  quantity={quantity}
                  setQuantity={setQuantity}
                  stock={product.stock}
                />
              )}

              <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
                {!inCart && (
                  <Button
                    aria-label="carrito"
                    onClick={handleAddToCart}
                    sx={{
                      color: "white",
                      backgroundColor: "transparent",
                      "&:hover": { backgroundColor: "rgba(255,255,255,0.1)" },
                    }}
                  >
                    <Typography variant="h5">Añadir al Carrito</Typography>
                  </Button>
                )}

                <Button
                  aria-label="carrito"
                  component={Link} // 👈 reemplazo NavLink por Link
                  href={routes.productPay}
                  sx={{
                    color: "white",
                    backgroundColor: "transparent",
                    "&:hover": { backgroundColor: "rgba(255,255,255,0.1)" },
                  }}
                >
                  <Typography variant="h5">Pagar</Typography>
                </Button>
              </Box>
            </Box>
          </Box>
        </td>
      </tr>
    </>
  );
}
