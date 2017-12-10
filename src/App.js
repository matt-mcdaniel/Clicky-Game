import React, { Component } from 'react';
import ClickyGame from "./ClickyGame";

class App extends Component {
  render() {
    return (
      <div className="app-root">
        <header className="App-header">
          <div className="container text-center">
            <h1 className="">12 Days of Clicky Christmas!</h1>
            <h4>Click on any image and keep in mind it's current position. Once a photo is clicked, the images will do a quick "dance". Keep an eye on the original photo you clicked. Earn points by clicking the spot where it was originally. DON'T click on the same picture if it comes back to its original position. Remember which position it was in last and click that. Happy 12 Days of Clicky Christmas!</h4>
          </div>
        </header>
        <main className="container">
          <div role="img" aria-label="click-item" className="click-item"></div>
        </main>
        <footer class="footer">
          <div className="container text-center">&copy; 2017 C.Dolan</div>
        </footer>
      </div>
    );
  }
}

export default App;
