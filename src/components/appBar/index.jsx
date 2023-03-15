import Grid from "@mui/material/Grid";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import logo from "./logo1.svg";
import { Link } from "react-router-dom";
function NavBar() {
  return (
    <Box sx={{ flexGrow: 1, mt: 2 }}>
      <Grid container spacing={2}>
        <AppBar
          position="static"
          color="transparent"
          style={{ boxShadow: "none" }}
        >
          <Toolbar>
            <Link to="/">
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2, mt: 1 }}
              >
                <img src={logo} alt="pic" />
              </IconButton>
            </Link>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, mt: 1 }}
            >
              workflowy
            </Typography>
            {window.location.href.includes("login") ? null : (
              <Link to="/login">
                <Button
                  color="inherit"
                  sx={{
                    textTransform: "capitalize",
                    backgroundColor: "#eceef0",
                    mt: 1,
                    borderRadius: 10,
                    width: 80,
                  }}
                >
                  <Typography sx={{ color: "black" }}> Log in</Typography>
                </Button>
              </Link>
            )}
          </Toolbar>
        </AppBar>
      </Grid>
    </Box>
  );
}

export default NavBar;
