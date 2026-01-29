"use client";

import { Box } from "@mui/material";

import ProductCard from "@/components/productsList/ProductCard";
import WaitingMsj from "@/components/WaitingMsj";
import { useMsjs } from "@/context/LoadingMsjContext";
import Spinner from "@/components/Spinner";
import { useParams } from "next/navigation";
import RouterCategories from "@/hooks/products/RouterCategories";
import Categories from "@/hooks/categories/Categories";
import SidebarFilter from "@/components/productsList/SidebarFilter";

export default function ItemListContainer() {
  const params = useParams();
  const id = params?.id as string | undefined;


  
  const { products, spinner } = RouterCategories({
    isDepend: id,
    id,
  });

  const { categories, spinner: cat_spinner } = Categories({});

  const { no_games } = useMsjs();

  return (
    <>
      <Spinner loading={cat_spinner && spinner} />
      {Array.isArray(products) && Array.isArray(categories) ? (
        <Box sx={{ display: "flex", minHeight: "100vh" }}>
          <Box
            sx={{
              flexShrink: 0,
              transition: "width 0.3s ease",
            }}
          >
            <SidebarFilter categories={categories} />
          </Box>

          {products.length > 0 ? (
            <Box
              sx={{
                flexGrow: 1,
                p: 3,
                display: "flex",
                flexWrap: "wrap",
                gap: 2,
                alignItems: "flex-start",
                minWidth: 0,
              }}
            >
              {products.map((game) => (
                <ProductCard key={game.id} game={game} />
              ))}
            </Box>
          ) : (
            <Box
              sx={{
                flexGrow: 1,
                p: 3,
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
              }}
            >
              <WaitingMsj waitMsj={no_games} />
            </Box>
          )}
        </Box>
      ) : null}
    </>
  );
}
