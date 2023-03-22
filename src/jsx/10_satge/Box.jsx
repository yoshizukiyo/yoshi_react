/*
function Box(props) {
	console.log(props);

	const boxStyle = {
		//props로 전달되는 특정값이 없을시 대신 적용할 값을 || 뒤에 지정
		width: props.wid || 50,
		height: props.ht || 50,
		backgroundColor: props.bg || 'gray',
		margin: 50,
	};

	return <div style={boxStyle}>Box</div>;
}
*/

function Box({ bg, wid, ht }) {
	const boxStyle = {
		//props로 전달되는 특정값이 없을시 대신 적용할 값을 || 뒤에 지정
		width: wid || 50,
		height: ht || 50,
		backgroundColor: bg || 'gray',
		margin: 50,
	};

	return <div style={boxStyle}>Box</div>;
}

export default Box;
