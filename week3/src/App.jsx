import { useState } from 'react';
import Header from './Layout/header/header';
import Footer from './Layout/footer/footer';
import Main from './Layout/main/main';
import Signup from './Layout/signup/signup';
import Job from './Layout/job/job';
import Searchbar from './Layout/searchbar/searchbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
	const [modal, setModal] = useState(false);
	const [SearchBar, setSearchBar] = useState(false);

	return (
		<div>
			<Header
				setModal={setModal}
				setSearchBar={setSearchBar}
			/>
			<BrowserRouter>
				<Routes>
					<Route
						exact
						path="/"
						element={<Main />}
					/>
					<Route
						path="/job"
						element={<Job />}
					/>
					<Route
						path="/job/:id"
						element={<Job />}
					/>
				</Routes>
			</BrowserRouter>
			<Footer />

			{modal && <Signup setModal={setModal} />}
			{SearchBar && (
				<Searchbar
					setSearchBar={setSearchBar}
				/>
			)}
		</div>
	);
}

export default App;
