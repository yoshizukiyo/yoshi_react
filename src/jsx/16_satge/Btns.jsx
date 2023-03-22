import { useState } from 'react';

function Btns({ frame, len }) {
	let [Num, setNum] = useState(0);
	const moveCard = (count) => {
		setNum(count);
		frame.current.style.transform = `rotate(${(360 / len) * Num}deg)`;
	};

	return (
		<>
			<button className='prev' onClick={() => moveCard(++Num)}>
				prev
			</button>

			<button className='next' onClick={() => moveCard(--Num)}>
				next
			</button>
		</>
	);
}

export default Btns;
