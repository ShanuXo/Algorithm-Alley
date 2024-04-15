import React, { useRef, useState, useEffect } from "react";
import { BiPlay, BiPause, BiSkipPrevious, BiSkipNext } from "react-icons/bi";
import { IconContext } from "react-icons";
import { makeStyles, Slider } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  playerContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center", 
    marginTop: "5em",
    borderRadius: "1em",
    overflow: "hidden",
  },
  videoPlayer: {
    borderRadius: "1em",
    zIndex: -1,
    width: "100%",
    maxWidth: "800px", 
  },
  controlsContainer: {
    marginTop: "-3.5em",
    width: "100%", 
  },
  controls: {
    display: "flex",
    zIndex: 1,
    color: "white",
    width: "100%", 
    maxWidth: "800px",
    justifyContent: "space-between",
  },
  controlButton: {
    border: "none",
    background: "none",
  },
  timeline: {
    width: "100%",
  },
  duration: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));

const VideoPlayer = ({ video }) => {
  const classes = useStyles();
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    const updateCurrentTime = () => {
      setCurrentTime(videoRef.current.currentTime);
    };

    const updateDuration = () => {
      setDuration(videoRef.current.duration);
    };

    videoRef.current.addEventListener("timeupdate", updateCurrentTime);
    videoRef.current.addEventListener("loadedmetadata", updateDuration);

    return () => {
      videoRef.current.removeEventListener("timeupdate", updateCurrentTime);
      videoRef.current.removeEventListener("loadedmetadata", updateDuration);
    };
  }, []);

  const handlePlay = () => {
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleSeek = (e, newValue) => {
    videoRef.current.currentTime = newValue;
    setCurrentTime(newValue);
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
      2,
      "0"
    )}`;
  };

  return (
    <div className={classes.playerContainer}>
      <video
        className={classes.videoPlayer}
        ref={videoRef}
        src={video}
      ></video>
      <div className={classes.controlsContainer}>
        <div className={classes.controls}>
          <IconContext.Provider value={{ color: "white", size: "2em" }}>
            <BiSkipPrevious />
          </IconContext.Provider>
          {isPlaying ? (
            <button className={classes.controlButton} onClick={handlePlay}>
              <BiPause />
            </button>
          ) : (
            <button className={classes.controlButton} onClick={handlePlay}>
              <BiPlay />
            </button>
          )}
          <IconContext.Provider value={{ color: "white", size: "2em" }}>
            <BiSkipNext />
          </IconContext.Provider>
        </div>
        <Slider
          className={classes.timeline}
          min={0}
          max={duration}
          value={currentTime}
          onChange={handleSeek}
        />
        <div className={classes.duration}>
          {formatTime(currentTime)} / {formatTime(duration)}
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
