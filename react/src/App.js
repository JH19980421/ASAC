import {
	Route, 
	Routes 
} from "react-router-dom";
import JobDetail from "./pages/job-detail";

import Main from './pages/main';
import Recruiting from "./pages/recruiting";


function App() {
	return (
		<Routes>
			<Route path="/" element={<Main />} />
			<Route path="/recruting" element={<Recruiting />} />
			<Route path="/job-detail" element={<JobDetail />} />
		</Routes>
	);
}

export default App;
