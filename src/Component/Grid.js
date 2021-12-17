import {Square} from "./Square";

/**
 * Component for a grid containing squares
 */

class Grid extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            squares: Array(9).fill(null),
        };
    }

    renderSquare(i){
        return <Square value={this.state.squares[i]} />;
    }
}