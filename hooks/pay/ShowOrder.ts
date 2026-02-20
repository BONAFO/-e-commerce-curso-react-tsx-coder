// @ts-nocheck
"use client";

import  { useEffect, useState } from "react";

import service, { MODE } from "@/db/service";

import {  useParams } from "next/navigation";
import { payMethods } from "./PayInfo";
import OrderType from "@/types/orders";

const { getOrder, getProductsByID } = service[MODE];




export const useShowOrderHook = ({ isDepend = false }: { isDepend?: boolean }) => {
  const params = useParams();
  const orderID = params?.orderID as string ;
  const [orderInfo, setOrderInfo] = useState<any>(null);
  const [spinner, setSpinner] = useState(true);

  useEffect(() => {
    getOrder(orderID)
      .then(async (orderResponse) => {
        const myorder = orderResponse.data;


        const payMethodFound = payMethods.find(
          (pm) => pm.id === myorder.payMethod
        );

        //@ts-ignore
        myorder.payMethod = {
          id: payMethodFound?.id,
          text: payMethodFound?.text,
        };

        const productsData: any[] = [];
        for (let i = 0; i < myorder.products.length; i++) {
          //@ts-ignore
          const productID = myorder.products[i].id;
          const response = await getProductsByID(productID);
          //@ts-ignore
          response.data[0]["quantity"] = myorder.products[i]["quantity"];
          productsData.push(response.data[0]);
        }

        myorder.products = productsData;        
        setSpinner(false);
        setOrderInfo(myorder);
      })
      .catch((err) => {
        setSpinner(false);
        throw Error(err);
      });
  }, [orderID, isDepend]);

  return { orderInfo, setOrderInfo, spinner, setSpinner };
};
