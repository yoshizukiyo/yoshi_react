import { useEffect } from 'react';

function Modal({ setOpen, children }) {
	useEffect(() => {
		document.body.style.overflow = 'hidden';

		return () => {
			document.body.style.overflow = 'auto';
		};
	}, []);

	return (
		<aside className='modal'>
			<div className='con'>{children}</div>
			<span className='close' onClick={() => setOpen(false)}>
				Close
			</span>
		</aside>
	);
}

export default Modal;
