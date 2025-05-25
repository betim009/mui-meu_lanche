import { Outlet } from "react-router";
import Container from "@mui/material/Container";
import NavbarSign from "../ui/navbar-sign";
import Footer from "../footer";

export default function LayoutSign() {
  return (
    <>
      <NavbarSign />
      <Container sx={{minHeight: "65vh"}}>
        <Outlet/>
      </Container>
      <Footer />
    </>
  );
}
