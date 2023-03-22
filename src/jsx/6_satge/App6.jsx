/*
	forEach : 유사배열, 순수배열 모두 반복 가능 / 반복기능만 있음
	map : 순수배열만 반복가능 / 복사기능 (배열을 반복을 돌면서 원본을 복사한 복사본을 생성)

	불변성 (immutable)
	- 참조형 자료의 경우는 실제 변수에 값자체가 저장되는 것이 아닌 참조 위치값이 저장되므로
	- 배열을 변수에 저장하고 또다른 변수에 값을 할당했을때 배열자체가 복사되는게 아니라 참조주소만 복사가됨
	- 리액트는 기본적으로 기존돔과 가상돔을 메모리상에 빠르게 비교해서 바뀐 부분을 변경하기 때문에
	- 리액트에서 관리하는 데이타는 원본과 복사본 모두 있어야함
	- 이때 참조형 자료를 무조건 값까지 복사해서 관리 (deep copy)
	- 리액트에서 배열을 반복돌며 가상돔을 생성할때는 무조건 map사용 (중요)
*/

function App6() {
	const colors = ['aqua', 'orange', 'lightgreen', 'hotpink', 'cornflowerblue'];

	return (
		<div className='wrap'>
			<ul>
				{colors.map((color, idx) => {
					// jsx안쪽에서 map으로 반복 생성되는 가상돔요소는 무조건 key로 고유값을 지정해줌
					// 미션 - 해당의 글자색을 반복도는 배열의 색상으로 적용
					return (
						<li key={idx} style={{ color: color }}>
							{color}
						</li>
					);
				})}
			</ul>
		</div>
	);
}

export default App6;
