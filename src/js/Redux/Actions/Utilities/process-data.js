function proccessData(assetData){

    // Get base data
    let baseData = Object.entries(assetData);

    // Now get meta data and raw data
    let metaData = baseData[0][1];
    let rawData  = Object.entries(baseData[1][1]).reverse();

    // Get rawData properties
    let assetKeys = Object.keys(rawData[0][1]);

    // Create new object where we'll store new data
    let processedData = {};

    // Process raw data and store in each corresponding object property
    assetKeys.forEach(function passThroughEach(assetKey){
        processedData[assetKey] = rawData.map( item => Number(item[1][assetKey]).toFixed(2) );
    });

    // Now create new properties for dates, assetKeys, and Meta Data
    processedData["dates"]     = rawData.map( item => item[0] );
    processedData["assetKeys"] = ["dates"].concat(assetKeys); // Need to add dates to assetKeys since not provided by default
    processedData["metaData"]  = metaData;

    // Return new object with corresponding data
    return processedData;
}

export default proccessData;
