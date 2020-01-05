import React from 'react';
import Card from "react-bootstrap/Card";

const Recommendation = ({rating, comment}) => {
    return (
        <Card style={{ width: "80%" }} className="text-center">
            <Card.Header>{rating}⭐</Card.Header>
            <Card.Body>
                <Card.Text>
                    {comment}
                </Card.Text>
            </Card.Body>
        </Card>
    );
}
 
export default Recommendation;