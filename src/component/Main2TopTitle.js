import React from "react";

function Main2TopTitle(props) {
  return (
    <div className="Main2TopTitle">
      <div class="BannerHeader_BannerHeader__vTadS BannerHeader_BannerHeader__justify-space-between__5NmEy">
        <button
          type="button"
          class="ArrowButton_ArrowButton__zK5U5"
          disabled=""
        >
          <span class="SvgIcon_SvgIcon__root__8vwon">
            <svg
              class="SvgIcon_SvgIcon__root__svg__DKYBi"
              style={{ fill: "lightgray" }}
              id="svg_article1"
              viewBox="0 0 18 18"
            >
              <path d="m6.045 9 5.978-5.977a.563.563 0 1 0-.796-.796L4.852 8.602a.562.562 0 0 0 0 .796l6.375 6.375a.563.563 0 0 0 .796-.796L6.045 9z"></path>
            </svg>
          </span>
        </button>
        <div class="Title_Title__nD0Q6">
          <div class="Title_Title__Wrapper__Jbb7_">
            <h2 class="Title_Title__Title__iETTN">{props.Title}</h2>
          </div>
          <a class="Title_Title__subtitle__jPQH4" href={props.Link}>
            {props.Content}
            <span class="SvgIcon_SvgIcon__root__8vwon Title_Title__subtitle__icon__Hrpwd">
              <svg
                class="SvgIcon_SvgIcon__root__svg__DKYBi"
                id="article_svg"
                style={{ fill: "#767676" }}
                viewBox="0 0 19 19"
              >
                <path
                  d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.
                            562.562 0 1 0-.796.796L11.955 9z"
                ></path>
              </svg>
            </span>
          </a>
        </div>
        <button type="button" class="ArrowButton_ArrowButton__zK5U5">
          <span class="SvgIcon_SvgIcon__root__8vwon">
            <svg
              class="SvgIcon_SvgIcon__root__svg__DKYBi"
              style={{ fill: "lightgray" }}
              id="svg_article2"
              viewBox="0 0 18 18"
            >
              <path
                d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.
                        562.562 0 1 0-.796.796L11.955 9z"
              ></path>
            </svg>
          </span>
        </button>
      </div>
    </div>
  );
}

export default Main2TopTitle;
