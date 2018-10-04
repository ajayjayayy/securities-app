import React         from "react";
import { Component } from "react";
import PropTypes     from "prop-types";
import { connect }   from "react-redux";
import "./loader.scss";

class Loader extends Component{
    render(){
        if(this.props.isFetching === false)
            return null;

        return(
            <div>I am a loader</div>
        );
    }
}

Loader.propTypes = {
    isFetching: PropTypes.bool
};

let mapState = (state) => {
    return {
        ...state.fetchData
    };
};

export default connect(mapState, null)(Loader);
