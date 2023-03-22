import { useState } from 'react';

function App12() {
	//비구조화할당으로 반환되는 첫 번째 값 (state값), 두 번째 값 (state변경함수)
	//기존의 state값은 state변경함수로 변경해야지만 컴포넌트가 재호출됨 (화면이 재랜더링됨)
	let [Data, setData] = useState('변경전');

	//참조형 자료로 state생성
	const [Colors, setColors] = useState(['red', 'green', 'blue']);

	return (
		<>
			<div className='wrap'>
				<button onClick={() => setData('변경후')}>{Data}</button>
				<button
					onClick={() => {
						//전개연산자로 기존의 배열값을 Deep Copy
						//리액트에서 state변경함수로 변경할 값이 참조형 자료면 무조건 전개연산자로 해당 값을 완전복사한 다음에 변경처리
						//불변성이 유지된 상태에서 state값이 변경되었으므로 화면이 재랜더링 됨
						const newColors = [...Colors];
						newColors[0] = 'hotpink';
						setColors(newColors);
					}}>
					참조형 자료 state변경
				</button>
			</div>

			<ul>
				{Colors.map((color, idx) => {
					return <li key={idx}>{color}</li>;
				})}
			</ul>
		</>
	);
}
export default App12;
/*
	State (상태값)
	- 리액트에서 컴포넌트의 화면 출력(rendering)을 담당하는 중요 정보값을 담는 그릇
	- 컴포넌트안에서 state값이 변경되면 해당 컴포넌트 화면이 자동으로 재랜더링됨 (함수가 재호출)
	- state에 담기는 정보값이 원시형 자료인 경우에는 해당 값을 바꾸면 바로 재랜더링 됨
	- state에 담기는 정보값이 참조형 자료인 경우에는 해당 값의 불변성을 유지하면서 변경해야지 재랜더링 됨
	- 리액트에서 state에 담기는 정보값을 불변성이 유지가 되어야지 이전 화면 대비 변경점을 인지해서 화면을 갱신
	- state값을 변경할때에는 state전용 변경함수를 통해서만 변경가능

	hooks 
	- 리액트 16버전부터 새롭게 추가된 리액트 전용 편의기능
	- hook이 나오면서 부터 리액트의 작업방식이 기존 클래스형 방식에서 함수형 방식으로 변경됨
	- 기존의 클래스형 방식에서는 state를 변경, 혹은 생명주기 관련된 내용을 일일이 클래스안쪽에서 직접 로직을 구현해서 처리
	- 새로운 hook방식의 함수형으로 넘어오면서부터 직접 번거롭게 구현해야 되는 로직들을 hook을 통해서 간소화됨

	hook 3대장 (useState, useEffect, useRef) (useMemo, memo, useCallback, forwardRef)
	useState - 컴포넌트 안에 state를 생성하고 state값을 변경할 수 있는 전용함수를 생성해주는 hook
	const [state, state변경함수] = useState(초기값);
*/
