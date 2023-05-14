import { memo } from 'react';
import { useSelector } from 'react-redux';

function Vids() {
	const { youtube } = useSelector((store) => store.youtubeReducer);
	console.log(youtube);

	return (
		<section id='vids' className='myScroll'>
			<h1>Youtube</h1>
			{youtube.map((vid, idx) => {
				if (idx >= 3) return null;

				return (
					<article key={idx}>
						<div className='pic'>
							<img src={vid.snippet.thumbnails.medium.url} alt={vid.snippet.title} />
						</div>
					</article>
				);
			})}
		</section>
	);
}

export default memo(Vids);
