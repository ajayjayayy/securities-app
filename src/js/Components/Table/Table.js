import React         from "react";
import { Component } from "react";
import PropTypes     from "prop-types";
import { connect }   from "react-redux";
import "./table.scss";

class Table extends Component{
    render(){
        let { successData } = this.props;

        if(successData.length === 0)
            return null;

        return(
            <div className="stocks-table__container">
                <table className="stocks-table">
                    <thead>
                        <tr>
                            <th className="stocks-table__col">Stocks</th>
                            <th className="stocks-table__col">Price</th>
                            <th className="stocks-table__col--hide">Open</th>
                            <th className="stocks-table__col--hide">Low</th>
                            <th className="stocks-table__col--hide">High</th>
                            <th className="stocks-table__col">% Change</th>
                            <th className="stocks-table__col--hide">Current Date</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        successData.map( (item, index) =>
                            <tr key={ index }>
                                <td>{ item["processedData"]["symbol"] }</td>
                                <td>{ item["processedData"]["adjustedClose"][0] }</td>
                                <td className="stocks-table__col--hide">
                                    { item["processedData"]["open"][0] }
                                </td>
                                <td className="stocks-table__col--hide">
                                    { item["processedData"]["low"][0] }
                                </td>
                                <td className="stocks-table__col--hide">
                                    { item["processedData"]["high"][0] }
                                </td>
                                <td>{ item["processedData"]["percentChange"][0] }</td>
                                <td className="stocks-table__col--hide">
                                    { item["processedData"]["dates"][0] }
                                </td>
                            </tr>
                        )
                    }
                    </tbody>
                </table>
            </div>
        );
    }
}

Table.propTypes = {
    successData: PropTypes.array
};

let mapState = (state) => {
    return {
        ...state.receivedData
    };
};

export default connect(mapState, null)(Table);
