function App() {
	return <></>;
}
export default App;

/*
	Spread Operator (전개 연산자)
	불변성 (immutable)
	- 특정 데이터를 변경시 원본을 수정(훼손)하지 않으면서 새로운 복사본을 만들어서 수정
	- 원본과 수정본이 같이 있는 불변성 상태를 유지해야지 원본대비 변경된 부분을 비교분석 가능

	참조형 자료 (배열, 객체)
	- 참조형 자료를 새로운 변수에 옮겨담으면 자료값 자체가 복사되는 것이 아님
	- 해당 자료의 참조 주소만 복사되서 변수에 옮겨 담아짐 (shallow copy : 얕은 복사)
	- 새로운 변수를 계속 생성해서 참조주소값만 복사해봤자 해당 참조주소가 가리키고 있는 원본값을 그대로 유지
	- 새로운 변수에 복사된값을 변경하면 원본도 같이 변경됨 (원본 데이터의 훼손 - 불변성 유지가 안됨)

	전개연산자
	- 참조형 자료를 실제 Deep Copy해서 원본은 그대로 유지하면서 새로운 복사본을 만드는 깊은 복사처리
*/

/*
const arr1 = ['red', 'green', 'blue'];
const arr2 = arr1;
arr2[0] = 'violet';
//arr2를 변경하면 arr1도 같이 바뀌며 불변성 유지가 안됨
console.log('arr1', arr1);
console.log('arr2', arr2);
*/
const arr1 = ['red', 'green', 'blue'];
const arr2 = [...arr1, 'orange'];
arr2[0] = 'violet';

// console.log('arr1', arr1);
// console.log('arr2', arr2);

//전개연산자를 이용해서 복수개의 객체를 합쳐서 새로운 객체를 반환
const info = {
	name: 'David',
	age: 30,
	address: 'Seoul',
};
const newInfo = {
	address: 'Busan',
};
//객체를 합칠때에는 변경될 property가 있는 객체를 뒤에 배치
const resultInfo = { ...info, ...newInfo };
// console.log('resultInfo', resultInfo);
// console.log('info', info);
