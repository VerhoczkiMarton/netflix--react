import React from "react";

const YoutubeVideo = ({youtubeId}) => {
    return (
        <iframe width="560" height="315" src={"https://www.youtube.com/embed/" + youtubeId} frameBorder="0"
    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen/>
    );
}

export default YoutubeVideo;