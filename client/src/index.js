import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


function wellcome(){
  return "HELLO ยินดีต้อนรับเข้าสู่การใช้งาน "
}


let username = "player";
let user = {username : "player", email: "player422999@gmail.com"}
const element = <h1>{wellcome()} {user.username + '' + user.email}</h1>


ReactDOM.render(
  
     element
  ,
  document.getElementById('root')
);
