import { favoriteMonth as favouriteMonth, convertCToF } from "../../utils/seasonal";

function Temperature() {
    return (
        <div>
            <h1>Temperature Viewer</h1>
            <p>The current weather is {convertCToF(7)} degrees F.</p>
            <p>Our favourite month is {favouriteMonth()}.</p>
        </div>
    )
}

export default Temperature;