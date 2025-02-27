import { useRef } from "react";


 export const VideoPlayer1 = (props) => {
  const ref = useRef(null);

  const handlePlay = () => ref.current?.play();
  const handlePause = () => ref.current?.pause();

  return (
    <div>
      <button onClick={handlePlay}>Play</button>
      <button onClick={handlePause}>Pause</button>
      <video ref={ref} {...props} controls />
    </div>
  );
};

export const VideoPlayer2 = ({ src }) => {
  return (
    <div className="video-container">
      <iframe
        width="500"
        height="315"
        src={src.replace("watch?v=", "embed/")}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

// Использование:
{/* <VideoPlayer2 src="https://www.youtube.com/watch?v=Zu5vrJtNOcM" /> */}













