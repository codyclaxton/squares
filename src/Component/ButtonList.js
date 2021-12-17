/**
 * Class representing each square that has been previously created
 *
 * Button onclick:  Shows the previous square generated
 *
 * You want to push the already created square onto the squares array..  That way
 * the r,g,b color is stored with each square created
 *
 * Want to store what # in order that was created
 * Max of 50 squares
 */
class ButtonList extends React.Component {
  state = {
    count: 0,
    squares: [],
  };

  buttonClicked = (square) => {
    this.setState(
      { squares: [...this.state.count, super.square] }, //arg1
      (count = this.prevState.count + 1) //arg2
    );
  };

  renderSquares(i) {
    return React.createElement("button", "Square " + this.state.count);
  }
}
