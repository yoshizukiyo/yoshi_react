import { memo, useMemo } from 'react';
import { isEqual } from 'lodash';

//useMemo: 특정함수를 내부적으로 직접 호출해서 그에따라 리턴되는 연산값 자체를 메모이제이션해서 재활용

function Child(props) {
	console.log('child');

	const heavyWork = useMemo(() => {
		let num = 0;

		//5억번 반복
		for (let i = 0; i < 500000000; i++) {
			num++;
		}
		return num;
	}, []);

	return (
		<div>
			<h1>Child : {props.Counter}</h1>
			{/* useMemo자체가 이미 함수를 호출한뒤의 결과값을 담아서 메모이제이션 처리했기 때문에 heayWork를 호출할 필요없이 바로 활용 가능 */}
			<h2>{heavyWork}</h2>
			<button onClick={props.updateCounter}>update</button>
		</div>
	);
}

export default memo(Child, isEqual);

/*
  최종정리
  memo: 컴포넌트 자체를 메모이제이션
  - 쓰는 이유: 부모컴포넌트가 호출될 때, 불필요하게 자식 컴포넌트가 반복 호출되는 것을 막기 위해

  useCallback: 함수 자체를 메모이제이션
  - 쓰는 이유: memo된 컴포넌트에 props로 함수가 전달될 때, 해당 함수 자체를 메모이제이션해서 재랜더링 되는 것을 방지
  - 쓰는 이유2: useEffect안쪽에서 특정 함수가 반복 호출될때 해당 함수를 메모이제이션 해서 성능향상

  useMemo: 함수의 리턴값을 메모이제이션
  - 쓰는 이유: 특정 컴포넌트가 자주 재랜더링될때 내부적으로 무선연산을 통해서 같은 값을 반환하는 경우 해당 반환값 자체를 메모이제이션 처리
  - 컴포넌트 자체의 재랜더링을 막는게 아닌, 불가피하게 자주 재랜더링 될때, 무거운 연산처리를 반복하지 않기 위함



*/
