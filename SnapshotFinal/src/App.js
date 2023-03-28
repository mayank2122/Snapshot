import './App.css';
import Navbar from './component/navbar';
import ImageSearch from './component/imageSearch';
import { InputContext } from './context/inputContext';
import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  const [photos,setPhotos] =useState([]);
  return (
  <BrowserRouter>
  
    <div className="App">
      <InputContext.Provider value={{setPhotos}}>
      <Navbar />
      <Routes>
      <Route path='/' element={<ImageSearch photos={photos} />}/>  
      {/* <Route path='/Mountain' element={<ImageSearch photos={photos} />}/>      
      <Route path='/Beaches' element={<ImageSearch photos={photos} />}/>
      <Route path='/Birds' element={<ImageSearch photos={photos} />}/>      
      <Route path='/Food' element={<ImageSearch photos={photos} />}/> */}
      </Routes>
      </InputContext.Provider>

    </div> 
    
    </BrowserRouter>
  )
 
}

export default App;
