import { PacmanLoader } from "react-spinners";
import { Box } from "@mui/material";
import SpinnerType from "@/types/spinner"; 

export default function Spinner({ loading = true }: SpinnerType): React.ReactElement {
  return (
    <>
      {loading ? (
        <Box
          sx={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            bgcolor: "#00000067",
            zIndex: 1300,
          }}
        >
          <PacmanLoader
            color="#36d7b7"
            loading={loading}
            size={25}
          />
        </Box>
      ) : null}
    </>
  );
}
