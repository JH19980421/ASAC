import React from "react";
import SocialLink from "./SocialLink";
import "../Main.css";
import "./SearchDetail.css";
import { useLocation } from "react-router-dom";
import Search from "./Search";
import dummy from "../data/SearchData.json";
import { useState } from "react";

const SearchDetail = () => {
  const location = useLocation();
  const filtering = location.state.filtering;

  return (
    <>
      <div className="SearchDetail">
        <div class="SearchInputBox">
          <button class="SearchInput">{filtering}</button>
        </div>
        <div class="SearchContentBox">
          <div class="SearchContentJob">
            <h2>
              연관 직무<span>3</span>
            </h2>

            <div class="SearchContentCategory">
              {dummy.SearchTitle.filter((content) =>
                content.title.toUpperCase().includes(filtering.toUpperCase())
              ).map((content) => (
                <button class="CategoryName">{content.title}</button>
              ))}
            </div>
          </div>
          <div class="SearchContentCompany">
            <h2>
              회사<span> 102</span>
            </h2>
            <div class="SearchContentCategory">
              {dummy.SearchContent.filter((item) =>
                item.title.toUpperCase().includes(filtering.toUpperCase())
              ).map((item) => (
                <a href="#" class="CompanyItem">
                  <div class="CompanyItem_left">
                    <div class="CompanyItem_left_img">
                      <img src={item.img} />
                    </div>
                    <div class="CompanyItem_left_title">
                      <h5>{item.title}</h5>
                      <h6>{item.category}</h6>
                    </div>
                    <button class="CompanyItem_right">팔로우</button>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchDetail;
