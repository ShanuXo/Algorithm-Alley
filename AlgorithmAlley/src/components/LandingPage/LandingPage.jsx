import LandingNavBar from "./LandingNavBar";
import Grid from "@mui/material/Grid";
import Logo from "../Images/AALogo.jpg";
import HelloWorld from "../Videos/HelloWorld.mp4";
import VideoPlayer from "../VideoPlayer/Videoplayer.jsx"

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
        <Grid container spacing={3} columns={6}>
          <Grid item xs={6}>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "80vh",
                backgroundColor:"white",
                border:"dashed"
              }}
            >
            <img src={Logo} alt="" width="450px"/>
            </div>
          </Grid>
        </Grid>
        <Grid container spacing={3} columns={6}>
          <Grid item xs={6}>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "80vh",
                backgroundColor:"white",
                border:"dashed",
                
              }}
            ><div>
              Dive into the heart of coding mastery with our dynamic online hub! 
              Welcome to the epicenter of algorithmic excellence—where learning meets innovation and every challenge is an opportunity to shine
            </div>              
            </div>
          </Grid>
        </Grid>
        <Grid container spacing={3} columns={6}>
          <Grid item xs={6}>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "80vh",
                backgroundColor:"white",
                border:"dashed"
              }}
            >
             <VideoPlayer video={HelloWorld} /> 
            </div>
          </Grid>
        </Grid>
      </div>
      <div style={{display:"flex",justifyContent:"center",alignItems:"center",backgroundColor: "lightgray",height:"9vh"}}>
        <div>
        @license aisa kuch lika hua rehta haina wo bhi chaiye ..... Uske bagal mein ......LinkedIn,Twitter,Gmail (Icon rehna chaiye bss(like icon of Twitter(Siddhant account link) and Icon of Linkedin(Shanu account link)) not Text) chaiye also for Gmail dono ka Gmail dalna.  
        </div>
      </div>
    </>
  );
};

export default LandingPage;
