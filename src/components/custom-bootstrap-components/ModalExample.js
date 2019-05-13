import React, {Component} from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import ModalHeader from 'react-bootstrap/ModalHeader';
import ModalTitle from 'react-bootstrap/ModalTitle';
import ModalBody from 'react-bootstrap/ModalBody';
import ModalFooter from 'react-bootstrap/ModalFooter';

const VARIANT_PRIMARY = "primary";
const VARIANT_SECONDARY = "secondary";

class ModalExample extends Component {
    state = {
        showModal: false,
        showAlert: false
    }
    showModalDialog = () => {
        this.setState({showModal: true, showAlert: this.state.showAlert});
    }
    closeModalDialog = () => {
        this.setState({showModal: false, showAlert: this.state.showAlert});
    }
    showAlert = () => {
        this.setState({showModal: this.state.showModal, showAlert: true})
    }
    closeAlert = () => {
        this.setState({showModal: this.state.showModal, showAlert: false});
    }
    handleMockFileSave = () => {
        this.setState({showModal: false, showAlert: true});
    }
    render() {
        return (
            <>
            <Button variant={VARIANT_PRIMARY} onClick={this.showModalDialog}>
             Show Modal Dialog
            </Button>
            <br/>
            <Alert show={this.state.showAlert} dismissible variant={VARIANT_PRIMARY} onClose={this.closeAlert}>
                Files were saved!
            </Alert>

            <Modal show={this.state.showModal} onHide={this.closeModalDialog}>
                <ModalHeader closeButton>
                    <ModalTitle>OS File Save Dialog</ModalTitle>
                </ModalHeader>
                <ModalBody>
                    Do you want to save selected files?
                </ModalBody>
                <ModalFooter>
                    <Button variant={VARIANT_PRIMARY} onClick={this.handleMockFileSave}>Save Files</Button>
                    <Button variant={VARIANT_SECONDARY} onClick={this.closeModalDialog}>Close</Button>
                </ModalFooter>
            </Modal>
            </>
        );
    }
}

export default ModalExample;