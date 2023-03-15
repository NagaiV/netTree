import AppBar from "../../components/appBar";
import {
  Typography,
  Box,
  Container,
  TextField,
  Grid,
  Button,
  Divider,
} from "@mui/material";
import { Link } from "react-router-dom";

function Home() {
  return (
    <Container>
      <AppBar />
      <Box sx={{ flexGrow: 1, mt: 15 }}>
        <Grid container>
          <Grid md="4"></Grid>
          <Grid md="4" sx={{ mt: 5 }}>
            <Typography
              variant="h4"
              style={{ textAlign: "center", marginBottom: 30 }}
            >
              {" "}
              Sign Up
            </Typography>
            <TextField
              id="outlined-basic"
              label="Email"
              variant="outlined"
              size="medium"
              fullWidth
            />

            <Button
              sx={{
                mt: 5,
                backgroundColor: "#49BAF2",
                width: "100%",
                borderRadius: 20,
                color: "black",
                mb: 3,
              }}
            >
              {" "}
              Get started
            </Button>
            <Divider />
            <Box
              sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}
            >
              <Typography>Already have an account?</Typography>
              <Link to="/login">
                <Button
                  color="inherit"
                  sx={{
                    textTransform: "capitalize",
                  }}
                >
                  <Typography
                    sx={{ color: "black", textDecoration: "none", mt: -0.5 }}
                  >
                    {" "}
                    Login
                  </Typography>
                </Button>
              </Link>
            </Box>
          </Grid>
          <Grid md="4"></Grid>
        </Grid>
      </Box>
    </Container>
  );
}

export default Home;
