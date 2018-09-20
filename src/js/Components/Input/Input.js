import React, { Component } from "react";
import PropTypes            from "prop-types";
import "./input.scss";

class Input extends Component{
    render(){
        return(
            <form  className="form-input" onSubmit={ this.props.onSubmit }>
                <input className="form-input__text" type="text" placeholder={ this.props.placeholder } id="user-input"/>
                <button className="form-input__btn" type="submit">VIEW</button>
            </form>
        );
    }
}

// Prop type checking
Input.propTypes = {
    onSubmit: PropTypes.func,
    placeholder: PropTypes.string,
    className: PropTypes.string
};

export default Input;