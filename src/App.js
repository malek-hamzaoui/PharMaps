import Home from './Home';

import Result from './result';
import Inventory from './inventory';
import Login from './login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/stock" element={<Inventory />} />
          <Route path='/' element={<Home />}></Route>
          <Route path='/result' element={<Result />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
