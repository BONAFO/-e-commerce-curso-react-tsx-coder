import "dotenv/config";
import { neon } from "@neondatabase/serverless";

const sql = neon(process.env.DATABASE_URL!);

export interface Category {
  id: number;
  name_es: string;
  normalized_es: string;
  name_en: string;
  normalized_en: string;
}

export const categories: Category[] = [
  {
    id: 0,
    name_es: "todos",
    normalized_es: "todos",
    name_en: "all",
    normalized_en: "all"
  },
  {
    id: 1,
    name_es: "acción",
    normalized_es: "accion",
    name_en: "action",
    normalized_en: "action"
  },
  {
    id: 2,
    name_es: "aventura",
    normalized_es: "aventura",
    name_en: "adventure",
    normalized_en: "adventure"
  },
  {
    id: 3,
    name_es: "estrategia",
    normalized_es: "estrategia",
    name_en: "strategy",
    normalized_en: "strategy"
  },
  {
    id: 4,
    name_es: "simulación",
    normalized_es: "simulacion",
    name_en: "simulation",
    normalized_en: "simulation"
  },
  {
    id: 5,
    name_es: "disparos",
    normalized_es: "disparos",
    name_en: "shooting",
    normalized_en: "shooting"
  },
  {
    id: 6,
    name_es: "terror",
    normalized_es: "terror",
    name_en: "horror",
    normalized_en: "horror"
  },
  {
    id: 7,
    name_es: "indie",
    normalized_es: "indie",
    name_en: "indie",
    normalized_en: "indie"
  }
];


export interface Product {
  id: number;
  name: string;
  img: string;
  price: number;
  description: string;
  stock: number;
  category: number[];
}

export const products: Product[] = [
  {
    id: 0,
    name: "Schedule I",
    img: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/3164500/986ee9a7a25cb0e61d1530cc3cd7e3e06aa68733/capsule_231x87.jpg",
    price: 8392,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit numquam soluta voluptatibus molestiae praesentium deleniti molestias earum rem vitae quidem non, error consequuntur ex dolore facilis eius magnam officiis corrupti.",
    stock: 10,
    category: [0, 3],
  },
  {
    id: 1,
    name: "Left 4 Dead 2",
    img: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/550/capsule_231x87.jpg?t=1747174827",
    price: 4632,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit numquam soluta voluptatibus molestiae praesentium deleniti molestias earum rem vitae quidem non, error consequuntur ex dolore facilis eius magnam officiis corrupti.",
    stock: 10,
    category: [0, 4],
  },
  {
    id: 2,
    name: "Half-Life: Alyx",
    img: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/546560/capsule_231x87.jpg?t=1762986701",
    price: 21592,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit numquam soluta voluptatibus molestiae praesentium deleniti molestias earum rem vitae quidem non, error consequuntur ex dolore facilis eius magnam officiis corrupti.",
    stock: 10,
    category: [0, 3],
  },
  {
    id: 3,
    name: "Half-Life 2",
    img: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/220/951c6aca52bf32d7c95e9f8b3c04fa95e9a735ea/capsule_231x87.jpg",
    price: 4632,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit numquam soluta voluptatibus molestiae praesentium deleniti molestias earum rem vitae quidem non, error consequuntur ex dolore facilis eius magnam officiis corrupti.",
    stock: 10,
    category: [0, 4],
  },
  {
    id: 4,
    name: "ULTRAKILL",
    img: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1229490/capsule_231x87.jpg?t=1760411711",
    price: 7992,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit numquam soluta voluptatibus molestiae praesentium deleniti molestias earum rem vitae quidem non, error consequuntur ex dolore facilis eius magnam officiis corrupti.",
    stock: 10,
    category: [0, 2],
  },
  {
    id: 5,
    name: "Counter-Strike",
    img: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/10/capsule_231x87.jpg?t=1747174827",
    price: 4632,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit numquam soluta voluptatibus molestiae praesentium deleniti molestias earum rem vitae quidem non, error consequuntur ex dolore facilis eius magnam officiis corrupti.",
    stock: 10,
    category: [0, 2],
  },
  {
    id: 6,
    name: "Deep Rock Galactic",
    img: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/548430/capsule_231x87.jpg?t=1763053387",
    price: 11992,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit numquam soluta voluptatibus molestiae praesentium deleniti molestias earum rem vitae quidem non, error consequuntur ex dolore facilis eius magnam officiis corrupti.",
    stock: 10,
    category: [0, 1],
  },
  {
    id: 7,
    name: "Garry's Mod",
    img: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/4000/2e52d9b905feebfdaaf2db6ad7afece10991d504/capsule_231x87.jpg",
    price: 4632,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit numquam soluta voluptatibus molestiae praesentium deleniti molestias earum rem vitae quidem non, error consequuntur ex dolore facilis eius magnam officiis corrupti.",
    stock: 10,
    category: [0, 5],
  },
  {
    id: 8,
    name: "Dishonored",
    img: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/205100/capsule_231x87.jpg?t=1750785982",
    price: 4792,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit numquam soluta voluptatibus molestiae praesentium deleniti molestias earum rem vitae quidem non, error consequuntur ex dolore facilis eius magnam officiis corrupti.",
    stock: 10,
    category: [0, 5],
  },
  {
    id: 9,
    name: "Resident Evil 2",
    img: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/883710/capsule_231x87.jpg?t=1751467479",
    price: 23200,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit numquam soluta voluptatibus molestiae praesentium deleniti molestias earum rem vitae quidem non, error consequuntur ex dolore facilis eius magnam officiis corrupti.",
    stock: 10,
    category: [0, 3],
  },
  {
    id: 10,
    name: "Crab Champions",
    img: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/774801/capsule_231x87.jpg?t=1762202057",
    price: 7992,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit numquam soluta voluptatibus molestiae praesentium deleniti molestias earum rem vitae quidem non, error consequuntur ex dolore facilis eius magnam officiis corrupti.",
    stock: 10,
    category: [0, 6],
  },
  {
    id: 11,
    name: "Hotline Miami",
    img: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/219150/capsule_231x87.jpg?t=1762301002",
    price: 4632,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit numquam soluta voluptatibus molestiae praesentium deleniti molestias earum rem vitae quidem non, error consequuntur ex dolore facilis eius magnam officiis corrupti.",
    stock: 10,
    category: [0, 6],
  },
  {
    id: 12,
    name: "Neon White",
    img: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1533420/capsule_231x87.jpg?t=1760540566",
    price: 10392,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit numquam soluta voluptatibus molestiae praesentium deleniti molestias earum rem vitae quidem non, error consequuntur ex dolore facilis eius magnam officiis corrupti.",
    stock: 10,
    category: [0, 1],
  },
  {
    id: 13,
    name: "POSTAL 2",
    img: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/223470/capsule_231x87.jpg?t=1750161850",
    price: 4632,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit numquam soluta voluptatibus molestiae praesentium deleniti molestias earum rem vitae quidem non, error consequuntur ex dolore facilis eius magnam officiis corrupti.",
    stock: 10,
    category: [0, 1],
  },
  {
    id: 14,
    name: "Ravenfield",
    img: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/636480/capsule_231x87.jpg?t=1760432497",
    price: 7431.999999999999,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit numquam soluta voluptatibus molestiae praesentium deleniti molestias earum rem vitae quidem non, error consequuntur ex dolore facilis eius magnam officiis corrupti.",
    stock: 10,
    category: [0, 4],
  },
  {
    id: 15,
    name: "Half-Life",
    img: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/70/25bee0c9572a4f0dc4de6c773c54d067a4204760/capsule_231x87.jpg",
    price: 4632,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit numquam soluta voluptatibus molestiae praesentium deleniti molestias earum rem vitae quidem non, error consequuntur ex dolore facilis eius magnam officiis corrupti.",
    stock: 10,
    category: [0, 2],
  },
  {
    id: 16,
    name: "Broforce",
    img: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/274190/capsule_231x87.jpg?t=1752760462",
    price: 6392,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit numquam soluta voluptatibus molestiae praesentium deleniti molestias earum rem vitae quidem non, error consequuntur ex dolore facilis eius magnam officiis corrupti.",
    stock: 10,
    category: [0, 4],
  },
  {
    id: 17,
    name: "Counter-Strike: Source",
    img: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/240/capsule_231x87.jpg?t=1755548234",
    price: 4632,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit numquam soluta voluptatibus molestiae praesentium deleniti molestias earum rem vitae quidem non, error consequuntur ex dolore facilis eius magnam officiis corrupti.",
    stock: 10,
    category: [0, 5],
  },
  {
    id: 18,
    name: "Tomb Raider",
    img: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/203160/capsule_231x87.jpg?t=1747178860",
    price: 5992,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit numquam soluta voluptatibus molestiae praesentium deleniti molestias earum rem vitae quidem non, error consequuntur ex dolore facilis eius magnam officiis corrupti.",
    stock: 10,
    category: [0, 4],
  },
  {
    id: 19,
    name: "DUSK",
    img: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/519860/52906821e5100d6a0c77b4de4f2ccdd0c8c709dd/capsule_231x87.jpg",
    price: 7192,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit numquam soluta voluptatibus molestiae praesentium deleniti molestias earum rem vitae quidem non, error consequuntur ex dolore facilis eius magnam officiis corrupti.",
    stock: 10,
    category: [0, 4],
  },
  {
    id: 20,
    name: "Fallout: New Vegas",
    img: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/22380/capsule_231x87.jpg?t=1761163008",
    price: 4792,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit numquam soluta voluptatibus molestiae praesentium deleniti molestias earum rem vitae quidem non, error consequuntur ex dolore facilis eius magnam officiis corrupti.",
    stock: 10,
    category: [0, 5],
  },
];


async function insertCategories() {
  try {
    for (const c of categories) {
      await sql`
        INSERT INTO Categories (id, name_es, normalized_es, name_en, normalized_en)
        VALUES (${c.id}, ${c.name_es}, ${c.normalized_es}, ${c.name_en}, ${c.normalized_en})
        ON CONFLICT (id) DO NOTHING;
      `;
      console.log(`✅ Insertada categoría: ${c.name_es}`);
    }
  } catch (err) {
    console.error("❌ Error insertando categorías:", err);
  }
}


async function insertProducts() {
  try {
    for (const p of products) {
      await sql`
        INSERT INTO Games (id, name, img, price, description, stock, category)
        VALUES (${p.id}, ${p.name}, ${p.img}, ${p.price}, ${p.description}, ${p.stock}, ${p.category})
        ON CONFLICT (id) DO NOTHING;
      `;
      console.log(`✅ Insertado: ${p.name} (id: ${p.id})`);
    }
  } catch (err) {
    console.error("❌ Error insertando productos:", err);
  }
}

async function deploy() {
  try {
    let resp;

    // Categories
    resp = await sql`CREATE TABLE IF NOT EXISTS Categories (
      id SERIAL PRIMARY KEY,
      name_es TEXT NOT NULL,
      normalized_es TEXT NOT NULL,
      name_en TEXT NOT NULL,
      normalized_en TEXT NOT NULL
    );`;
    console.log("Categories -> Table", resp);

    // Games
    resp = await sql`CREATE TABLE IF NOT EXISTS Games (
      id SERIAL PRIMARY KEY,
      name TEXT NOT NULL,
      img TEXT,
      price NUMERIC NOT NULL,
      description TEXT,
      category INTEGER[] NOT NULL,
      stock INTEGER NOT NULL
    );`;
    console.log("Games -> Table", resp);

    // Orders con products como INTEGER[][]
    // products INTEGER[][] -> {game_id, quantity}
    resp = await sql`CREATE TABLE IF NOT EXISTS Orders (
      id SERIAL PRIMARY KEY,
      address TEXT NOT NULL,
      cardNumber TEXT NOT NULL,
      dni TEXT NOT NULL,
      email TEXT NOT NULL,
      finalImport NUMERIC NOT NULL,
      fullName TEXT NOT NULL,
      payMethod TEXT NOT NULL,
      payProcessor TEXT NOT NULL,
      phone TEXT NOT NULL,
      products INTEGER[][] NOT NULL
    );`;
    console.log("Orders -> Table", resp);

    await insertProducts();
    await insertCategories();
    
  } catch (err) {
    console.error("❌ Error creando tablas:", err);
  }
}

deploy();
