import Child from './Child';
import { useRef } from 'react';

function Parent() {
	const childEl = useRef(null);

	return (
		<section>
			<button onClick={() => console.log(childEl)}>참조객체 확인</button>
			<h1>Parent</h1>

			<Child ref={childEl} />
		</section>
	);
}

export default Parent;

/*
	가상돔 요소가 아닌 컴포넌트는 useRef로 참조 불가능
	
	forwardRef
	- 자식컴포넌트 자체를 참조해서 부모로 보내는 hook

	useImperativeHandle
	- 자식 컴포넌트 안쪽에서 특정 객체값을 부모로 전달해주는 hook
*/
