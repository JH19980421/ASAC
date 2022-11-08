import React from "react";
import "./Search.css";
import SearchDetail from "./SearchDetail";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="Search">
        <div class="SearchBox">
          <input
            className="SearchInputBoxContent"
            placeholder="#태그, 회사, 포지션 검색"
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                navigate("../searchdetail", {
                  state: { filtering: e.target.value },
                });
              }
            }}
          ></input>
          <svg
            xmlns="https://www.w3.org/2000/svg"
            xmlnsXlink="https://www.w3.org/1999/xlink"
            width="18"
            height="18"
            viewBox="0 0 18 18"
            class="SearchInputBar"
          >
            <defs>
              <path
                id="qt2dnsql4a"
                d="M15.727 17.273a.563.563 0 10.796-.796l-4.875-4.875-.19-.165a.563.563 0 00-.764.028 5.063 5.063 0 111.261-2.068.562.562 0 101.073.338 6.188 6.188 0 10-1.943 2.894l4.642 4.644z"
              ></path>
            </defs>
            <g fill="none" fill-rule="evenodd">
              <use
                fill="#333"
                fill-rule="nonzero"
                stroke="#333"
                stroke-width=".3"
                xlinkHref="#qt2dnsql4a"
              ></use>
            </g>
          </svg>

          <div className="SearchBoxContainer">
            <div className="SearchBoxTitle">
              <h4>추천태그로 이동해보세요</h4>
              <a href="/tag_search" class="goCompanyTag">
                기업태그 홈 이동하기
                <svg width="12" height="12" viewBox="0 0 12 12">
                  <path
                    fill="currentColor"
                    d="M4.22 9.72a.75.75 0 001.06 1.06l4.25-4.25a.75.75 0 000-1.06L5.28 1.22a.75.75 0 00-1.06 1.06L7.94 6 4.22 9.72z"
                  ></path>
                </svg>
              </a>
            </div>
            <div className="SearchBoxContent">
              <button>#운동비</button>
              <button>#연봉상위2~5%</button>
              <button>#스톡옵션</button>
              <button>#스타트업</button>
              <button>#퇴사율5%이하</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Search;
