import React from "react";

function Video(props) {
  return (
    <li className="Video">
      <a target="_blank" href={props.VideoAddress}>
        <div class="CareerContentCard_CareerContentCard__Thumbnail__vziSn">
          <img src={props.ImgAddress} />
        </div>
        <p class="CareerContentCard_CareerContentCard_p1">{props.P1}</p>
        <p class="CareerContentCard_CareerContentCard_p2">{props.P2}</p>
        <div class="CareerContentCard_CareerContentCard_bottom">
          <img src={props.Img2Adress} />
          <p>{props.P3}</p>
        </div>
      </a>
    </li>
  );
}

export default Video;
