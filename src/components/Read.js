import { useEffect,useState } from "react";
import Movies from "./Movie";//import Movies compoment from movie
import axios from "axios";

const Reader = () => {
    
      //useState hook  intializes a state variable movies is the state value, setMovies the function to update the state value
      const [movies,setMovies] = useState([]);//intial value empty array
      useEffect(//useEffect fetches data from an api
        ()=>{
          //runs asynchroniously i.e runs in the background without letting the  app doesnt hang
          //Requests from api
          axios.get('http://localhost:4000/api/movies')
          .then((response)=>{
            console.log(response.data);
              //update state value
            setMovies(response.data);
          })
          .catch()
        }
      );
    return  (<div>
                <Movies myMovies={movies}/>{/*Movies recieve data through myMovies prop ,movies will loop though each movie object and render the contents*/}
                <h3>Hello from the Read component</h3> 

            </div>);
}

export default Reader;