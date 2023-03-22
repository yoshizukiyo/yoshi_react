function App4() {
	const fontStyle = {
		color: 'aqua',
		fontSize: 60,
		fontWeight: 'normal',
	};

	return (
		<div className='wrap'>
			{/* 미리 스타일 객체를 변수에 선언후 가상돔에 연결 */}
			<h1 style={fontStyle}>Title1</h1>

			{/* 가상돔에 직접 객체 리터럴 형식으로 스타일 적용가능 */}
			<h1 style={{ color: 'orange', fontSize: 30 }}>Title2</h1>
		</div>
	);
}

export default App4;
