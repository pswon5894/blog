import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let post = '임시 데이터 베이스 글, 중괄호 데이터 바인딩'
  let [a, b] = useState('남자 코트 추천')
  let [logo, setLogo] = useState('ReactBlog');
  let [글제목, 글제목변경] =useState(['남자 코트 추천', '강남 우동맛집', '파이썬독학'])
  let [추천, 추천변경] =useState(0);

  // function 함수(){
  //   console.log(1);
  // }

  return (
    <div className="App">
      <div className="black-nav">
        <h4 style={ {color : 'red', fontSize : '16px'} }>{logo}</h4>
      </div>

      <button onClick= { () => {
        let copy = [...글제목];
        copy[0] = '여자코트 추천'
        글제목변경(글제목[0]);
        글제목변경(copy);

        }}>글수정</button>

      <div className="list"></div>
      <h4>{post}</h4>
      <p>25년 12월 28일 발행</p>
      <div className="list"></div>
      <h4>{글제목[0]}<span onClick={ ()=> { 추천변경(추천+1) }}> 👍 </span> {추천}  </h4>
      <p>25년 12월 28일 발행</p>
      <div className="list"></div>
      <h4>{글제목[1]}</h4>
      <p>25년 12월 28일 발행</p>
      <div className="list"></div>
      <h4>{글제목[2]}</h4>
      <p>25년 12월 28일 발행</p>
    </div>
  );
}

export default App;
