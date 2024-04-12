import LandingNavBar from "./LandingNavBar";
import Grid from "@mui/material/Grid";

const LandingPage = () => {
  return (
    <>
      <div style={{height:"8vh"}}>
        <LandingNavBar />
      </div>
      {/* HeroSection */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Grid container spacing={2} columns={6}>
          <Grid item xs={6}>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "80vh",
                backgroundColor:"lightblue",
                border:"dashed"
              }}
            >
              Left Section
            </div>
          </Grid>
        </Grid>
        <Grid container spacing={2} columns={6}>
          <Grid item xs={6}>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "80vh",
                backgroundColor:"lightblue",
                border:"dashed",
                
              }}
            >
              Right Section
            </div>
          </Grid>
        </Grid>
      </div>
      <div style={{display:"flex",justifyContent:"center",alignItems:"center",backgroundColor: "lightgray",height:"9vh"}}>
        <div>
          Footer
        </div>
      </div>
    </>
  );
};

export default LandingPage;
