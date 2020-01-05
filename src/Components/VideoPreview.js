import React from 'react';
import Card from "react-bootstrap/Card";
import {Link} from "react-router-dom";
import DetailsPage from "./DetailsPage";
const VideoPreview = ({id, name}) => {
    return (
        <Link to={'/video/' + id}><Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{id}</Card.Subtitle>
            </Card.Body>
        </Card></Link>
    );
}
 
export default VideoPreview;