import axios from 'axios';

export const fetchYoutube = async () => {
	const key = 'AIzaSyAGpWq7AF0NYZp55xSg6n3WzYimiqnbLzo';
	const playlistId = 'PLHtvRFLN5v-W5bQjvyH8QTdQQhgflJ3nu';
	const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=${key}&maxResults=10&playlistId=${playlistId}`;
	return await axios.get(url);
};

export const fetchFlickr = async (opt) => {
	console.log(opt);
	const baseURL =
		'https://www.flickr.com/services/rest/?format=json&nojsoncallback=1&privacy_filter=1';
	const key = 'ae5dbef0587895ed38171fcda4afb648';
	const method_interest = 'flickr.interestingness.getList';
	const method_search = 'flickr.photos.search';
	const method_user = 'flickr.people.getPhotos';
	const num = 500;
	let url = '';

	if (opt.type === 'interest')
		url = `${baseURL}&api_key=${key}&method=${method_interest}&per_page=${num}`;
	if (opt.type === 'search')
		url = `${baseURL}&api_key=${key}&method=${method_search}&per_page=${num}&tags=${opt.tags}`;
	if (opt.type === 'user')
		url = `${baseURL}&api_key=${key}&method=${method_user}&per_page=${num}&user_id=${opt.user}`;

	return await axios.get(url);
};
