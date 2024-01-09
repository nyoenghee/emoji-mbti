import { useState } from 'react';
import '../src/scss/Style.scss'


function App() {
  const [page, setPage] = useState(0);

  const questionList = [
    {q:['집에 있고 싶나요?'],
    a:[{type : 'I', text : '예'},
      {type : 'E', text : '아니요'}]
    },
    {q:['하늘을 날아다니는 상상을 자주 하나요?'],
    a:[{type : 'S', text : '아니요'},
      {type : 'N', text : '예'}]
    },
    {q:['상대방이 차 사고 나서 전화가 왔다면, 뭐라고 할것인가요?'],
    a:[{type : 'T', text : '보험 불렀어?'},
      {type : 'F', text : '괜찮아? 어디 안다쳤어?'}]
    },
    {q:['갑작스럽게 찾아둔 맛집이 휴업이다. 당신은?'],
    a:[{type : 'P', text : '어쩔 수 없지~ 다른 곳으로 가자'},
      {type : 'J', text : '아.. 그럼 플랜 B인 맛집이 있어! 거기로 가자'}]
    },

    {q:['테트스 결과 보기'],
    a:[{type : 'P', text : '어쩔 수 없지~ 다른 곳으로 가자'},
      {type : 'J', text : '아.. 그럼 플랜 B인 맛집이 있어! 거기로 가자'}]
    }
  ]

  const [mbtiList, setMbtiList] = useState([
    {name : 'I', count :0},{name : 'E', count :0},{name : 'S', count :0},{name : 'N', count :0},
    {name : 'T', count :0},{name : 'F', count :0},{name : 'P', count :0},{name : 'J', count :0},
  ])


	return (
    page === 0
    ?
		<div className="section section-main">
			<div className='header'>

				<div className='inner'>
					<div className='__left'>이모지 스티커팩 성격 테스트</div>
					<div className='__right'>나의 성격 유형에 맞는 이모지 스티커팩은 무엇일까?</div>
				</div>
			</div>
			<div className='emojis'>
					
					<img alt="weather" className="weather-icon" src={`${process.env.PUBLIC_URL}/11.png`} />
					<img alt="weather" className="weather-icon" src={`${process.env.PUBLIC_URL}/22.png`} />
					<img alt="weather" className="weather-icon" src={`${process.env.PUBLIC_URL}/33.png`} />
			</div>
				<div className='credit'>20240109 jmseo, nhhong</div>

			<div className='btn' onClick={()=>{setPage(1)}}>✨시작하기 ➧</div>
		</div>
    :
    <div>테스트</div>
  )
}

export default App;
