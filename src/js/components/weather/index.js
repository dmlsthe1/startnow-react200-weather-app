import { connect } from "react-redux";
import Weather from "./Weather";

function mapStoreToProps(store) {
    return {
        weather: store.search.weather,
    };
}

export default connect(mapStoreToProps)(Weather);