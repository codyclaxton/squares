import React from "react";
import { drawSquare } from "./helpers";
//Router is only good when you have multiple links

class CreateButton extends React.Component {
  state = {
    times_clicked: 0,
  };
  //...syntax means to copy properties.  So only to use on objects
  buttonClicked = () => {
    var total = this.times_clicked + 1;
    //this.setState.times_clicked({ total });
    var element = (
      <div>
        <ul>
          <button>Square X</button>
        </ul>
      </div>
    );
    drawSquare();
  };
  //Anything within render method is invoked when the page is loaded
  //Get around it by using an arrow function
  render() {
    return (
      <div>
        <button onClick={() => this.buttonClicked()}>Create Color</button>
        <br />
      </div>
    );
  }
}

function App() {
  return (
    <div className="App">
      <div classname="canvas">
        <canvas width="100" height="100" id="canvas"></canvas>
        <CreateButton />
      </div>
    </div>
  );
}

export default App;
