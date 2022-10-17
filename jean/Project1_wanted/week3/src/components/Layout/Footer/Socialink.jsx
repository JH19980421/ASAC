let imgs = [
    { href : "https://www.instagram.com/wantedjobs.kr/"   , src: "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Fsocial_instagram.png&w=20&q=100", alt :"instagram"} ,
    { href : "https://www.youtube.com/channel/UC0tGZ6MqieGG2m5lA5PeQsw"    , src: "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Fsocial_youtube.png&w=25&q=100", alt :"youtube"} ,
    { href :  "https://www.facebook.com/wantedkr"  , src: "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Fsocial_facebook.png&w=20&q=100", alt :"facebook"},
  { href : "https://blog.naver.com/wantedlab"   , src: "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Fsocial_blog.png&w=20&q=100", alt :"blog"} ,
  { href : "https://pf.kakao.com/_XqCIxl"    , src: "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Fsocial_kakao.png&w=19&q=100", alt :"kakao"} ,
  { href :  "https://post.naver.com/my.nhn?memberNo=18284175" , src: "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Fsocial_post.png&w=20&q=100", alt :"post"} ,
  { href :  "https://apps.apple.com/kr/app/id1074569961" , src: "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Fsocial_apple.png&w=17&q=100", alt :"apple"} ,
];
  


const Socialink = (props) => {



    return (
        imgs.map(img => 
            <a href={img.href} class="" aria-label="" target="_blank" rel="noopener noreferrer">
                <img src={img.src} alt={img.alt}/></a> 
        )
    )
}

export default Socialink