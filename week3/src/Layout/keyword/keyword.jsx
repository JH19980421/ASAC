import React from 'react';
import { Link } from 'react-router-dom';
import './keyword.css';

function Keyword(props) {
	console.log(props.putKey);
	return (
		<>
			{props.putKey.map((dbs) => (
				<div className="area_keywords">
					<Link to={`/job/${dbs.id}`}>
						<img
							style={{
								width: '250px',
								height: '150px',
							}}
							key={dbs.id}
							className="keywords_img"
							src={dbs.imgSrc}
							alt="image"
						/>
					</Link>
					<button class="bookmarkBtn" type="button">
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
					<p key={dbs.id} className="list_name">
						{dbs.pName}
					</p>
					<p key={dbs.id} className="list_describe">
						{dbs.pDescribe}
					</p>
				</div>
			))}
		</>
	);
}

export default Keyword;
