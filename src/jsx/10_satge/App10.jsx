import Box from './Box';

const student1 = {
	name: 'David',
	age: 20,
};

//destructuring (비구조화할당, 구조분해할당)
//const name = student1.name;
//const age = student1.age;
const { name, age } = student1;
console.log(name, age);

function App10() {
	return (
		<>
			{/* 부모에서 자식으로 특정 정보값을 넘기 */}
			<Box bg={'aqua'} wid={100} ht={100} />
			<Box bg={'hotpink'} wid={200} ht={200} />
			<Box />
		</>
	);
}

export default App10;

/*
	부모 컴포넌트에서 자식 컴포넌트 호출시 props로 데이터 전달가능
	리액트는 기본적으로 데이터가 부모에서 자식으로 전달됨 (단방향 데이터 바인딩)
*/
