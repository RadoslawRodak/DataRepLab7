import { useEffect } from "react";
import Card from 'react-bootstrap/Card';

//MovieItem takes props as an argument.
const MovieItem = (props) => {
    useEffect(
        () => {

        }, []
    );
    return (
        //Card component from react-bootstrap which displays the movie title, poster and year
        <div>
            <Card>
                <Card.Header>{props.myMovie.Title}</Card.Header>
                <Card.Body>
                    <blockquote className="blockquote mb-0">
                        <img src={props.myMovie.Poster} alt={props.myMovie.Title} />
                        <footer>{props.myMovie.Year}</footer>
                    </blockquote>
                </Card.Body>
            </Card>
        </div>
    )
};
export default MovieItem