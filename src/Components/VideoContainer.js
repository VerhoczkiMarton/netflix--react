import React, {useEffect, useState} from 'react';
import VideoPreview from "./VideoPreview";

const VideoContainer = () => {
    useEffect(() => {
        fetchVideos();
        }, []);

    const[videos, setVideos] = useState([]);

    const fetchVideos = async () => {
        const data = await fetch("http://localhost:8762/video");
        const videos = await data.json();
        setVideos(videos);
    };

    return (
        <div>
            {videos.map(video =>
                <VideoPreview name={video.name} id={video.id}/>
            )}
        </div>
    );
};
 
export default VideoContainer;