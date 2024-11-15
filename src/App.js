import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationBar from './components/Navbar';
import Header from './components/Header';
import Footer from './components/Footer';
import Content from './components/Content';
import Reader from './components/Read';
import Create from './components/Create';

function App() {
  return (
    <Router> {/*Router component is used to define the router in the app*/}
      <NavigationBar /> {/*NavigationBar component is rendered from components*/}
      <Routes> {/*Routes component is used to define the different routes in the app based on the URL*/}
        <Route path="/home" element={<Content />} /> {/*Content component is rendered when the path is /home*/}
        <Route path="/read" element={<h1><Reader /><Footer /></h1>} /> {/*Reader component is rendered when the path is /read*/}
        <Route path="/create" element={<h1><Create /><Header /></h1>} /> {/*Create component is rendered when the path is /create*/}
      </Routes>
    </Router>
  );
}

//Exporting the App component
export default App;