import './searchbar.css';

const SearchBar = ({ setSearchBar }) => {
	const closeSearchBar = () => {
		setSearchBar(false);
	};

	return (
		<div className="SearchBarBackground">
			<div className="SearchBar">
				<div className="SearchBar_Container">
					<form
						role="presentation"
						action="."
					>
						<input
							type="search"
							placeholder="#태그, 회사, 포지션 검색"
							autoComplete="off"
						/>
					</form>
					<div className="Result_Container">
						<div>
							<h4 className="RecentSearchResults">
								추천태그로
								검색해보세요
							</h4>
							<a
								href="/tag_search"
								className="RecentSearchResultsRightSideButton"
								aria-label=""
								data-attribute-id="search__goCompanyTag"
							>
								기업태그
								홈
								이동하기
								<svg
									width="12"
									height="12"
									viewBox="0 0 12 12"
								>
									<path
										fill="currentColor"
										d="M4.22 9.72a.75.75 0 001.06 1.06l4.25-4.25a.75.75 0 000-1.06L5.28 1.22a.75.75 0 00-1.06 1.06L7.94 6 4.22 9.72z"
									></path>
								</svg>
							</a>
							<ul className="RecentSearchResultslistClass">
								<li class="tagListItem">
									<button
										class="Tag_className"
										type="button"
									>
										#퇴사율5%이하
									</button>
								</li>
								<li className="tagListItem">
									<button
										class="Tag_className"
										type="button"
									>
										#설립4~9년
									</button>
								</li>
								<li className="tagListItem">
									<button
										className="Tag_className"
										type="button"
									>
										#연봉상위2~5%
									</button>
								</li>
								<li className="tagListItem">
									<button
										className="Tag_className"
										type="button"
									>
										#인공지능
									</button>
								</li>
								<li className="tagListItem">
									<button
										className="Tag_className"
										type="button"
									>
										#푸드테크
									</button>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
			<div
				className="closeSearch"
				onClick={closeSearchBar}
			/>
		</div>
	);
};

export default SearchBar;
