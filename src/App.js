import React, { Component } from "react";
import Card from "./components/Cards/Card";
import Wrapper from "./components/Wrapper/Wrapper";
import Score from "./components/Score/Score";
import images from "./images.json";
import "./app.css";


class App extends Component {
  state = {   //the object that represents what can change
    images, // json file
    clickedImgIds: [],  //empty array
    score: 0,  //
    goal: 12,
    status: "" // how to change color ???
  };

  //Shuffle the cards in the browser when clicked
  shuffleImg = id => {
    let clickedImgIds = this.state.clickedImgIds;

    //
    if (clickedImgIds.includes(id)) {
      this.setState({ clickedImgIds: [], score: 0, status: "Game Over!"});
      // state.style({color: 'red'});
    //  this.state.style={color: "red"};
      return;
    } else {
      clickedImgIds.push(id)

      if (clickedImgIds.length === 12) {
        this.setState({ score: 12, status: "You Won!", clickedImgIds: [] });
        return;
      }

      this.setState({ images, clickedImgIds, score: clickedImgIds.length, status: " " });

      for (let i = images.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [images[i], images[j]] = [images[j], images[i]];
      }
    }
  }

  // Map over this.state.cards and render a Card component
  render() {
   const {score, status } = this.state; //destructuring 
     return (
      <div className="app_main">
        <header className="app_header">
          <h1 className="app_title">Clicky Game</h1>
          <p className="app_rule"> Click each image only once!</p>
        </header >
        <Score total={score}
          goal={8}
          status={status}
        />
        <div className="app_container">
        <Wrapper>
          {this.state.images.map(images => (
            <Card
              shuffleImg={this.shuffleImg}
              id={images.id}
              key={images.id}
              image={images.image}
            />
          ))}
        </Wrapper>
        </div>
      </div>
    );
  }
}

export default App;