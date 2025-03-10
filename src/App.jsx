import React from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Page01 from './views/Page01';
import Page02 from './views/Page02';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/page01" element={<Page01 />} />
        <Route path="/page02" element={<Page02 />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
