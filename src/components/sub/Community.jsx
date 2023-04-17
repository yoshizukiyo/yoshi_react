import Layout from '../common/Layout';
import { useRef, useState, useEffect } from 'react';

function Community() {
	const input = useRef(null);
	const textarea = useRef(null);
	const [Posts, setPosts] = useState([]);
	const [Allowed, setAllowed] = useState(true);

	const resetForm = () => {
		input.current.value = '';
		textarea.current.value = '';
	};

	const createPost = () => {
		if (!input.current.value.trim() || !textarea.current.value.trim()) {
			resetForm();
			return alert('제목과 본문을 모두 입력하세요.');
		}
		setPosts([{ title: input.current.value, content: textarea.current.value }, ...Posts]);
		resetForm();
	};

	const deletePost = (delIndex) => {
		//삭제될 글의 순번이 delndex로 전달됨
		//Posts배열을 반복돌면서 현재 반복도는 순번과 삭제할 delIndex의 순번이 같지 않은 요소의 값만 배열로 deep copy해서 리턴
		//그렇게 리턴된 배열값을 setPosts로 기존 Posts스테이트에 저장
		if (!window.confirm('해당 게시물을 삭제하겠습니다?')) return;
		setPosts(Posts.filter((_, idx) => idx !== delIndex));
	};

	//post 수정모드 변경함수
	const enableUpdate = (editIndex) => {
		if (!Allowed) return;
		setAllowed(false);

		setPosts(
			Posts.map((post, postIndex) => {
				if (postIndex === editIndex) post.enableUpdate = true;
				return post;
			})
		);
	};

	//post 출력모드 변경함
	const disableUpdate = (editIndex) => {
		setPosts(
			Posts.map((post, postIndex) => {
				if (postIndex === editIndex) post.enableUpdate = false;
				return post;
			})
		);
		setAllowed(true);
	};

	useEffect(() => {
		console.log(Posts);
	}, [Posts]);

	return (
		<Layout name={'Community'}>
			<div className='inputBox'>
				<input type='text' placeholder='제목을 입력하세요' ref={input} />
				<br />
				<textarea cols='30' rows='3' placeholder='본문을 입력하세요' ref={textarea}></textarea>
				<br />

				<nav className='btnSet'>
					<button onClick={resetForm}>cancel</button>
					<button onClick={createPost}>write</button>
				</nav>
			</div>

			<div className='showBox'>
				{Posts.map((post, idx) => {
					return (
						<article key={idx}>
							{post.enableUpdate ? (
								//수정모드 렌더링
								<>
									<div className='txt'>
										<input type='text' defaultValue={post.title} />
										<br />
										<textarea cols='30' rows='3' defaultValue={post.content}></textarea>
									</div>

									<nav className='btnSet'>
										<button onClick={() => disableUpdate(idx)}>CANCEL</button>
										<button>UPDATE</button>
									</nav>
								</>
							) : (
								//출력모드 렌더링
								<>
									<div className='txt'>
										<h2>{post.title}</h2>
										<p>{post.content}</p>
									</div>
									<nav className='btnSet'>
										<button onClick={() => enableUpdate(idx)}>EDIT</button>
										<button onClick={() => deletePost(idx)}>DELETE</button>
									</nav>
								</>
							)}
						</article>
					);
				})}
			</div>
		</Layout>
	);
}

export default Community;
