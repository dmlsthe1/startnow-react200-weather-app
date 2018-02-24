import { connect } from "react-redux";
import Search from "./Search";

function mapStoreToProps(store) {
    return {
        input: store.search.input,
        cache: store.search.cache,
        weather: store.search.weather,
        history: store.search.history
    };
}

export default connect(mapStoreToProps)(Search);