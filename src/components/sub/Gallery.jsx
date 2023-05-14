import Layout from '../common/Layout';
import Masonry from 'react-masonry-component';
import Modal from '../common/Modal';
import { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as names from '../../redux/actionType';

function Gallery() {
	const dispatch = useDispatch();
	const Items = useSelector((store) => store.flickrReducer.flickr);
	const modal = useRef(null);
	const frame = useRef(null);
	const input = useRef(null);
	const [Loading, setLoading] = useState(true);
	const [Confirm, setConfirm] = useState(false);
	const [Opt, setOpt] = useState({ type: 'user', user: '164021883@N04' });
	const [Index, setIndex] = useState(0);

	const showInterest = () => {
		//getFlickr({ type: 'interest' })
		//기존에 이벤트가 발생할때마다 컴포넌트에서 axios요청하던것을 saga가 대신하고 있기 때문에
		//saga단에 전달해야 되는 Opt값만 state로 변경
		setOpt({ type: 'interest' });
		setLoading(true);
		frame.current.classList.remove('on');
	};
	const showUser = (name) => {
		setOpt({ type: 'user', user: name });
		setLoading(true);
		frame.current.classList.remove('on');
	};
	const showSearch = () => {
		setConfirm(true);
		const result = input.current.value.trim();
		if (result === '') return alert('검색어를 입력해주세요.');
		setOpt({ type: 'search', tags: result });
		setLoading(true);
		frame.current.classList.remove('on');
		input.current.value = '';
	};

	useEffect(() => {
		//Opt값이 변경될때마다 dispatch로 리듀서에 데이터 변경요청을 보냄
		dispatch({ type: names.FLICKR.start, Opt });
	}, [Opt, dispatch]);

	useEffect(() => {
		//Search가 실행된 이후에만 호출되도록 Confirm 스테이트값 조건문에 추가
		if (Items.length === 0 && Confirm) {
			setLoading(false);
			frame.current.classList.add('on');
			//검색결과가 없으면 기존 초기 갤러리 출력
			setOpt({ type: 'user', user: '164021883@N04' });
			return alert('해당 검색어의 결과이미지가 없습니다.');
		}
		//반환된 결과 데이터값이 바뀔때마다 호출
		setTimeout(() => {
			setLoading(false);
			frame.current.classList.add('on');
		}, 1000);
	}, [Items, Confirm]);

	return (
		<>
			<Layout name={'Gallery'}>
				<div className='controls'>
					<div className='searchBox'>
						<input
							type='text'
							placeholder='검색어를 입력하세요.'
							ref={input}
							onKeyPress={(e) => e.key === 'Enter' && showSearch()}
						/>
						<button onClick={showSearch}>Search</button>
					</div>

					<nav>
						<button onClick={showInterest}>Interest Gallery</button>
						<button onClick={() => showUser('164021883@N04')}>My Gallery</button>
					</nav>
				</div>

				{Loading && (
					<img
						className='loader'
						src={`${process.env.PUBLIC_URL}/img/loading.gif`}
						alt='loading bar'
					/>
				)}

				<div className='frame' ref={frame}>
					<Masonry elementType={'div'} options={{ transitionDuration: '0.5s' }}>
						{Items.map((item, idx) => {
							return (
								<article key={idx}>
									<div className='inner'>
										<div
											className='pic'
											onClick={() => {
												modal.current.open();
												setIndex(idx);
											}}
										>
											<img
												src={`https://live.staticflickr.com/${item.server}/${item.id}_${item.secret}_m.jpg`}
												alt={item.title}
											/>
										</div>

										<h2>{item.title}</h2>

										<div className='profile'>
											<img
												src={`http://farm${item.farm}.staticflickr.com/${item.server}/buddyicons/${item.owner}.jpg`}
												alt={item.owner}
												onError={(e) => {
													e.target.setAttribute(
														'src',
														'https://www.flickr.com/images/buddyicon.gif'
													);
												}}
											/>
											<span onClick={(e) => showUser(e.target.innerText)}>{item.owner}</span>
										</div>
									</div>
								</article>
							);
						})}
					</Masonry>
				</div>
			</Layout>

			<Modal ref={modal}>
				<img
					src={`https://live.staticflickr.com/${Items[Index]?.server}/${Items[Index]?.id}_${Items[Index]?.secret}_b.jpg`}
					alt={Items[Index]?.title}
				/>
			</Modal>
		</>
	);
}

export default Gallery;
