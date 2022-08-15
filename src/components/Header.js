import { AppBar, Box, Container, Toolbar, Typography } from "@mui/material"
import { Link } from "react-router-dom"

const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar sx={{ backgroundColor: "orange" }}>
          <Container
            maxWidth="lg"
            sx={{ display: "flex", justifyContent: "space-between" }}
          >
            <Link to={"/"} style={{ textDecoration: "none", color: "white" }}>
              <Typography variant="h4" component="div">
                Promart
              </Typography>
            </Link>
            <Link
              to={"/agregar"}
              style={{ textDecoration: "none", color: "white" }}
            >
              <Typography variant="h5" component="div">
                Agregar cliente
              </Typography>
            </Link>
          </Container>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Header
