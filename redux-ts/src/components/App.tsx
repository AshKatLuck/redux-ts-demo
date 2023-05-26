import RepositoriesList from "./RepositoriesList";
import { Provider } from "react-redux";
import {store} from '../state'


const App=()=>{
    return (<Provider store={store}>
        <div>
            <h1>Seach for an npm package</h1>
            <RepositoriesList/>
        </div>
    </Provider>)
};

export default App;