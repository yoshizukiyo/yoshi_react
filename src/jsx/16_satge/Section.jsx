import Card from './Card';

function Section({ frame, arr }) {
	return (
		<section ref={frame}>
			{arr.map((data, idx) => {
				return <Card key={idx} data={data} len={arr.length} idx={idx} />;
			})}
		</section>
	);
}

export default Section;
