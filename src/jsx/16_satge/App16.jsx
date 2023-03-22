import Footer from './Footer';
import Header from './Header';
import Section from './Section';
import '../../scss/style.scss';
import Btns from './Btns';
import { useRef } from 'react';

function App16() {
	const arr = ['Blizzards', 'Calm', 'Dusty_Road', 'Escape', 'Payday', 'Retreat', 'Seasonal', 'Vespers'];
	const frame = useRef(null);

	return (
		<>
			<Header />
			<Section frame={frame} arr={arr} />
			<Footer />
			<Btns frame={frame} len={arr.length} />
		</>
	);
}

export default App16;
