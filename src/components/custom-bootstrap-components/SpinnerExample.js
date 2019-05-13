import React, {Component} from 'react';
import Spinner from 'react-bootstrap/Spinner';
import PropTypes from 'prop-types';

const VARIANT_PRIMARY = "primary";
const VARIANT_SECONDARY = "secondary";
const VARIANT_SUCCESS = "success";
const VARIANT_DANGER = "danger";
const VARIANT_WARNING = "warning";
const VARIANT_INFO = "info";
const VARIANT_LIGHT = "light";
const VARIANT_DARK = "dark";


class SpinnerExample extends Component {
    render() {
        return (
            <React.Fragment>
                <SpinnerBorderAnimation variant={VARIANT_PRIMARY} />
                <SpinnerBorderAnimation variant={VARIANT_SECONDARY} />
                <SpinnerBorderAnimation variant={VARIANT_SUCCESS} />
                <SpinnerBorderAnimation variant={VARIANT_DANGER} />
                <SpinnerBorderAnimation variant={VARIANT_WARNING} />
                <SpinnerBorderAnimation variant={VARIANT_INFO} />
                <SpinnerBorderAnimation variant={VARIANT_LIGHT} />
                <SpinnerBorderAnimation variant={VARIANT_DARK} />
                <br/>
                <SpinnerGrowAnimation variant={VARIANT_PRIMARY} />
                <SpinnerGrowAnimation variant={VARIANT_SECONDARY} />
                <SpinnerGrowAnimation variant={VARIANT_SUCCESS} />
                <SpinnerGrowAnimation variant={VARIANT_DANGER} />
                <SpinnerGrowAnimation variant={VARIANT_WARNING} />
                <SpinnerGrowAnimation variant={VARIANT_INFO} />
                <SpinnerGrowAnimation variant={VARIANT_LIGHT} />
                <SpinnerGrowAnimation variant={VARIANT_DARK} />
                <br/>
            </React.Fragment>
        );
    }
}


class SpinnerBorderAnimation extends Component {
    render() {
        return (
            <Spinner animation="border" variant={this.props.variant} />
        );
    }
}


class SpinnerGrowAnimation extends Component {
    render() {
        return (
            <Spinner animation="grow" variant={this.props.variant} />
        );
    }
}


SpinnerBorderAnimation.propTypes = {
    variant: PropTypes.string.isRequired
}

SpinnerGrowAnimation.propTypes = {
    variant: PropTypes.string.isRequired
}

export default SpinnerExample;