import React from 'react';
import YoutubeVideo from "./YoutubeVideo";
import RecommendationsContainer from "./RecommendationsContainer";
import AddRecommendation from "./AddRecommendation";

const DetailsPage = (props) => {
    return (
        <div>
            <YoutubeVideo/>
            <RecommendationsContainer id={props.match.params.id}/>
            <AddRecommendation/>
        </div>
    );
}
 
export default DetailsPage;