import { Box } from "@mui/material";
import { useHistory } from "react-router-dom";

export function XFlixLogo() {
  const history = useHistory();
  return (
    <Box onClick={() => history.push("/")}>
      <img src="/Logo.png" alt="XFlix-icon" />
    </Box>
  );
}
