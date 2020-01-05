import React from 'react';
import Card from "react-bootstrap/Card";

const VideoPreview = ({id, name}) => {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{id}</Card.Subtitle>
            </Card.Body>
        </Card>
    );
}
 
export default VideoPreview;