"use client";

import { useState } from "react";
import { Autocomplete, TextField } from "@mui/material";
import Link from "next/link";
import useInputSeach from "@/hooks/products/InputSearch";
import { routes } from "../../router/router";
import GameType from "@/types/games";

export default function InputSeach() {
  const [search, setSearch] = useState("");

  const MAX_VISIBLE_ITEMS = 5;

  const { products, input, setInput, wait, setWait, searching, setSearching } =
    useInputSeach({ name: search, isDepend: search });

  return (
    <Autocomplete<GameType, false, false, true>
      freeSolo
      options={Array.isArray(products) ? products : []}
      getOptionLabel={(option) =>
        typeof option === "string" ? option : option.name
      }
      inputValue={input}
      onInputChange={(event, newInputValue) => {
        clearTimeout(wait as NodeJS.Timeout);
        setSearching(true);
        setInput(newInputValue);
        setWait(
          setTimeout(() => {
            setSearch(newInputValue);
            setSearching(false);
          }, 2000),
        );
      }}
      open={input.length > 0}
      sx={{ width: "50%" }}
      slotProps={{
        listbox: {
          style: {
            maxHeight: `${MAX_VISIBLE_ITEMS * 40}px`,
            overflowY: "auto",
          },
        },
      }}
      loading={input.length > 0 && searching}
      loadingText="Buscando..."
      noOptionsText="Sin resultados"
      renderOption={(props, option) =>
        typeof option === "string" ? (
          <li {...props}>{option}</li>
        ) : (
          <li {...props}>
            <Link
              href={routes.productDetail(option.id)}
              onClick={() => setSearch("")}
              style={{
                textDecoration: "none",
                color: "inherit",
                width: "100%",
                display: "block",
              }}
            >
              {option.name}
            </Link>
          </li>
        )
      }
      renderInput={(params) => (
        <TextField {...params} label="Buscar juego" variant="outlined" />
      )}
    />
  );
}
