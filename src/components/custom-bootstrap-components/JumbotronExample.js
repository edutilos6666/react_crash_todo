import React, {Component} from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';

class JumbotronExample extends Component {
    render() {
        return (
            <Jumbotron>
                <h1>Hello World</h1>
                <p>
                    Hello World!!!Hello World!!!Hello World!!!Hello World!!!Hello World!!!Hello World!!!
                    Hello World!!!Hello World!!!Hello World!!!Hello World!!!Hello World!!!Hello World!!!
                    Hello World!!!Hello World!!!Hello World!!!Hello World!!!Hello World!!!Hello World!!!
                    ...
                </p>
                <p>
                    <Button variant="primary">Learn more</Button>
                </p>
            </Jumbotron>
        );
    }
}

export default JumbotronExample;