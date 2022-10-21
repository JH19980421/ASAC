import {
	Route, 
	Routes 
} from "react-router-dom";

import Main from './pages/main';
import Recruiting from "./pages/recruiting";


function App() {
	return (
		<Routes>
			<Route path="/" element={<Main />} />
			<Route path="/recruting" element={<Recruiting />} />
		</Routes>
	);
}

export default App;
