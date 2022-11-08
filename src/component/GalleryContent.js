import React from "react";

function GalleryContent(props) {
  return (
    <li className="GalleryContent">
      <img
        src={props.Url}
        class="Thumbnail_Thumbnail__image__NlEX0 undefined"
        loading="lazy"
      />
      <p class="CareerContentCard_CareerContentCard__Title__Tcz6Z">
        {props.P1}
      </p>
      <div class="CareerContentCard_info_info" style={{ textAlign: "center" }}>
        <p class="ArticleCard_ArticleCard__category__7pQaa">{props.P2}</p>
      </div>
    </li>
  );
}

export default GalleryContent;
