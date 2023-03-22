// import pic1 from './img/pic1.jpg';
// import pic2 from './img/pic2.jpg';
// import pic3 from './img/pic3.jpg';
/*
	컴포넌트 안쪽에 불러와야 되는 이미지들이 많은경우 일일 import로 불러올수도 있지만
	이미지들을 public폴더 안쪽에 넣어놓고
	public폴더까지의 절대경로를 process.env.PUBLIC_URL을 이용해서 호출
*/

function App8() {
	const imgs = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg'];
	return (
		<>
			{imgs.map((pic, idx) => {
				return <img key={idx} src={`${process.env.PUBLIC_URL}/img/${pic}`} alt={pic} />;
			})}
		</>
	);
}

export default App8;
