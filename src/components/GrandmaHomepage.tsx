import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPlay,
  faPause,
  faMicrophone,
  faRotateRight,
  faCheck
} from '@fortawesome/free-solid-svg-icons';
import './GrandmaHomepage.css';

const GrandmaHomepage = () => {
  const navigate = useNavigate();
  const [isPlaying, setIsPlaying] = useState(false);
  const [isVideoFinished, setIsVideoFinished] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlayVideo = () => {
    const video = videoRef.current;
    if (video) {
      video.play();
      setIsPlaying(true);
    }
  };

  const handlePauseVideo = () => {
    const video = videoRef.current;
    if (video) {
      video.pause();
      setIsPlaying(false);
    }
  };

  const handleVideoEnd = () => {
    setIsPlaying(false);
    setIsVideoFinished(true);
  };

  const handleReplayVideo = () => {
    const video = videoRef.current;
    if (video) {
      video.currentTime = 0;
      video.play();
      setIsPlaying(true);
    }
  };

  return (
    <div className="wrapper">
      <div className="video-container">
        <video
          ref={videoRef}
          playsInline
          src="/grandma-video.mov"
          onEnded={handleVideoEnd}
        />
      </div>

      <div className="overlay">
        <div className="gradient-overlay-top" />
        <div className="gradient-overlay-bottom" />

        <div className="content">
          <div className="header">
            <h1>Welcome Back ❤️</h1>
            <p>Your granddaughter Priscila has a message for you</p>
          </div>

          <div className="center-content">
            {!isPlaying && !isVideoFinished && (
              <button
                onClick={handlePlayVideo}
                className="play-button"
              >
                <FontAwesomeIcon icon={faPlay} />
              </button>
            )}

            {isVideoFinished && !isRecording && (
              <div className="finished-options">
                <button
                  onClick={handleReplayVideo}
                  className="action-button transparent"
                >
                  <FontAwesomeIcon icon={faRotateRight} className="icon-margin" />
                  Watch Again
                </button>
                <button
                  onClick={() => setIsRecording(true)}
                  className="action-button highlight"
                >
                  <FontAwesomeIcon icon={faMicrophone} className="icon-margin" />
                  Record Your Answer
                </button>
              </div>
            )}
          </div>

          <div className="bottom-controls">
            {isPlaying && !isVideoFinished && (
              <button
                onClick={handlePauseVideo}
                className="pause-button"
              >
                <FontAwesomeIcon icon={faPause} className="icon-margin" />
                Pause
              </button>
            )}

            {isRecording && (
              <div className="recording-indicator">
                <div className="pulse-dot" />
                <p>Recording your story...</p>
                <button
                  onClick={() => navigate('/activity')}
                  className="action-button finish"
                >
                  <FontAwesomeIcon icon={faCheck} className="icon-margin" />
                  Finish Story
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GrandmaHomepage;
