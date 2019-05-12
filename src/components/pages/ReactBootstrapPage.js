import React, {Component} from 'react';
import  Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Table from 'react-bootstrap/Table';
class ReactBootstrapPage extends Component {
    render() {
        return (
            <React.Fragment>
                <h1>Bootstrap examples</h1>
                <ButtonToolbar>
                    <Button variant="primary">Primary</Button>
                    <Button variant="secondary">Secondary</Button>
                    <Button variant="success">Success</Button>
                    <Button variant="warning">Warning</Button>
                    <Button variant="danger">Danger</Button>
                    <Button variant="info">Info</Button>
                    <Button variant="light">Light</Button>
                    <Button variant="dark">Dark</Button>
                    <Button variant="link">Link</Button>
                </ButtonToolbar>
                <br/>
                <ButtonToolbar>
                    <Button variant="outline-primary">Primary</Button>
                    <Button variant="outline-secondary">Secondary</Button>
                    <Button variant="outline-success">Success</Button>
                    <Button variant="outline-warning">Warning</Button>
                    <Button variant="outline-danger">Danger</Button>
                    <Button variant="outline-info">Info</Button>
                    <Button variant="outline-light">Light</Button>
                    <Button variant="outline-dark">Dark</Button>
                </ButtonToolbar>
                <br/>
                <ButtonToolbar>
                    <Button href="#">Link</Button>
                    <Button type="submit">Button</Button>
                    <Button as="input" type="button" value="Input" />
                    <Button as="input" type="submit" value="Submit" />
                    <Button as="input" type="reset" value="Reset" />
                </ButtonToolbar>
                <br/>
                <ButtonToolbar>
                    <Button variant="primary" size="lg">
                    Large button
                    </Button>
                    <Button variant="secondary" size="lg">
                    Large button
                    </Button>
                </ButtonToolbar>

                <ButtonToolbar>
                    <Button variant="primary" size="sm">
                    Small button
                    </Button>
                    <Button variant="secondary" size="sm">
                    Small button
                    </Button>
                </ButtonToolbar>

                <br/>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                        <th>#</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Username</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        </tr>
                        <tr>
                        <td>2</td>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                        </tr>
                        <tr>
                        <td>3</td>
                        <td colSpan="2">Larry the Bird</td>
                        <td>@twitter</td>
                        </tr>
                    </tbody>
                </Table>
                <br/>
                <Table striped bordered hover variant="dark">
                    <thead>
                        <tr>
                        <th>#</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Username</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        </tr>
                        <tr>
                        <td>2</td>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                        </tr>
                        <tr>
                        <td>3</td>
                        <td colSpan="2">Larry the Bird</td>
                        <td>@twitter</td>
                        </tr>
                    </tbody>
                </Table>
            </React.Fragment>
        );
    }
}

export default ReactBootstrapPage;