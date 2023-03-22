/*
	forEach vs map
	- forEach는 반복 기능만 있음
	- map은 반복기능 외에 해당 값을 복사해서 반환 (불변성 - 특정값을 변경할때 원본을 훼손시키지 않으면서 복사해서 수정)
	- 리액트에서는 불변성 유지를 위해 map으로 반복처리
	- 리액트에서 불변성을 유지해야 하는 이유는 변형이 일어나기 전의 원본과 변형이 일어난후의 복사본을 모두 가지고 있어야
	메모리 상에서 빠르게 변경된 부분을 탐색하기 위함
*/

const colors = ['red', 'green', 'blue'];

/*
const result = colors.forEach((data, idx) => {
	console.log(data);
	console.log(idx);
	return data;
});
*/
const result = colors.map((data, idx) => {
	console.log(data);
	console.log(idx);
	return data;
});
console.log(result);
result[0] = 'hotpink';
console.log(result);
console.log(colors);

function App9() {
	return <></>;
}

export default App9;
