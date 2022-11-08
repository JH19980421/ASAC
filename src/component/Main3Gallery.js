import React from "react";

function Main3Gallery(props) {
  return (
    <div className="Main3Gallery">
      <a href={props.Link}>
        <div class="aaaaa">
          <img src={props.Url} />
          <div class="main3_gal_svg">
            <span class="main3_gal_span">{props.Title1}</span>
          </div>
          <h3 class="MainGallery_h3">{props.Content}</h3>
        </div>
      </a>
    </div>
  );
}

export default Main3Gallery;
