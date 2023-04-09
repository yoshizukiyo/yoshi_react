import Header from '../common/Header';
import Visual from './Visual';
import News from './News';
import Pics from './Pics';
import Vids from './Vids';
import Btns from './Btns';

import { useState } from 'react';

function Main() {
	const [Scrolled, setScrolled] = useState(0);
	const [Pos, setPos] = useState([]);

	return (
		<main>
			<Header type={'main'} />
			<Visual />
			<News />
			<Pics Scrolled={Scrolled} pos={Pos[2]} />
			<Vids />
			<Btns setScrolled={setScrolled} setPos={setPos} />
		</main>
	);
}

export default Main;
