import React                from "react";
import { Component }        from "react";
import { Dialog }           from "../../Components/";
import { Loader }           from "../../Components/";
import { StockInfo }        from "../../Components/";
import { Toggler }          from "../../Components/";
import { StockSelector }    from "../../Components/";
import { StockDescription } from "../../Components/";
import { Chart }            from "../../Components/";
import "./home.scss";

class Home extends Component{
    render(){
        return(
            <>
                <Dialog>
                    <Dialog.Errors/>
                    <Dialog.Warnings/>
                    <Dialog.Duplicate/>
                </Dialog>
                <Loader/>
                <Toggler>
                    {({successData, onChange, activeIndex}) => (
                        <>
                            <StockInfo successData={ successData[activeIndex] }/>
                            <div className="chart-data-container">
                                <Chart successData={ successData[activeIndex] }/>
                                <StockSelector successData={ successData } onChange={ onChange }/>
                            </div>
                            <StockDescription successData={ successData[activeIndex] }/>
                        </>
                    )}
                </Toggler>
            </>
        );
    }
}

export default Home;
