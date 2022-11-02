import React from 'react';
import { NaverMap, RenderAfterNavermapsLoaded, Marker } from 'react-naver-maps';

const Map = () => {
	const { naver } = window;
	return (
		<RenderAfterNavermapsLoaded
			ncpClientId={'3nf2g8sw6y'}
			error={<p>Maps Load Error</p>}
			loading={<p>Maps Loading...</p>}
		>
			<NaverMap
				mapDivId="map"
				style={{
					width: '100%',
					height: '50vh',
				}}
				defaultCenter={{
					lat: 37.5596507,
					lng: 126.9687989,
				}}
				defaultZoom={10}
				zoomControl={true}
			>
				<Marker
					position={{
						lat: 37.5596507,
						lng: 126.9687989,
					}}
				/>
			</NaverMap>
		</RenderAfterNavermapsLoaded>
	);
};

export default Map;
