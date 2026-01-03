import './App.css';
import { useState } from 'react';

function App() {

  let post = '임시 데이터 베이스 글, 중괄호 데이터 바인딩'
  let [a, b] = useState('남자 코트 추천')
  let [logo, setLogo] = useState('ReactBlog');
  let [글제목, 글제목변경] =useState(['남자 코트 추천', '강남 우동맛집', '파이썬독학'])
  let [추천, 추천변경] =useState([0,0,0]);
  let [counter, counterChange] = useState(0);
  let [modal, setModal] = useState(false);
  let [title, setTitle] = useState(0);
  let [입력값, 입력값변경] = useState(' ');

  // function 함수(){
  //   console.log(1);
  // }

  return (
    <div className="App">
      <div className="black-nav">
        <h4 style={ {color : 'red', fontSize : '16px'} }>{logo}</h4>
      </div>

      {/* <button onClick={ () => {
        글제목[0] = '여자 코트 추천';
        글제목변경(글제목);
      } }>글수정</button> */}

      {/* react는 참조형 데이터(배열, 객체)를 직접 수정하면 변경을 감지하지 못함
      스프레드 문법이나 map, filter 등을 사용해 새로운 배열/객체를 만들어야 react가 상태변화를 인지하고
      컴포넌트를 다시 렌더링 */}

      <button onClick={ () => {
        let copy = 글제목;
        copy[0] = '여자 코트 추천'
        글제목변경(copy);
        console.log(copy == 글제목)
      } }>글수정</button>

      {/* copy와 글제목의 화살표가 같아서 true, 따라서 state 변동 안됨 */}

      {/* state변경함수 특징
      기존state == 신규state 의 경우 변경안함 */}

      {/* [...글제목] 문법은 화살표를 새로 바꿔달라는 문법, 배열을 벗긴다음 다시 배열에 집어넣음 */}
      {/* copy == 글제목
      false, 따라서 state 변동 */}

      {/* let arr = [1,2,3]; */}
      {/* array/object 담은 변수엔 화살표만 저장됨, [1,2,3]이 어딨는지 알려주는 화살표만 들어있음 */}

      <button onClick ={ () => {
        let copy=[...글제목];
        copy.sort((a,b) => a.localeCompare(b));
      }}>가나다라순 정렬</button>

      {/* <button onClick ={ () => {
        let copy=[...글제목];
        copy.sort((a,b) => a.name.toLowerCase() <b.name.toLowerCase() ? -1:1);
        setcopy(copy);
      }}>가나다라순 정렬</button> */}

      <button onClick={() => {
        let copy1 = [...글제목]; copy1.sort(); 글제목변경(copy1)}}>가나다순정렬</button>

      {/* <div className="list">
        <h4 onClick = { () => { setModal(!modal) }} >{글제목[2]}</h4>
        <p>25년 12월 28일 발행</p>
      </div> */}

      {/* !modal을 이용해 스위치처럼 사용한다는 생각을 못했다, ! not으로 반전의미 */}

      
      
      {/* <div>
        <h1>카운터 : {counter}</h1>
        <button onClick={ () => counterChange(counter + 1 )}>+</button>
      </div> */}

      {
        글제목.map(function(a, i){
        return (
      <div className="list" key={i}>
        <h4 onClick={() => {setModal(!modal); setTitle(i) }}>
          {글제목[i]}
          <button onClick={ (e)=> { e.stopPropagation()
            let copy = [...추천];
            copy[i]=copy[i]+1;
            추천변경(copy)
          }}> 👍 </button> {추천[i]}
        </h4>
        <p>25년 12월 28일 발행</p>
        <button onClick = { () => {
          let copy = [...글제목];
          copy.splice(i, 1);
          글제목변경(copy);
        } }>삭제</button>
      </div>
        )
      })
      }

      {/* 상위html로 퍼지는 이벤트 버블리을 막기위해 e.stopPropagation() */}

      {/* map으로 반복문처럼 {}안에서 */}

      <input onChange={(e)=> {
        입력값변경(e.target.value);
        console.log(입력값)
        }}></input>

        <button onClick ={ () => {
          let copy = [...글제목];
          copy.unshift(입력값);
          글제목변경(copy)
        } }>글발행</button>
      {
        modal == true ? <Modal title={title} color={'yellow'} 글제목={글제목} 글제목변경={글제목변경}/> : null
      }

    </div>
  );
}

function Modal(props){
  return(
    <div className="modal" style={{background : props.color}}>
        <h4>{props.글제목[props.title]}</h4>
        <p>날짜</p>
        <p>상세내용</p>
        <button onClick ={ () => {
          let copy = [...props.글제목]
          copy[0]='여자 코트 추천'
          props.글제목변경(copy)
        } }>글수정</button>
      </div>
  )
}

//component 문법
// function 만들고, return()안에 html 담아서
// 컴포넌트로 만들어서 <함수명></함수명>으로 사용가능
//어떤걸 컴포넌트로 사용할까? 반복적인 html 축약할 때, 큰페이지들, 자주변경되는 것들
//컴포넌트 단점: state 가져다쓸 떄 문제생김 (a함수에 있던 변수는 b함수에서 마음대로 사용불가)
      

export default App;
