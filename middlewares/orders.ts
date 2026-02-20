import { NextResponse } from "next/server";
import sql from "@/db/neon/db";
import OrderType from "@/types/orders";

export async function saveOrder(
  sellData: Omit<OrderType, "id">,
  stockData: { id: number | string; stock: number }[]
) {
  try {
    // Actualizar siempre la orden con id = 1
    const resp = await sql`
      UPDATE Orders
      SET 
        address = ${sellData.address},
        cardNumber = ${sellData.cardNumber},
        dni = ${sellData.dni},
        email = ${sellData.email},
        finalImport = ${sellData.finalImport},
        fullName = ${sellData.fullName},
        payMethod = ${sellData.payMethod},
        payProcessor = ${sellData.payProcessor},
        phone = ${sellData.phone},
        products = ${sellData.products}
      WHERE id = 1;
    `;

    if (resp.length === 0) {
      await sql`
        INSERT INTO Orders (
          id, address, cardNumber, dni, email, finalImport, fullName,
          payMethod, payProcessor, phone, products
        )
        VALUES (
          1, ${sellData.address}, ${sellData.cardNumber}, ${sellData.dni},
          ${sellData.email}, ${sellData.finalImport}, ${sellData.fullName},
          ${sellData.payMethod}, ${sellData.payProcessor}, ${sellData.phone},
          ${sellData.products}
        )
        ON CONFLICT (id) DO UPDATE SET
          address = EXCLUDED.address,
          cardNumber = EXCLUDED.cardNumber,
          dni = EXCLUDED.dni,
          email = EXCLUDED.email,
          finalImport = EXCLUDED.finalImport,
          fullName = EXCLUDED.fullName,
          payMethod = EXCLUDED.payMethod,
          payProcessor = EXCLUDED.payProcessor,
          phone = EXCLUDED.phone,
          products = EXCLUDED.products;
      `;
    }

    const orderID = 1;
    return NextResponse.json({ status: 200, data: orderID });
  } catch (err) {
    console.error("❌ Error en saveOrder:", err);
    return NextResponse.json({ status: 500, data: [] });
  }
}

export async function getOrder(orderID: string | number){
  try {
    if (!orderID) {
      return NextResponse.json({ status: 400, data: null, message: "Missing id" });
    }

    const rows = await sql`
      SELECT * FROM Orders WHERE id = ${orderID};
    `;

    if (!rows.length) {
      return NextResponse.json({ status: 404, data: null });
    }

    return NextResponse.json({ status: 200, data: rows[0] });
  } catch (err) {
    console.error("❌ Error en GET /orders:", err);
    return NextResponse.json({ status: 500, data: null });
  }
}