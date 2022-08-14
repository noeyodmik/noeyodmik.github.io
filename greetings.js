// - document는 HTML파일을 오브젝트화 해서 JS로 가져온다
// - 가져온 document에서 getElementById를 통해 HTML의 특정 element를 가져올 수 있다
// - 가져온 element의 속성들을 통해 내용을 추가하거나 수정을 할 수 있다

// const title = document.getElementById("title");

// title.innertext = "Got you!";

// console.log(title.id);
// console.log(title.className);

// const hellos = document.getElementsByClassName("hello");

// console.log(hellos);

// // const title = document.querySelector("#hello");
// const h1 = document.querySelector("div.hello:first-child h1");
// //querySelector -> return only first element
// // console.dir(title); // 콘솔 내부
// function handleTitleClick() {
//     h1.classList.toggle("clicked");
//     // const clickedClass = "clicked";
//     // if (h1.classList.contains(clickedClass)) {
//     //     h1.classList.remove(clickedClass) = "";
//     // } else {
//     //     h1.classList.add(clickedClass);
//     // }
// }

// h1.addEventListener("click", handleTitleClick); //() handleTitleClick 뒤에 금지

// const loginForm = document.querySelector("#login-form");
const loginForm = document.querySelector("#login-form")
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const link = document.querySelector("a");

const HIDDEN_CLASSNAME = "hidden"; //대문자인 이유 : string만 포함된 변수, string 저장하고 싶을 때
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
    event.preventDefault(); //기본 기능 막음
    loginForm.classList.add("hidden");
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings();
}

function paintGreetings() {
    const username = localStorage.getItem(USERNAME_KEY);
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    paintGreetings();
}


// function handleLinkClick(event) {
//     event.preventDeafult();
//     console.dir(event);
//  //alert blocks everything
// }



 //() 추가 시 브라우저기 function 바로 실행
//  link.addEventListener("click", handleLinkClick)