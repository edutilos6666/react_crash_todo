import React, {Component} from 'react';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';


const VARIANT_PRIMARY = "primary";
const VARIANT_SECONDARY = "secondary";
const VARIANT_SUCCESS = "success";
const VARIANT_WARNING = "warning";
const POS_TOP = "top";
const POS_RIGHT = "right";
const POS_BOTTOM = "bottom";
const POS_LEFT = "left"; 

class PopoverExample extends Component {
    createPopover = (placement) => {
        return (
            <Popover
             id={`popobver-poisitioned-${placement}`}
             title={`Popover ${placement}`}>
                <strong>Popup</strong> Example <strong>!!!</strong>
            </Popover>
        );
    }
    render() {
        return (
            <React.Fragment>
                <ButtonToolbar>
                    <OverlayTrigger
                    trigger="click"
                    key={POS_TOP}
                    placement={POS_TOP}
                    overlay={this.createPopover(POS_TOP)}
                    >
                        <Button variant={VARIANT_SECONDARY}>Popover on {POS_TOP}</Button>
                    </OverlayTrigger>

                    <OverlayTrigger
                    trigger="click"
                    key={POS_RIGHT}
                    placement={POS_RIGHT}
                    overlay={this.createPopover(POS_RIGHT)}
                    >
                        <Button variant={VARIANT_PRIMARY}>Popover on {POS_RIGHT}</Button>
                    </OverlayTrigger>

                    <OverlayTrigger
                    trigger="click"
                    key={POS_BOTTOM}
                    placement={POS_BOTTOM}
                    overlay={this.createPopover(POS_BOTTOM)}
                    >
                        <Button variant={VARIANT_SUCCESS}>Popover on {POS_BOTTOM}</Button>
                    </OverlayTrigger>

                    <OverlayTrigger
                    trigger="click"
                    key={POS_LEFT}
                    placement={POS_LEFT}
                    overlay={this.createPopover(POS_LEFT)}
                    >
                        <Button variant={VARIANT_WARNING}>Popover on {POS_LEFT}</Button>
                    </OverlayTrigger>
                </ButtonToolbar>
                <br/><br/><br/><br/>
            </React.Fragment>
        );
    }
}

export default PopoverExample;