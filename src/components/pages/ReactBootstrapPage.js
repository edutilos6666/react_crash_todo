import React, {Component} from 'react';
import  Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Table from 'react-bootstrap/Table';
import Alert from 'react-bootstrap/Alert';
import ProgressBarExample from '../custom-bootstrap-components/ProgressBarExample';
import ImageExample from '../custom-bootstrap-components/ImageExample';
import PopoverExample from '../custom-bootstrap-components/PopoverExample';
import CardExample from '../custom-bootstrap-components/CardExample';
import CarouselExample from '../custom-bootstrap-components/CarouselExample';
import SpinnerExample  from '../custom-bootstrap-components/SpinnerExample';
import ModalExample from '../custom-bootstrap-components/ModalExample';
import JumbotronExample from '../custom-bootstrap-components/JumbotronExample';
import PaginationExample from '../custom-bootstrap-components/PaginationExample';

const VARIANT_PRIMARY = "primary";
const VARIANT_SECONDARY = "secondary";
const VARIANT_SUCCESS = "success";
const VARIANT_DANGER = "danger";
const VARIANT_WARNING = "warning";
const VARIANT_INFO = "info";
const VARIANT_DARK = "dark";
const VARIANT_LIGHT = "light";

const VARIANT_OUTLINE_PRIMARY = "outline-primary";
const VARIANT_OUTLINE_SECONDARY = "outline-secondary";
const VARIANT_OUTLINE_SUCCESS = "outline-success";
const VARIANT_OUTLINE_DANGER = "outline-danger";
const VARIANT_OUTLINE_WARNING = "outline-warning";
const VARIANT_OUTLINE_INFO = "outline-info";
const VARIANT_OUTLINE_DARK = "outline-dark";
const VARIANT_OUTLINE_LIGHT = "outline-light";

class ReactBootstrapPage extends Component {
    handleClose = (variant) => {
        console.log(variant);
        var showPrimary = this.state.showPrimary;
        var showSecondary = this.state.showSecondary;
        var showSuccess = this.state.showSuccess;
        var showDanger = this.state.showDanger;
        var showWarning = this.state.showWarning;
        var showInfo = this.state.showInfo;
        var showDark = this.state.showDark;
        var showLight = this.state.showLight;
        switch(variant) {
            case VARIANT_PRIMARY: 
                showPrimary = false;
                break;
            case VARIANT_SECONDARY:
                showSecondary = false;
                break;
            case VARIANT_SUCCESS:
                showSuccess = false;
                break;
            case VARIANT_DANGER:
                showDanger = false;
                break;
            case VARIANT_WARNING:
                showWarning = false;
                break;
            case VARIANT_INFO:
                showInfo = false;
                break;
            case VARIANT_DARK:
                showDark = false;
                break;
            case VARIANT_LIGHT:
                showLight = false;
                break;
            default:
                break;
        }
        this.setState({
            showPrimary,
            showSecondary,
            showSuccess,
            showDanger,
            showWarning,
            showInfo,
            showDark,
            showLight
        });
    }

    state = {
        showPrimary: true,
        showSecondary: true,
        showSuccess: true,
        showDanger: true,
        showWarning: true,
        showInfo: true,
        showDark: true,
        showLight: true
    }
    render() {
        const NEWLINE = <React.Fragment><br/><br/></React.Fragment>;
        return (
            <React.Fragment>
                <h1>Bootstrap examples</h1>
                <ButtonToolbar>
                    <Button variant={VARIANT_PRIMARY}>Primary</Button>
                    <Button variant={VARIANT_SECONDARY}>Secondary</Button>
                    <Button variant={VARIANT_SUCCESS}>Success</Button>
                    <Button variant={VARIANT_WARNING}>Warning</Button>
                    <Button variant={VARIANT_DANGER}>Danger</Button>
                    <Button variant={VARIANT_INFO}>Info</Button>
                    <Button variant={VARIANT_LIGHT}>Light</Button>
                    <Button variant={VARIANT_DARK}>Dark</Button>
                    <Button variant="link">Link</Button>
                </ButtonToolbar>
                <br/>
                <ButtonToolbar>
                    <Button variant={VARIANT_OUTLINE_PRIMARY}>Primary</Button>
                    <Button variant={VARIANT_OUTLINE_SECONDARY}>Secondary</Button>
                    <Button variant={VARIANT_OUTLINE_SUCCESS}>Success</Button>
                    <Button variant={VARIANT_OUTLINE_WARNING}>Warning</Button>
                    <Button variant={VARIANT_OUTLINE_DANGER}>Danger</Button>
                    <Button variant={VARIANT_OUTLINE_INFO}>Info</Button>
                    <Button variant={VARIANT_OUTLINE_LIGHT}>Light</Button>
                    <Button variant={VARIANT_OUTLINE_DARK}>Dark</Button>
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
                    <Button variant={VARIANT_PRIMARY} size="lg">
                    Large button
                    </Button>
                    <Button variant={VARIANT_SECONDARY} size="lg">
                    Large button
                    </Button>
                </ButtonToolbar>

                <ButtonToolbar>
                    <Button variant={VARIANT_PRIMARY} size="sm">
                    Small button
                    </Button>
                    <Button variant={VARIANT_SECONDARY} size="sm">
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
                <br/>
                <Alert show={this.state.showPrimary} dismissible variant={VARIANT_PRIMARY} onClose={()=> this.handleClose(VARIANT_PRIMARY)}>
                    Alert Primary
                </Alert>
                <Alert show={this.state.showSecondary} dismissible variant={VARIANT_SECONDARY} onClose={()=> this.handleClose(VARIANT_SECONDARY)}>
                    Alert Secondary
                </Alert>
                <Alert show={this.state.showSuccess} dismissible variant={VARIANT_SUCCESS} onClose={() => this.handleClose(VARIANT_SUCCESS)}>
                    Alert Success
                </Alert>
                <Alert show={this.state.showDanger} dismissible variant={VARIANT_DANGER} onClose={()=> this.handleClose(VARIANT_DANGER)}>
                    Alert Danger
                </Alert>
                <Alert show={this.state.showWarning} dismissible variant={VARIANT_WARNING} onClose={()=> this.handleClose(VARIANT_WARNING)}>
                    Alert Warning
                </Alert>
                <Alert show={this.state.showInfo} dismissible variant={VARIANT_INFO} onClose={()=> this.handleClose(VARIANT_INFO)}>
                    Alert Info
                </Alert>
                <Alert show={this.state.showDark} dismissible variant={VARIANT_DARK} onClose={()=> this.handleClose(VARIANT_DARK)}>
                    Alert Dark
                </Alert>
                <Alert show={this.state.showLight} dismissible variant={VARIANT_LIGHT} onClose={()=> this.handleClose(VARIANT_LIGHT)}>
                    Alert Light
                </Alert>
                <br/><br/>
                <ProgressBarExample />
                <ImageExample />
                <PopoverExample />
                <CardExample />
                <br/>
                <CarouselExample />
                {NEWLINE}
                <SpinnerExample />
                {NEWLINE}
                <ModalExample />
                {NEWLINE}
                <JumbotronExample />
                {NEWLINE}
                <PaginationExample />
                {NEWLINE}
            </React.Fragment>
        );
    }
}



export default ReactBootstrapPage;