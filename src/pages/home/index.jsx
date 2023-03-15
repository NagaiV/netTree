import AppBar from "../../components/appBar";
import { Typography, Box, Container, Grid } from "@mui/material";
function Home() {
  return (
    <Container>
      <AppBar />
      <Box sx={{ flexGrow: 1, mt: 20 }}>
        <Typography
          variant="h2"
          style={{ textAlign: "center", marginBottom: 20 }}
        >
          Overwhelmed? We can help.
        </Typography>
        <Grid container>
          <Grid md={2}></Grid>
          <Grid md={8}>
            <Typography variant="h6" style={{ textAlign: "center" }}>
              Workflowy offers a simpler way to stay organized. If you have a
              crazy job or an ambitious project, we will be your trusty
              sidekick.
            </Typography>
          </Grid>
          <Grid md={2}></Grid>
        </Grid>
      </Box>
    </Container>
  );
}

export default Home;
