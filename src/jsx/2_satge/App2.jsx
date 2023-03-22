import Footer from './Footer';
import Header from './Header';
import Section from './Section';

function App2() {
	//한줄 주석
	return (
		//한줄 주석
		<>
			{/* JSX안쪽의 주석 */}
			<Header />
			<Section />
			<Footer />
		</>
	);
}
/*
	가상돔은 하나의 Chunk단위의 덩어리 요소만 리턴 가능
	복수개의 JSX 요소를 리턴하기 위해서는 wrapping tag를 감싸서 하나의 chunk로 감싸줌
	만약 불필요한 부모태그를 생성하고 싶지 않다면 <></>형태의 Fragment로 감싸줌
	JSX 안쪾에서 연산이 필요한 부분은 {}로 감싸줘야함
*/

export default App2;
