var rootDiv = $("#root");

//image array

var images = [
  {
    title: "one",
    image: "assets/img/dayone.jpg"
  },
  {
    title: "two",
    image: "assets/img/daytwo.jpg"
  },
  {
    title: "three",
    image: "assets/img/daythree.jpg"
  },
  {
    title: "four",
    image: "assets/img/dayone.jpg"
  },
  {
    title: "five",
    image: "assets/img/dayfive.jpg"
  },
  {
    title: "six",
    image: "assets/img/daysix.jpg"
  },
  {
    title: "seven",
    image: "assets/img/dayseven.jpg"
  },
  {
    title: "eight",
    image: "assets/img/dayeight.jpg"
  },
  {
    title: "nine",
    image: "assets/img/daynine.jpg"
  },
  {
    title: "ten",
    image: "assets/img/dayten.jpg"
  },
  {
    title: "eleven",
    image: "assets/img/dayeleven.jpg"
  },
  {
    title: "twelve",
    image: "assets/img/daytwelve.jpg"
  }
];

//loop through images
function looping() {
  for (var i=0; i < images.length; i++){
    var showImages = $('<img class="image">');

    .attr("src", "$(images[i].image)");
    .attr("data", "$(images[i].title)");

    $(rootDiv).append(showImages);
  };
};

looping();

function shuffling() {
  images.sort(function(a, b) {
     return 0.5 - Math.random()
  });
  looping();
};

$("#shuffleBtn").on('click', function(){
  $(rootDiv).empty();
  Shuffle();
  console.log(images);
});






// import React, { Component } from 'react';
// import ClickyGame from "./ClickyGame";

// class App extends Component {
//   render() {
//     return (
//       <div className="app-root">
//         <header className="App-header">
//           <div className="container text-center">
//             <h1 className="">12 Days of Clicky Christmas!</h1>
//             <h4>Click on any image and keep in mind it's current position. Once a photo is clicked, the images will do a quick "dance". Keep an eye on the original photo you clicked. Earn points by clicking the spot where it was originally. DON'T click on the same picture if it comes back to its original position. Remember which position it was in last and click that. Happy 12 Days of Clicky Christmas!</h4>
//           </div>
//         </header>
//         <main className="container">
//           <div role="img" aria-label="click-item" className="click-item"></div>
//         </main>
//         <footer class="footer">
//           <div className="container text-center">&copy; 2017 C.Dolan</div>
//         </footer>
//       </div>
//     );
//   }
// }

// export default App;
