import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "error.main",
        height: 100,
        display: "flex",
        justifyContent: "center", // horizontal
        alignItems: "center",     // vertical
        color: "white",
        textAlign: "center",
        marginTop: 10
      }}
    >
      <Typography variant="body2">
        © 2025 Meu Lanche. Todos os direitos reservados.
      </Typography>
    </Box>
  );
}
