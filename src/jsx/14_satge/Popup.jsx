import { useEffect } from 'react';

function Popup() {
	const style = {
		width: 300,
		height: 200,
		background: '#222',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		fontSize: 40,
		color: '#fff',
		position: 'fixed',
		top: '50%',
		left: '50%',
		transform: 'translate(-50%,-50%)',
	};

	useEffect(() => {
		console.log('popup생성');

		//clean-up함수
		//해당 컴포넌트가 unmount될때 한번만 실행됨
		return () => {
			console.log('popup 소멸');
		};
	}, []);

	return <aside style={style}>Popup</aside>;
}

export default Popup;

/*
  컴포넌트 소멸때 주로 사용하는 예시
  1- 특정 페이지에서만 동작해야 되는 윈도우 객체의 이벤트 제거시
  2- 팝업생성시 스크롤 기능 없애고, 팝업시 스크롤 기능 다시 활성화 시킬때
*/
