import React from "react";

function Main4BottomBox(props){
    return(
        <div className="Main4BottomBox">
            <a class="main4_bottom_content_box_img" href={props.link}>
                <span class="main4_bottom_content_box_img_svg">
                    {props.svg}
                </span>
            </a>
            <a href={props.link} class="main4_bottom_content_box_content" >
                <span class="main4_button">{props.name}<span class="main4_bottom_button"><span class="main4_bottom_button_box">
                    <svg class="SvgIcon_SvgIcon__root__svg__DKYBi" viewBox="0 0 18 18"><path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z"></path></svg></span></span></span></a>
        </div>
    )

}


export default Main4BottomBox;