import React, {useEffect, useState} from 'react';
import VideoPreview from "./VideoPreview";
import Recommendation from "./Recommendation";

const RecommendationsContainer = ({videoId}) => {
    useEffect(() => {
        fetchRecommendations();
    }, []);

    const[recommendations, setRecommendations] = useState([]);

    const fetchRecommendations = async () => {
        const data = await fetch("http://localhost:8762/video/" +  videoId + "/recommendation");
        const recommendations = await data.json();
        setRecommendations(Array.from(recommendations));
    };

    return (
        <div>
            {recommendations.map(recommendation =>
                <Recommendation comment={recommendation.comment} rating={recommendation.rating}/>
            )}
        </div>
    );
}
 
export default RecommendationsContainer;