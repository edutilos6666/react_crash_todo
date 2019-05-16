import React, {Component} from 'react';
import Source from './Source';
import Target from './Target';
import {DragDropContextProvider, DragDropContext} from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import './index.css';

class Container extends Component {
    constructor(){
        super();
        this.state = {
            droppedItem: {}
        }
    }

    onDrop = (item) => {
        console.log(item);
        this.setState({
            droppedItem: item
        })
    }

    render() {
        return (
            // <DragDropContextProvider backend={HTML5Backend}>
                <div className="container">
                    <div className="source">
                        <Source name="Block A" id="a" />
                        <Source name="Block B" id="b" />
                    </div>
                    <div className="destination">
                        <Target 
                            droppedItem={this.state.droppedItem}
                            onDrop={this.onDrop}
                            />
                    </div>
                </div>
            // </DragDropContextProvider>
        )
    }
}


// export default Container;

export default DragDropContext(HTML5Backend)(Container)