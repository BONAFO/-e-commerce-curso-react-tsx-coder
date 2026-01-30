"use client";

import {
  IconButton,
  Menu,
  MenuItem,
  ListItemText,
  ListItem,
  Button,
  Badge,
  Box,
  Typography,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Link from "next/link"; // 👈 Next.js Link
import { routes } from "@/router/router";
import useCartHook from "@/hooks/cart/Cart";

export default function CartWidget() {
  const {
    anchorEl,
    cart,
    handleOpen,
    handleClose,
    eliminarUnidad,
    eliminarStack,
  } = useCartHook();

  return (
    <>
      <IconButton onClick={handleOpen} sx={{ p: 0 }}>
        <Badge badgeContent={cart.length} color="error">
          <Box
            sx={{
              width: 32,
              height: 32,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <ShoppingCartIcon sx={{ fontSize: 28 }} />
          </Box>
        </Badge>
      </IconButton>

      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        sx={{ mt: 1 }}
      >
        {cart.length === 0 ? (
          <MenuItem disabled>
            <ListItemText primary="El carrito está vacío" />
          </MenuItem>
        ) : (
          <>
            {cart.map((item, index) => (
              <MenuItem key={index}>
                <ListItem
                  disableGutters
                  sx={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Typography sx={{ flex: 1 }}>{item.name}</Typography>
                  <Typography sx={{ mx: 2 }}>x{item.quantity}</Typography>
                  <Typography>${item.tprice}</Typography>

                  <Button
                    color="error"
                    sx={{ ml: 2 }}
                    size="small"
                    onClick={() => eliminarUnidad(index)}
                  >
                    -1
                  </Button>

                  <Button
                    color="error"
                    sx={{ ml: 1 }}
                    size="small"
                    onClick={() => eliminarStack(index)}
                  >
                    Eliminar
                  </Button>
                </ListItem>
              </MenuItem>
            ))}

            <MenuItem disabled>
              <ListItem disableGutters sx={{ width: "100%" }}>
                <Box sx={{ flexGrow: 1, textAlign: "right" }}>
                  <Typography color="text.secondary">
                    Total: ${cart.reduce((acc, item) => acc + item.tprice, 0)}
                  </Typography>
                </Box>
              </ListItem>
            </MenuItem>
          </>
        )}

        <Button
          color="info"
          sx={{ textAlign: "center", width: "100%" }}
          size="small"
          component={Link} // 👈 Next.js Link
          href={routes.productPay} // 👈 usamos href en vez de to
        >
          Pagar
        </Button>
      </Menu>
    </>
  );
}
