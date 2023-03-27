import { Route, Switch } from 'react-router-dom';

//common
import Footer from './components/common/Footer';
import Header from './components/common/Header';

//main
import News from './components/main/News';
import Pics from './components/main/Pics';
import Vids from './components/main/Vids';
import Visual from './components/main/Visual';

//sub
import Community from './components/sub/Community';
import Department from './components/sub/Department';
import Gallery from './components/sub/Gallery';
import Location from './components/sub/Location';
import Members from './components/sub/Members';
import Youtube from './components/sub/Youtube';

import './scss/style.scss';

function App() {
	return (
		<>
			{/* Switch는 내부 라우터 경로에서 더 구체적인 라우터를 채택하고 나머지는 무시하거나 예외로 처리 */}
			<Switch>
				<Route exact path='/'>
					{/* 메인전용 헤더 */}
					<Header type={'main'} />
					<Visual />
					<News />
					<Pics />
					<Vids />
				</Route>

				<Route path='/'>
					{/* 서브전용 헤더 */}
					<Header type={'sub'} />
				</Route>
			</Switch>

			<Route path='/department'>
				<Department />
			</Route>

			<Route path='/community'>
				<Community />
			</Route>

			<Route path='/gallery'>
				<Gallery />
			</Route>

			<Route path='/youtube'>
				<Youtube />
			</Route>

			<Route path='/location'>
				<Location />
			</Route>

			<Route path='/members'>
				<Members />
			</Route>

			<Footer />
		</>
	);
}

export default App;
