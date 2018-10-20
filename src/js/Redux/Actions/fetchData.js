import fetchComplete         from "./fetchComplete.js";
import fetchError            from "./fetchError.js";
import fetchSuccess          from "./fetchSuccess.js";
import fetchManyCalls        from "./fetchManyCalls.js";
import fetchRequest          from "./fetchRequest.js";
import resetDuplicateEntries from "./resetDuplicateEntries.js";
import { store }             from "../Reducers/";

function fetchData(stockNames)
{
    // get asset type to request: monthly or daily
    let { frequency } = store.getState().fetchData;

    return function(dispatch){
        // begin request
        dispatch(fetchRequest(true));
        dispatch(resetDuplicateEntries()); // to keep the ui consistent
        return(
            // iterate through each stock and request
            Promise.all(
                stockNames.map(stock =>
                    fetch(`https://www.alphavantage.co/query?${frequency}symbol=${stock}&apikey=${process.env.API_KEY}`)
                        .then(res => res.json())
                )
            )
            // process data accordingly
            .then(allStockData => {
                // will store data in new array
                let processedData = [];

                // check data
                allStockData.map(data => {
                    if(data["Meta Data"])
                        processedData.push(fetchSuccess(data));
                    if(data["Error Message"])
                        processedData.push(fetchError(data));
                    if(data["Information"])
                        processedData.push(fetchManyCalls(data));
                });

                // end request
                dispatch(fetchComplete(processedData));
                dispatch(fetchRequest(false));
            })
        );
    };
}

export default fetchData;
