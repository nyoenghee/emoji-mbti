import '../src/scss/Style.scss'

function App() {
	return (
		<div className="section section-main">
			<div className='header'>

				<div className='inner'>
					<div className='__left'>이모지 스티커팩 성격 테스트</div>
					<div className='__right'>나의 성격 유형에 맞는 이모지 스티커팩은 무엇일까?</div>
				</div>
			</div>
			<div className='emojis'>
					<img src='https://d2pas86kykpvmq.cloudfront.net/img_emoji/2.0/Preview-19.png'/>
					{/* <img src='https://d2pas86kykpvmq.cloudfront.net/img_emoji/2.0/Preview-13.png'/>
					<img src='https://d2pas86kykpvmq.cloudfront.net/img_emoji/2.0/Preview-34.png'/>
					<img src='https://d2pas86kykpvmq.cloudfront.net/img_emoji/2.0/Preview-6.png'/>
					<img src='https://d2pas86kykpvmq.cloudfront.net/img_emoji/2.0/Preview-11.png'/>
					<img src='https://d2pas86kykpvmq.cloudfront.net/img_emoji/2.0/Preview-26.png'/>
					<img src='https://d2pas86kykpvmq.cloudfront.net/img_emoji/2.0/Preview-5.png'/> */}
					
				</div>
			<div className='btn'>✨시작하기 ➧</div>
		</div>
	);
}

export default App;
