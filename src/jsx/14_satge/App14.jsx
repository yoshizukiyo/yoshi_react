import Popup from './Popup';
import { useState } from 'react';

function App14() {
	const [Open, setOpen] = useState(false);
	return (
		<div className='wrap'>
			{/* <button onClick={() => setOpen(true)}>팝업열기</button>
			<button onClick={() => setOpen(false)}>팝업닫기</button> */}
			<button onClick={() => setOpen(!Open)}>{Open ? '팝업닫기' : '팝업열기'}</button>

			{Open && <Popup />}
		</div>
	);
}
export default App14;

//위의 버튼 하나를 가지고 버튼을 클릭할떄마다 팝업 생성, 제거를 토글 기능구현
//버튼의 내용도 팝업이 열려있으면 '팝업닫기'로 출력, 팝업이 닫혀있으면 '팝업열기'로 변경
