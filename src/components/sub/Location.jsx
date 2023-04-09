import Layout from '../common/Layout';
import { useRef, useEffect, useState } from 'react';

function Location() {
	const [Traffic, setTraffic] = useState(false);
	const [Location, setLocation] = useState(null);
	const [Index, setIndex] = useState(0);
	const container = useRef(null);
	const { kakao } = window;
	const info = [
		{
			title: '삼성역 코엑스',
			latlng: new kakao.maps.LatLng(37.51100661425726, 127.06162026853143),
			imgSrc: `${process.env.PUBLIC_URL}/img/marker1.png`,
			imgSize: new kakao.maps.Size(232, 99),
			imgPos: { offset: new kakao.maps.Point(116, 99) },
		},
		{
			title: '넥슨 본사',
			latlng: new kakao.maps.LatLng(37.40211707077346, 127.10344953763003),
			imgSrc: `${process.env.PUBLIC_URL}/img/marker2.png`,
			imgSize: new kakao.maps.Size(232, 99),
			imgPos: { offset: new kakao.maps.Point(116, 99) },
		},
		{
			title: '서울 시청',
			latlng: new kakao.maps.LatLng(37.5662952, 126.9779451),
			imgSrc: `${process.env.PUBLIC_URL}/img/marker3.png`,
			imgSize: new kakao.maps.Size(232, 99),
			imgPos: { offset: new kakao.maps.Point(116, 99) },
		},
	];

	//위치정보 인스턴스를 인수로 전달해 마커 인스턴스 생성
	const marker = new kakao.maps.Marker({
		position: info[Index].latlng,
		image: new kakao.maps.MarkerImage(info[Index].imgSrc, info[Index].imgSize, info[Index].imgPos),
	});

	useEffect(() => {
		container.current.innerHTML = '';
		const mapInstance = new kakao.maps.Map(container.current, {
			center: info[Index].latlng,
			level: 3,
		});
		marker.setMap(mapInstance);
		mapInstance.addControl(new kakao.maps.MapTypeControl(), kakao.maps.ControlPosition.BOTTOMLEFT);
		mapInstance.addControl(new kakao.maps.ZoomControl(), kakao.maps.ControlPosition.LEFT);
		setLocation(mapInstance);
	}, [Index]);

	useEffect(() => {
		//첫 번째 랜더링 사이클시에는 Location값이 null이므로 (Optional Chaining을 활용해) 해당값이 있을때에만 메서드 호출
		Traffic
			? Location?.addOverlayMapTypeId(kakao.maps.MapTypeId.TRAFFIC)
			: Location?.removeOverlayMapTypeId(kakao.maps.MapTypeId.TRAFFIC);
	}, [Traffic]);

	return (
		<Layout name={'Location'}>
			<article id='map' ref={container}></article>

			<nav>
				<button onClick={() => setTraffic(!Traffic)}>
					{Traffic ? 'Traffic ON' : 'Traffic OFF'}
				</button>

				<ul>
					{info.map((el, idx) => {
						return (
							<li className={idx === Index ? 'on' : ''} key={idx} onClick={() => setIndex(idx)}>
								{el.title}
							</li>
						);
					})}
				</ul>
			</nav>
		</Layout>
	);
}

export default Location;
