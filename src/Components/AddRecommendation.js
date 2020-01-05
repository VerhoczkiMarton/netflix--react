import React, {useState} from 'react';



const AddRecommendation = ({videoId}) => {

    const [comment, setComment] = useState("");
    const [rating, setRating] = useState("");
    const fetchUrl = "http://localhost:8762/video/" + videoId + "/recommendation";

    const handleSubmit = (evt) => {
        evt.preventDefault();
        fetch(fetchUrl, {
            method: 'Put',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({rating: rating, comment: comment})
        });
    }
    return (
        <form onSubmit={handleSubmit}>
            <label>
                Comment:
                <input
                    type="text"
                    value={comment}
                    onChange={e => setComment(e.target.value)}
                />
            </label>
            <label>
                Rating:
                <select
                    value={rating}
                    onChange={e => setRating(e.target.value)}
                >
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                    <option value={5}>5</option>
                </select>
            </label>
            <input type="submit" value="Submit" />
        </form>)
}
 
export default AddRecommendation;