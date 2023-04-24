import { forwardRef, useImperativeHandle } from 'react';

/*
const Child = () => {
	return (
		<article>
			<h1>Child</h1>
		</article>
	);
};
*/

const Child = forwardRef((props, ref) => {
	useImperativeHandle(ref, () => {
		return { name: 'apple' };
	});

	return (
		<article>
			<h1>Child</h1>
		</article>
	);
});

export default Child;
