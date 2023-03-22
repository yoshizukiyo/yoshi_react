//대입형 함수로도 컴포넌트 함수 생성가능
/*
const Section = () => {
	return (
		<section>
			<h1>section</h1>
		</section>
	);
};
*/
//위의 함수에서 중괄호와 return문이 생략된 형태
const Section = () => (
	<section>
		<h1>section</h1>
	</section>
);

export default Section;
