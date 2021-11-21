import './App.css';
import {searchData} from "./actions/weather";
import {useDispatch, useSelector} from "react-redux";

const App = () => {
    const results = useSelector(state => state.weatherReducer)
    const dispatch = useDispatch();
    const searchWeather = (event) => {
        event.preventDefault();
        dispatch(searchData(event.target.city.value))
    }
    return (
        <div className="App">
            <header className="App-header">
                <form onSubmit={(event => {
                    searchWeather(event)
                })}>
                    <input type={'text'} name={'city'}/>
                    <button>search</button>
                </form>
                <div>
                    <table>
                        <tbody>
                        <tr>
                            <td>City</td>
                            <td>humidity</td>
                            <td>pressure</td>
                            <td>thermal sensation</td>
                            <td>temperature</td>
                            <td>Min</td>
                            <td>Max</td>
                        </tr>
                        {
                            results.map((item) => {
                                return (
                                    <tr key={Math.random()}>
                                        <td>{item.name}</td>
                                        <td>{item.main.humidity}</td>
                                        <td>{item.main.pressure}</td>
                                        <td>{item.main.feels_like}</td>
                                        <td>{item.main.temp}</td>
                                        <td>{item.main.temp_min}</td>
                                        <td>{item.main.temp_max}</td>
                                    </tr>
                                )
                            })
                        }
                        </tbody>
                    </table>
                </div>
            </header>
        </div>
    );
}

export default App;
