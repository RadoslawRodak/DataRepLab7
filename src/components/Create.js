import { useState } from "react";
import axios from "axios";
function Create() {
  // intialise state vars using useState
  const [title, setTitle] = useState('');
  const [year, setYear] = useState('');
  const [poster, setPoster] = useState('');
  //form submission handler
  // create.js
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(`Title: ${title}, Year: ${year}, Poster: ${poster}`);

    const movie = {
      title: title,
      year: year,
      poster: poster
    };

    axios.post('http://localhost:4000/api/movies', movie)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err.data));
  };
  return (
    <div>
      <h2>This is my Create Component.</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Add Movie Title: </label>
          <input type="text"
            className="form-control"
            value={title}
            onChange={(e) => { setTitle(e.target.value) }}//update title state on change
          />
          <label>Add Movie release Year: </label>
          <input type="text"
            className="form-control"
            value={year}
            onChange={(e) => { setYear(e.target.value) }}//update year state on change
          />
          <label>Add Movie Poster Url: </label>
          <input type="text"
            className="form-control"
            value={poster}
            onChange={(e) => { setPoster(e.target.value) }}//update poster state on change
          />
        </div>
        <input type="submit" value="Add Movie" />{/* Button to submit the form */}
      </form>
    </div>
  );
}
export default Create;