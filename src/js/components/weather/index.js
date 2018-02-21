import { connect } from "react-redux";
import Weather from "./Weather";

function mapStoreToProps(store) {
    return {
        searchObj: store.search,
    };
}

export default connect(mapStoreToProps)(Weather);