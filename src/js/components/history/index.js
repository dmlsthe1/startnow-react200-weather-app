import { connect } from "react-redux";
import History from "./History";

function mapStoreToProps(store) {
    return { 
        searchObj: store.search,
    };
}

export default connect(mapStoreToProps)(History);