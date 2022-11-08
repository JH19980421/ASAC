import React from "react";
import { Link } from "react-router-dom";
import dummy from "../data/Gallery.json";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const IncruitGallery = (gal) => {
  const navigate = useNavigate();
  const gallery_click = (e) => {
    const list = [e];
    alert("해당페이지를 열어볼까요?");
    navigate(`/detail/${e}`);
  };

  const number = `${gal.text5}`;
  const number2 = number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  return (
    <li class="gallery_li">
      <div class="gallery_box" onClick={() => gallery_click(`${gal.num}`)}>
        <header class="gallery_header">
          <img
            src={gal.img}
            style={{ width: "250px", height: "187.5px" }}
            alt="사진"
          />
          <button class="gallery_button">
            <svg
              width="22"
              height="22"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="https://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M3.58065 1C3.25997 1 3 1.26206 3 1.58533V16.4138C3 16.8632 3.48164 17.145 3.86873 16.922L9.00004 13.9662L14.1313 16.922C14.5184 17.145 15 16.8632 15 16.4138V1.58533C15 1.26206 14.74 1 14.4194 1H9.00004H3.58065ZM8.71195 12.7838C8.89046 12.681 9.10961 12.681 9.28812 12.7838L13.8387 15.4052V2.17067H9.00004H4.1613V15.4052L8.71195 12.7838Z"
                fill="white"
              ></path>
              <path
                d="M9.28812 12.7838C9.10961 12.681 8.89046 12.681 8.71195 12.7838L4.1613 15.4052V2.17067H9.00004H13.8387V15.4052L9.28812 12.7838Z"
                fill="black"
                fill-opacity="0.25"
              ></path>
            </svg>
          </button>
        </header>
        <div class="textbox">
          <div class="text1">{gal.text1}</div>
          <div class="text2">{gal.text2}</div>
          <div class="text3">{gal.text3}</div>
          <div class="text4">{gal.text4}</div>
          <div class="text5">채용보상금 {number2}원</div>
        </div>
      </div>
    </li>
  );
};

export default IncruitGallery;
