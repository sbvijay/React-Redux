import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ActionCreators } from '../actions/';

export default function DashBoard(ComposedComponent) {
    class DashBoardontainer extends Component {
        constructor(props) {
            super(props);
        }
        render() {
            return (<ComposedComponent {...this.props} />)
        }
    }
    function mapStateToProps(state) {
        return {
            ...state.dashboard,
        };
    }
    function mapDispatchToProps(dispatch) {
        return {
            actions: bindActionCreators(ActionCreators, dispatch)
        };
    }
    return connect(mapStateToProps, mapDispatchToProps)(DashBoardontainer);
}
