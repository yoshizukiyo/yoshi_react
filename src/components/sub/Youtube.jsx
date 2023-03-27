import Layout from '../common/Layout';
import axios from 'axios';
import { useEffect, useState } from 'react';

function Youtube() {
	const [Vids, setVids] = useState([]);

	useEffect(() => {
		const key = 'AIzaSyAGpWq7AF0NYZp55xSg6n3WzYimiqnbLzo';
		const playlistId = 'PLHtvRFLN5v-W5bQjvyH8QTdQQhgflJ3nu';
		const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=${key}&maxResults=10&playlistId=${playlistId}`;

		axios.get(url).then((data) => {
			console.log(data.data.items);
			setVids(data.data.items);
		});
	}, []);

	return (
		<Layout name={'Youtube'}>
			{Vids.map((vid, idx) => {
				return (
					<article key={idx}>
						<img src={vid.snippet.thumbnails.standard.url} alt={vid.snippet.title} />
						<h2>{vid.snippet.title}</h2>
						<p>{vid.snippet.description}</p>
					</article>
				);
			})}
		</Layout>
	);
}

export default Youtube;
