import MovieItem from "./movieItem";

const Movies = (props) => {
    //array of movies passed to the Movies component as props from the Read component 
    return props.myMovies.map((
        movie) => {

        /* Returning a MovieItem component for each movie in the array */
        return <MovieItem myMovie={movie} key={movie._id} />
    }
    )
};

// Exporting the Movies component
export default Movies;
