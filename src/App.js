import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dex from './components/Dex';
import Details from './components/Details'

function App() {
  return (
<Router>
      <Routes>
        <Route path="/" element={<Dex />}/>
        <Route path="/pokemon/:id" element={<Details />}/>
      </Routes>
   </Router>
  );
}

export default App;