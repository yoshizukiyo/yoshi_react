function App3() {
	const handleClick = () => {
		console.log('click1');
		alert('click1');
	};
	const handleClick2 = (txt) => console.log(txt);

	return (
		<div className='wrap'>
			{/* 클릭 이벤트 발생시 함수가 호출되야하므로 함수의 정의형태로 등록 */}
			<button onClick={handleClick}>button1</button>
			{/* 클릭 이벤트 발생시 인수를 전달해야 되는 함수 호출시 wrapping 함수로 감쌈 (중괄호 생략가능) */}
			<button onClick={() => handleClick2('hello')}>button2</button>
			<button>button3</button>
			<button>button4</button>
		</div>
	);
}

export default App3;
