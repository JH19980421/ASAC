import './searchresult.css';
import React from 'react';
import Keyword from '../keyword/keyword';
import DB from '../db.json';

const SearchResult = () => {
	return (
		<div className="SearchBody">
			<div className="SearchInput">
				<button
					type="button"
					className="SearchInput_SearchKeywordText"
				>
					리액트
				</button>
			</div>
			<div className="SearchBackgroundColor">
				<div className="SearchDetail">
					<div className="Search_sectionContainer">
						<h2 className="Search_searchLabel">
							회사
							<span>
								1
							</span>
						</h2>
						<div className="CompanyList">
							<div className="slick">
								<div className="slick-_list">
									<div className="slick_track">
										<div
											data-index="0"
											className="slick_slide"
											tabindex="-1"
											aria-hidden="false"
										>
											<div>
												<a
													href="/company/14511"
													class="CompanyItem_className"
													aria-label="tag"
													data-attribute-id="company__click"
													data-company-id="14511"
													data-company-name="두부랩"
												>
													<div className="CompanyItem_logoGroup">
														<div className="CompanyItem_logoClassName" />
														<div className="CompanyItem_textClassName">
															<h5>
																두부랩
															</h5>
															<h6>
																IT,
																컨텐츠
															</h6>
														</div>
													</div>
													<button
														className="CompanyItem_button"
														data-attribute-id="company__follow__click"
														data-company-id="14511"
														data-company-name="두부랩"
														data-kind="add"
													>
														<span className="Button_label">
															팔로우
														</span>
													</button>
												</a>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="SearchDetail">
					<div className="Search_sectionContainer">
						<h2 className="Search_searchLabel">
							포지션
							<span>
								7
							</span>
						</h2>
					</div>
					<div className="list_keywords">
						<Keyword
							putKey={
								DB.db
							}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SearchResult;
