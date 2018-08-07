import React, { Component } from "react";
import PropTypes            from "prop-types";
import { select }           from "d3-selection";
import "./scatterPlot.scss";

class ScatterPlot extends Component{

    componentDidUpdate(){
        let { stockData } = this.props.data;
        let adjustedClose = Object.entries(stockData).map( item => item[1]["5. adjusted close"] );

        // Need to remove old nodes first. Then update. Currently,
        // all stock data remains present. We don't want this!
        select(this.node)
            .append("g")
            .selectAll("circle")
            .data(adjustedClose)
            .enter()
            .append("circle");
    }

    render(){
        return(
            <svg
                ref={ node => this.node = node }
                width="500"
                height="300"
            />
        );
    }
}

ScatterPlot.propTypes = {
    data: PropTypes.object
};

export default ScatterPlot;
