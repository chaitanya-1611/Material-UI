import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import React from 'react';
import Notes from './pages/Notes'
import Create from './pages/Create'
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path='/' element={<Notes/>}/>
          <Route path='/create' element={<Create/>}/>
        </Routes>
      </Router>

    </div>
  );
}

export default App;
