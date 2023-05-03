import Child from './Child';
import { useState, useCallback } from 'react';

function App() {
	console.log('parent');
	const [Counter, setCounter] = useState(0);
	const [Input, setInput] = useState('');
	const colors = ['red', 'green', 'blue'];
	const updateCounter = useCallback(() => setCounter(Counter + 1), [Counter]);

	return (
		<div>
			<h1>Praent</h1>
			<button onClick={() => setCounter(Counter + 1)}>plus</button>
			<p>{Counter}</p>
			<input type='text' value={Input} onChange={(e) => setInput(e.target.value)} />

			<Child Counter={Counter} colors={colors} updateCounter={updateCounter} />
		</div>
	);
}

export default App;
