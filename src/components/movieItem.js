
import Card from 'react-bootstrap/Card';

//MovieItem takes props as an argument.
const MovieItem = (props) => {
    return (
        //Card component from react-bootstrap which displays the movie title, poster and year
        <div>
            <Card>
                <Card.Header>{props.myMovie.title}</Card.Header>
                <Card.Body>
                    <blockquote className="blockquote mb-0">
                        <img src={props.myMovie.poster} alt={props.myMovie.title} />
                        <footer>{props.myMovie.year}</footer>
                    </blockquote>
                </Card.Body>
            </Card>
        </div>
    )
};
export default MovieItem