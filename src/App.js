import React from 'react';
import './App.css';
import Body from "./components/body.js";
import Footer from "./components/footer.js";
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="App bg-dark text-white">
      <style>{'body { background-color: grey; }'}</style>
      <div className="container">
      <Body />

      <Footer />

      </div>

    </div>
  );
}

export default App;
