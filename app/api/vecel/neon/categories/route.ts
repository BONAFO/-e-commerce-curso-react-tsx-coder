import { getCategories, getCategoryByID, getCategoryByName } from "@/middlewares/categories";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
    const { searchParams } = new URL(req.url);

    if (searchParams.get("id")) {
      return await getCategoryByID(searchParams.get("id") as string);
    } else if (searchParams.get("name")) {
      return await getCategoryByName(searchParams.get("name") as string);
    } else {
      return await getCategories();
    }
}
