import React, {useEffect, useState} from 'react';
import VideoPreview from "./VideoPreview";
import Recommendation from "./Recommendation";

const RecommendationsContainer = ({id}) => {
    useEffect(() => {
        fetchRecommendations();
    }, []);

    const[recommendations, setRecommendations] = useState([]);

    const fetchRecommendations = async () => {
        const data = await fetch("http://localhost:8762/video/" +  id + "/recommendation");
        const recommendations = await data.json();
        setRecommendations(recommendations);
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