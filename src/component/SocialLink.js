import React from "react";

function SocialLink(props) {
  return (
    <a href={props.url} target="_blank" rel="noopener noreferrer">
      <img src={props.img} alt="instagram" />
    </a>
  );
}

export default SocialLink;
