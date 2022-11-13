import { useState } from 'react';
import Header from './Layout/header/header';
import Footer from './Layout/footer/footer';
import Main from './Layout/main/main';
import Signup from './Layout/signup/signup';
import Job from './Layout/job/job';
import Searchbar from './Layout/searchbar/searchbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SearchResult from './Layout/searchresult/searchresult';
import SaveLogiN from './Layout/savelogin/savelogin';

function App() {
	const [modal, setModal] = useState(false);
	const [SearchBar, setSearchBar] = useState(false);
	const [SaveLogin, setSaveLogin] = useState(false);
	const [savedLoginId, setSavedLoginId] = useState('');
	const [savedLoginPw, setSavedLoginPw] = useState('');
	const [mainheader, setHeads] = useState(false);
	let sessionStorage = window.localStorage;

	console.log(JSON.stringify(sessionStorage));
	return (
		<div>
			<BrowserRouter>
				<Header
					setModal={setModal}
					setSearchBar={setSearchBar}
					setSaveLogin={setSaveLogin}
					sessionStorage={sessionStorage}
					setSavedLoginId={setSavedLoginId}
					setSavedLoginPw={setSavedLoginPw}
				/>

				<Routes>
					<Route exact path="/" element={<Main />} />
					<Route path="/job" element={<Job />} />
					<Route path="/job/:id" element={<Job />} />
					<Route path="/result" element={<SearchResult />} />
				</Routes>

				<Footer />
				{SaveLogin && (
					<SaveLogiN
						sessionStorage={sessionStorage}
						setSavedLoginId={setSavedLoginId}
						setSavedLoginPw={setSavedLoginPw}
						setHeads={setHeads}
					/>
				)}
				{modal && (
					<Signup
						setModal={setModal}
						setSearchBar={setSearchBar}
						setSaveLogin={setSaveLogin}
						sessionStorage={sessionStorage}
						setSavedLoginId={setSavedLoginId}
						setSavedLoginPw={setSavedLoginPw}
					/>
				)}
				{SearchBar && <Searchbar setSearchBar={setSearchBar} />}
			</BrowserRouter>
		</div>
	);
}

export default App;
