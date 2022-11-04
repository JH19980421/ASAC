import { useLocation, useSearchParams } from "react-router-dom";
import Header from "../components/header";
import SearchCompany from "../components/search/search-company";

import "../css/search.css";
import "../css/common.css";
import SearchPosition from "../components/search/search-position";

import * as Filter from "../utils/filter";

function Search() {
    const location = useLocation();
    const [searchParams, setSearchParams] = useSearchParams();
    const query = searchParams.get('query');

    const searchRes = Filter.recruitingListByQuery(query);

    return (
        <div className="search__container">
            <Header/>

            <div className="search__title">
                <h1>{query}</h1>
            </div>

            <div className="empty-space__40"></div>

            <SearchCompany/>

            <div className="empty-space__50"></div>

            <SearchPosition recruitingList={searchRes}/>

        </div>
    )
}

export default Search;