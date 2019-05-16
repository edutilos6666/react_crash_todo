import React , {Component} from 'react';
import {DragSource} from 'react-dnd';
import './source.css';

class Source extends Component {
    constructor(props) {
        super(props)
        // this.divRef = React.createRef();
        this.state = {
            display: "block"
        };
    }
    render() {
        const divStyle = {
            display: this.state.display
        }
        const {name, connectDragSource} = this.props; 
        return connectDragSource(
            <div className="square" style={divStyle}>
                {name}
            </div>
        )
    }
}

function collect(connect, monitor) {
    return {
        connectDragSource: connect.dragSource()
    }
}

const cardSource = {
    beginDrag(props, monitor, component) {
        const item = {id: props.id};
        return item;
    },
    endDrag(props, monitor) {
        console.log(props);
        console.log(monitor);
        console.log(monitor.getItem)
        // this.setState({display: "none"});
    }
}

export default DragSource("SOURCE", cardSource, collect)(Source);