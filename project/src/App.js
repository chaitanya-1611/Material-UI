import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import React from 'react';
import Notes from './pages/Notes'
import Create from './pages/Create'
import {ThemeProvider,createTheme} from '@mui/material'


const theme = createTheme({
  palette:{
    primary:{
      main:"#ababab"
    }
  },
  typography:{
    fontFamily:'Quicksand',
    fontWeightLight: '400',
    fontWeightRegular: '500',
    fontWeightMedium: '600',
    fontWeightBold: '700',
  }
})
function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route exact path='/' element={<Notes/>}/>
          <Route path='/create' element={<Create/>}/>
        </Routes>
      </Router>

      </ThemeProvider>
     

    </div>
  );
}

export default App;
