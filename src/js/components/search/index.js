import { connect } from "react-redux";
import Search from "./Search";

function mapStoreToProps(store) {
    return {
        input: store.search.input
    };
}

export default connect(mapStoreToProps)(Search);