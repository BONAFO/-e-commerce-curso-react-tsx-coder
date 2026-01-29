import WaitingMsjType from "@/types/waitingMsj";
import { Typography } from "@mui/material";



export default function WaitingMsj({ waitMsj }: WaitingMsjType): React.ReactElement {
  return (
    <Typography
      color="var(--bs-font-color)"
      sx={{ fontSize: "20px", mb: 2 }}
    >
      {waitMsj}
    </Typography>
  );
}
