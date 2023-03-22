import { useState, useRef } from 'react';

const boxStyle = {
	width: 200,
	height: 200,
	backgroundColor: 'aqua',
	margin: 50,
	transitionDuration: '0.5s',
};

function App15() {
	let [Num, setNum] = useState(0);
	const deg = 45;
	const box = useRef(null);

	return (
		<div className='wrap'>
			<button
				onClick={() => {
					//전위증감 연산자로 자기자신의 초기값에 연산된값을 바로 재할당해서 활용
					//해당 사이클에서 바로 값이 변경되기 때문에 변수선언을 재할당이 가능한 let방식으로 선언
					setNum(--Num);
					console.log(Num * deg);
					box.current.style.transform = `rotate(${Num * deg}deg)`;
				}}>
				left
			</button>
			<button
				onClick={() => {
					setNum(++Num);
					console.log(Num * deg);
					box.current.style.transform = `rotate(${Num * deg}deg)`;
				}}>
				right
			</button>
			<p>{Num}</p>

			<article ref={box} style={boxStyle}></article>
		</div>
	);
}
export default App15;

/*
	useRef를 쓰는 사례
	1- 아직 realDOM으로 변경되지 않은 virtualDOM을 미리 객체에 담아서 참조
	2- 특정 값을 컴포넌트안에 저장을 할때 두가지 방법이 존재 (state에 저장, 일반 변수에 저장);
	state저장시 (값이 변경된상태로 다음 렌더링 사이클에서도 값이 유지가됨 - 해당값이 변경되면 해당 컴포넌트가 재호출되면서 화면이 재랜더링됨)
	특정값이 자주 바뀌면서 화면이 재랜더링 되더라도 유지가 되야되는 값이 있을때 해당 값을 state에 담으면 너무나도 많은 컴포넌트 재호출이 일어남
	그렇다고 해당 값을 일반 변수에 담으면 컴포넌트가 다른 요인에 재호출되었을때 변수에 담긴 값이 유지가 안됨
	이때 저 값을 useRef에 담아놓으면 useRef에 담긴값이 컴포넌트 재호출시에도 계속 유지가 되면서 해당 값이 변경되었을때 컴포넌트를 재 랜더링 시키지 않음
	"어떤값이 자주 변경이 되야하긴 하는데 해당 값이 변경될떄 컴포넌트를 재호출시키고 싶지 않을떄 useRef에 담으면 됨"


	const 변수 = useRef(초기값);
	- 변수에는 useRef의 초기값을 활용해서 빈 참조객체가 생성됨
	- 이때 해당 객체안에는 current라는 키값이 자동 생성되면서 초기값이 담김
	- 이렇게 만들어든 빈 참조객체를 원하는 가상돔 요소에 ref속성을 지정해서 참조가능
	- 참조된 가상요소는 이벤트발생시 자유롭게 호출가능
	- useRef는 보통 이벤트 연결시 제어해야 되는 가상돔을 참조할때 주로 쓰임

	사용순서
	1- 변수에 useRef(null)을 대입해서 일단은 빈 참조객체 생성
	2- 원하는 가상돔 요소에 ref={참조객체} 로 연결
	3- 참조객체.current 형식으로 가상돔 요소를 자유롭게 불러와서 호출
*/

/*
	전위연산자, 후위연산자 차이점
	let num = 0;

	num++(후위증감연산자) vs ++num(전위증감연산자)
	후위증감연산자 : 초기값을 먼저활용하고 그다음에 값을 증가
	전위증감연산자 : 초기값을 먼저 연산해서 활용

*/
