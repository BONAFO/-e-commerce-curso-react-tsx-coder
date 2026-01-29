import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Box,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useScreen } from "@/context/ScreenContext";
import Link from "next/link"; // 👈 usamos Next.js Link
import { routes } from "@/router/router";
import ProductCounter from "../ProductCounter";
import useProductCardHook from "@/hooks/products/ProductCard";
import GameType from "@/types/games";

interface ProductCardProps {
  game: GameType;
}

export default function ProductCard({
  game,
}: ProductCardProps): React.ReactElement {
  const { isMobile } = useScreen();
  const { quantity, setQuantity, inCart, handleAddToCart } =
    useProductCardHook(game);

  const hasStock = game.stock > 0;

  return (
    <Card
      sx={{
        width: 300,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        userSelect: "none",
        backgroundColor: "#343434bb",
      }}
    >
      <CardMedia
        component="img"
        loading="lazy"
        height="140"
        image={game.img}
        alt="game cover"
      />

      <CardContent sx={{ flexGrow: 1 }}>
        <Typography variant="h5" color="#b7b7b7ff">
          {game.name}
        </Typography>

        <Typography variant="body1" color="#b7b7b7ff">
          ${game.price}
        </Typography>

        <Typography
          variant="body2"
          color={hasStock ? "#b7b7b7aa" : "#ff6b6b"}
          sx={{ mb: 1 }}
        >
          Stock: {game.stock}
        </Typography>

        {hasStock && !inCart && (
          <ProductCounter
            quantity={quantity}
            setQuantity={setQuantity}
            stock={game.stock}
          />
        )}
      </CardContent>

      <Box
        sx={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          justifyContent: "space-between",
          gap: 1,
          p: 2,
          pt: 0,
        }}
      >
        {hasStock ? (
          !inCart ? (
            <Button
              variant="contained"
              fullWidth
              onClick={handleAddToCart}
              startIcon={<ShoppingCartIcon />}
              sx={{ flex: 1 }}
            >
              Agregar
            </Button>
          ) : (
            <Link href={routes.productPay} passHref>
              <Button
                variant="contained"
                color="info"
                fullWidth
                sx={{ flex: 1 }}
              >
                PAGAR
              </Button>
            </Link>
          )
        ) : null}

        <Link href={routes.productDetail(game.id)} passHref>
          <Button
            variant="outlined"
            fullWidth
            color="info"
            sx={{ flex: 1, textDecoration: "none" }}
          >
            Ver
          </Button>
        </Link>
      </Box>
    </Card>
  );
}
