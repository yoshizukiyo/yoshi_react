import { useState, useEffect } from 'react';

function App13() {
	const [Num, setNum] = useState(0);

	//의존성 배열이 비어있을떄
	useEffect(() => {
		//컴포넌트가 처음 마운트 되었을때 한번만 실행됨
		//실사례 1 - 화면이 랜더링되고 돔요소에 윈도우 객체에 이벤트 바인딩할때 (브라우저 리사이즈, 스크롤)
		//실사례 2 - 외부 API데이터를 요청해서 가져올때 (유튜브 API를 활용한 외부 데이터를 가져올때)
		console.log('컴포넌트 생성');
	}, []);

	//의존성 배열에 State가 등록되어 있을때
	useEffect(() => {
		//해당 State값이 변경될때에만 실행
		//실사례 1 - 로딩처리 (특정 데이터가 담길 State를 만들어 놓고 해당 값이 변경될때마다 로딩처리할때)
		console.log('Num State가 변경');
	}, [Num]);

	return (
		<div className='wrap'>
			<button onClick={() => setNum(Num + 1)}>숫자변경</button>
			<h1>{Num}</h1>
		</div>
	);
}
export default App13;

/*
	useEffect 
	- 컴포넌트의 생명주기마다 특정기능을 실행할 수 있게 해주는 hook 
	- life cycle: 생성(mount), 변경(state값 변경), 소멸(unmount)
	- useEffect(실행할함수, [의존성배열])
	- 의존성배열이 비어있으면 useEffect는 해당 컴포넌트가 처음 마운트되었을 때만 안쪽의 함수를 한번만 실행 (생성)
	- 의존성배열에 특정값(state)을 등록하면 해당 값이 변경될 때마다 실행됨 (변경)
	- useEffect의 실행함수 안쪽에서 만약 또다른 함수를 리턴하면 리턴되는 함수는 컴포넌트가 언마운트되었을때만 한번 실행 (소멸)
*/
