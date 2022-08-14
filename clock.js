const clock = document.querySelector("h2#clock");
//interval : 매번 일어나야 하는 무언가, setInterval(argument, 시간(ms))로 사용
//timeout : 원하는 시간만큼 지연시켜 발생시키고 싶을 때 사용, setTimeout(argument(함수), 시간(ms))로 사용
//padStart() : string에 쓸 수 있는 함수, "1".padStart(2, "0") + padEnd()
function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock(); //시계 즉시 호출, 없으면 웹사이트 로딩 후 1초 더 걸림
setInterval(getClock, 1000);

