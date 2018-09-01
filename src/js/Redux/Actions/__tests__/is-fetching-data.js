import { IS_FETCHING_DATA } from "../../Constants";
import { isFetchingData }  from "../Fetch-Data";

test("make sure fetching data action is logged correctly", () => {
    let fetchingDataAction   = isFetchingData();
    let { type, isFetching } = fetchingDataAction;
    expect(type).toBe(IS_FETCHING_DATA);
    expect(isFetching).toBe(true);
});