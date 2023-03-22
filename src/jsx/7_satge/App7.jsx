/*
	삼항연산자 -  조건식 ? 조건식이 참일떄 실행될 구문 : 조건식이 거짓일때 실행될 구문
	&&연산자 - 조건식 && 조건식이 참일때만 실행 (삼항 연산자 축약형)
*/

function App7() {
	let isPop = true;

	return (
		<div className='wrap'>
			<div className='box'>컨텐츠</div>
			{/* {isPop ? <aside>팝업</aside> : null} */}
			{isPop && <aside>팝업</aside>}
		</div>
	);
}

export default App7;
