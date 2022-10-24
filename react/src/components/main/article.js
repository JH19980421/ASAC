import "../../css/main/article.css";

const articleItems = require('../../article.json');

let tagString;
let thisTag;

function Article() {
    return (
        <div className="article__container">
            {
                articleItems.map((item, idx) => (
                    tagString = '',
                    <div className="article__card">
                        <img src={item.imageUrl} alt="article"/>
                        <p className="article__card--title">{item.title}</p>
                        <p className="article__card--tag">
                            {
                                item.tags.forEach((tag) => (
                                    thisTag = JSON.stringify(tag.tag),
                                    tagString += '#'+thisTag.substring(1, thisTag.length-1)+' '
                                ))
                            }
                            {tagString}
                        </p>
                    </div>
                ))
            }
        </div>
    );
}

export default Article;