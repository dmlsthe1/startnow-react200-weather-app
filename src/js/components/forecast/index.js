import { connect } from "react-redux";
import Forecast from "./Forecast";

function mapStoreToProps(store) {
    return {
        weather: store.search.weather,
    }
}

export default connect(mapStoreToProps)(Forecast);