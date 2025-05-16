import CircularProgress, {
  CircularProgressProps,
} from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

declare module "*.png";

export default function CloverLoader() {
  return (
    <Box sx={{ position: "relative", display: "inline-flex", top: "40px" }}>
      <CircularProgress size="140px" thickness={2} />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: "absolute",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img
          style={{ width: "60%", height: "60%" }}
          src="/photos/400x400.png"
        />
      </Box>
    </Box>
  );
}
