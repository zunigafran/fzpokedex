import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dex from './components/Dex';
import Details from './components/Details';
import Search from './components/Search';

function App() {
  return (
    <Router>
      <Search />
      <Routes>
        <Route path="/" element={<Dex />} />
        <Route path="/details/:id" element={<Details />} />
      </Routes>
    </Router>
  );
}

export default App;