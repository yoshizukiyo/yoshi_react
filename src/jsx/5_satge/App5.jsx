const box = {
	width: 300,
	height: 300,
	backgroundColor: 'gray',
};

//미션1 - box클릭시 box의 배경색을 aqua로 변경
//미션2 - 배경색을 변경하는 함수를 미리 선언하고 클릭 이벤트 발생시 인수로 변경하고자 하는 배경색이 전달되도록 처리

function App5() {
	const changeBg = (evt, bg) => {
		evt.target.style.backgroundColor = bg;
	};

	return (
		<div className='wrap'>
			{/* box가상돔 클릭시 e객체를 wrapping함수로 전달받고 그 안에서 changeBg함수 호출시 e객체와 변경할 색상값을 전달 */}
			<div className='box' style={box} onClick={(e) => changeBg(e, 'hotpink')}></div>
		</div>
	);
}

export default App5;
