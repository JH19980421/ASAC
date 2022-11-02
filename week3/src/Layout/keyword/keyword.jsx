import React from 'react';
import { Link } from 'react-router-dom';

function Keyword(props) {
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
							key={
								dbs.id
							}
							className="keywords_img"
							src={
								dbs.imgSrc
							}
							alt="image"
						/>
					</Link>
					<p
						key={dbs.id}
						className="list_name"
					>
						{dbs.pName}
					</p>
					<p
						key={dbs.id}
						className="list_describe"
					>
						{dbs.pDescribe}
					</p>
				</div>
			))}
		</>
	);
}

export default Keyword;
