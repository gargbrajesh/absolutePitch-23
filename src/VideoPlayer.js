import React, { useState, useEffect } from "react";
import { setCookie } from 'cookies-next';
import { Grid } from "@mui/material";
import { makeStyles } from "@material-ui/core";
import ReactPlayer from "react-player";
import dynamic from 'next/dynamic';
// import 'shaka-player/dist/controls.css';
// const ShakaPlayer = dynamic(() => import('shaka-player-react'), { ssr: false });

const useStyles = makeStyles({
  root: {
    position: "relative",
  },
  videoCard: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "#333 !important",
    borderRadius: "10px",
    padding: "20px",
    height: "90vh",
    "@media (min-width: 1280px) and (max-width:1480px)": { height: "130vh",},
    "@media (min-width: 1481px) and (max-width:1920px)": { height: "105vh",},
    "@media (min-width: 770px) and (max-width:1024px)": {
      margin: "15px 15px 15px 35px !important",
    },
    "@media (min-width: 600px) and (max-width:768px)": {
      margin: "15px 15px 15px 28px !important",
      height: "40vh",
    },
    "@media (min-width: 380px) and (max-width:425px)": {
      margin: "15px 15px 15px 28px !important",
      height: "40vh",
    },
    "@media (max-width:700px)": {
      margin: "10px 15px 15px 28px !important",
      height: "25vh",
    },
  },
});
function VideoPlayer(prop) {
  const [song, setSong] = useState();
  const [totalSeconds, setTotalSeconds] = useState(0);
  const music = prop.musicData ? prop.musicData[prop.musicIndex]["song_url"] : "";
  
  function playNextSong(){
    for (let i=prop.musicIndex+1;i<prop.musicData.length;i++){
      if(!(prop.musicData[i]["song_url"].includes("_P."))){
        prop.handleSong(prop.musicData, i)
        prop.totleTimeAndImage(prop.musicData,prop.musicIndex);
          break;
      }
      
     }
  } 

  const classes = useStyles();
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={12} md={12} className={classes.videoCard}>
          {prop.musicData ? (
            <ReactPlayer
              controls
              url={music}
              width="100%"
              height="95%"
              playing={true}
              onEnded={playNextSong}
            />

          ) : (
            <ReactPlayer
              controls
              url = "https://www.youtube.com/watch?v=GBYs4y1BtGg"
              width="100%"
              height="95%"
              playing={true}
              loop={true}
            />
          )}
        </Grid>
      </Grid>
    </div>
  );
}

export default VideoPlayer;
