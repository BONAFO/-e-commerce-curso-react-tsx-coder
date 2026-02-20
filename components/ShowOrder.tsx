// @ts-nocheck
"use client";
import React from "react";
import { Box, Typography, Button } from "@mui/material";
import Link from "next/link";
import Spinner from "../components/Spinner";
import { useScreen } from "../context/ScreenContext";

import { routes } from "../router/router";
import OrderType from "@/types/orders";
import { useShowOrderHook } from "@/hooks/pay/ShowOrder";
import { payMethods } from "@/hooks/pay/PayInfo";
import OrderNotFound from "./OrderNotFound";

export default function ShowOrder(): React.ReactElement {
  const { isMobile } = useScreen();
  const { orderInfo, spinner } =
    useShowOrderHook({});

  if (!spinner && !orderInfo) {
    return <OrderNotFound />;
  }

  return (
    <>
      <Spinner loading={spinner} />
      {orderInfo ? (
        
        <>
          {(()=>{
            console.log("asd", orderInfo);
            
            return ""
          })()}
          <Box
            sx={{
              backgroundColor: "#51515121",
              width: isMobile ? "80%" : "60%",
              marginLeft: isMobile ? "10%" : "20%",
              marginTop: "50px",
              padding: 2,
              borderRadius: 2,
            }}
          >
            <Typography
              variant={isMobile ? "h5" : "h4"}
              color="#e9e9e9a7"
              sx={{ mb: 2 }}
            >
              Pedido de {orderInfo.fullName}
            </Typography>

            <Box sx={{ mb: 2 }}>
              <Typography variant="body1" color="#e9e9e9a7">
                Email: {orderInfo.email}
              </Typography>
              <Typography variant="body1" color="#e9e9e9a7">
                Teléfono: {orderInfo.phone}
              </Typography>
              <Typography variant="body1" color="#e9e9e9a7">
                Dirección: {orderInfo.address}
              </Typography>
              <Typography variant="body1" color="#e9e9e9a7">
                DNI: {orderInfo.dni}
              </Typography>

              <Typography variant="body1" color="#e9e9e9a7">
                Método de pex-end", gap: 0.5,ago:{" "}
                {payMethods.find((pay) => pay.id === orderInfo.payMethod)?.text}
              </Typography>

              {orderInfo.payMethod === 1 || orderInfo.payMethod === 2 ? (
                <Typography variant="body1" color="#e9e9e9a7">
                  Tarjeta Terminada en: {orderInfo.cardNumber}
                </Typography>
              ) : null}
            </Box>

            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                marginTop: "16px",
              }}
            >
              <tbody>
                {orderInfo.products.map((item) => (
                  // @ts-ignore
                  <tr key={item.id} style={{ borderBottom: "1px solid black" }}>
                    <td style={{ width: "200px", padding: "8px" }}>
                      <img
                        // @ts-ignore
                        src={item.img}
                        // @ts-ignore
                        alt={item.name}
                        style={{ width: "100%" }}
                      />
                    </td>

                    <td style={{ padding: "8px", verticalAlign: "middle" }}>
                      <Typography color="#e9e9e9a7" variant="h6">
                        {/* @ts-ignore */}
                        {item.name}
                      </Typography>
                      <Typography color="#e9e9e9a7" variant="body1">
                        {/* @ts-ignore */}
                        Cantidad: {item.quantity}
                      </Typography>
                    </td>

                    <td
                      style={{
                        width: "220px",
                        padding: "8px",
                        textAlign: "right",
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "flex-end",
                          gap: 0.5,
                        }}
                      >
                        <Typography color="#e9e9e9a7" variant="h5">
                          {/* @ts-ignore */}
                          ${item.price * item.quantity}
                        </Typography>
                        <Typography color="#e9e9e9a7" variant="body2">
                          {/* @ts-ignore */}
                          Unitario: ${item.price}
                        </Typography>
                      </Box>
                    </td>
                  </tr>
                ))}

                <tr style={{ borderTop: "2px solid black" }}>
                  <td
                    colSpan={3}
                    style={{ padding: "8px", textAlign: "right" }}
                  >
                    <Typography color="#e9e9e9a7" variant="h5">
                      Total: ${orderInfo.finalImport}
                    </Typography>
                  </td>
                </tr>
              </tbody>
            </table>

            <Box
              sx={{
                mt: 3,
                textAlign: "center",
                display: "flex",
                gap: 2,
                justifyContent: "center",
              }}
            >
              <Button
                variant="contained"
                color="primary"
                component={Link}
                href={routes.searchOrder}
                sx={{
                  fontSize: isMobile ? "16px" : "18px",
                  width: isMobile ? "50%" : "auto",
                }}
              >
                Volver a buscar pedido
              </Button>

              <Button
                variant="contained"
                color="secondary"
                component={Link}
                href={routes.mainPage}
                sx={{
                  fontSize: isMobile ? "16px" : "18px",
                  width: isMobile ? "50%" : "auto",
                }}
              >
                Volver a la tienda
              </Button>
            </Box>
          </Box>
        </>
      ) : (
        ""
      )}
    </>
    // <>
    //   <Spinner loading={spinner} />

    //   {!spinner && (
    //     <Box
    //       sx={{
    //         backgroundColor: "#51515121",
    //         width: isMobile ? "80%" : "60%",
    //         marginLeft: isMobile ? "10%" : "20%",
    //         marginTop: "50px",
    //         padding: 2,
    //         borderRadius: 2,
    //       }}
    //     >
    //       <Typography
    //         variant={isMobile ? "h5" : "h4"}
    //         color="#e9e9e9a7"
    //         sx={{ mb: 2 }}
    //       >
    //         Pedido de {orderInfo.fullName}
    //       </Typography>

    //       <Box sx={{ mb: 2 }}>
    //         <Typography variant="body1" color="#e9e9e9a7">
    //           Email: {orderInfo.email}
    //         </Typography>
    //         <Typography variant="body1" color="#e9e9e9a7">
    //           Teléfono: {orderInfo.phone}
    //         </Typography>
    //         <Typography variant="body1" color="#e9e9e9a7">
    //           Dirección: {orderInfo.address}
    //         </Typography>
    //         <Typography variant="body1" color="#e9e9e9a7">
    //           DNI: {orderInfo.dni}
    //         </Typography>

    //         <Typography variant="body1" color="#e9e9e9a7">
    //           Método de pago:{" "}
    //           {payMethods.find((pay) => pay.id === orderInfo.payMethod)?.text}
    //         </Typography>

    //         {orderInfo.payMethod === 1 || orderInfo.payMethod === 2 ? (
    //           <Typography variant="body1" color="#e9e9e9a7">
    //             Tarjeta Terminada en: {orderInfo.cardNumber}
    //           </Typography>
    //         ) : null}
    //       </Box>

    //       <table
    //         style={{
    //           width: "100%",
    //           borderCollapse: "collapse",
    //           marginTop: "16px",
    //         }}
    //       >
    //         <tbody>
    //           {(orderInfo.products || []).map((item) => (
    //             // @ts-ignore
    //             <tr key={item.id} style={{ borderBottom: "1px solid black" }}>
    //               <td style={{ width: "200px", padding: "8px" }}>
    //                 <img
    //                   // @ts-ignore
    //                   src={item.img}
    //                   // @ts-ignore
    //                   alt={item.name}
    //                   style={{ width: "100%" }}
    //                 />
    //               </td>

    //               <td style={{ padding: "8px", verticalAlign: "middle" }}>
    //                 <Typography color="#e9e9e9a7" variant="h6">
    //                   {/* @ts-ignore */}
    //                   {item.name}
    //                 </Typography>
    //                 <Typography color="#e9e9e9a7" variant="body1">
    //                   {/* @ts-ignore */}
    //                   Cantidad: {item.quantity}
    //                 </Typography>
    //               </td>

    //               <td
    //                 style={{
    //                   width: "220px",
    //                   padding: "8px",
    //                   textAlign: "right",
    //                 }}
    //               >
    //                 <Box
    //                   sx={{
    //                     display: "flex",
    //                     flexDirection: "column",
    //                     alignItems: "flex-end",
    //                     gap: 0.5,
    //                   }}
    //                 >
    //                   <Typography color="#e9e9e9a7" variant="h5">
    //                     {/* @ts-ignore */}
    //                     ${item.price * item.quantity}
    //                   </Typography>
    //                   <Typography color="#e9e9e9a7" variant="body2">
    //                     {/* @ts-ignore */}
    //                     Unitario: ${item.price}
    //                   </Typography>
    //                 </Box>
    //               </td>
    //             </tr>
    //           ))}

    //           <tr style={{ borderTop: "2px solid black" }}>
    //             <td colSpan={3} style={{ padding: "8px", textAlign: "right" }}>
    //               <Typography color="#e9e9e9a7" variant="h5">
    //                 Total: ${orderInfo.finalImport}
    //               </Typography>
    //             </td>
    //           </tr>
    //         </tbody>
    //       </table>

    //       <Box
    //         sx={{
    //           mt: 3,
    //           textAlign: "center",
    //           display: "flex",
    //           gap: 2,
    //           justifyContent: "center",
    //         }}
    //       >
    //         <Button
    //           variant="contained"
    //           color="primary"
    //           component={Link}
    //           href={routes.searchOrder}
    //           sx={{
    //             fontSize: isMobile ? "16px" : "18px",
    //             width: isMobile ? "50%" : "auto",
    //           }}
    //         >
    //           Volver a buscar pedido
    //         </Button>

    //         <Button
    //           variant="contained"
    //           color="secondary"
    //           component={Link}
    //           href={routes.mainPage}
    //           sx={{
    //             fontSize: isMobile ? "16px" : "18px",
    //             width: isMobile ? "50%" : "auto",
    //           }}
    //         >
    //           Volver a la tienda
    //         </Button>
    //       </Box>
    //     </Box>
    //   )}
    // </>
  );
}
