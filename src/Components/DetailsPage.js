import React, {useEffect, useState} from 'react';
import YoutubeVideo from "./YoutubeVideo";
import RecommendationsContainer from "./RecommendationsContainer";
import AddRecommendation from "./AddRecommendation";

const DetailsPage = (props) => {

    const videoId = props.match.params.id;
    const fetchUrl = "http://localhost:8762/video/" + videoId;
    const[video, setVideo] = useState({});

    useEffect(() => {
        fetchVideo();
    }, {});

    const fetchVideo = async () => {
        const data = await fetch(fetchUrl);
        const video = await data.json();
        console.log(video);
        setVideo(video);
    };
    return (
        <div>
            <YoutubeVideo youtubeId={video.youtubeId}/>
            <RecommendationsContainer videoId={videoId}/>
            <AddRecommendation videoId={videoId}/>
        </div>
    );
}
 
export default DetailsPage;