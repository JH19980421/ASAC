var coin = 0;
var display = document.getElementById('resultDisplay');

document.getElementById('insert100').addEventListener('click', function(){
    coin+=100;
    console.log("현재 금액: "+coin);
    if(coin > 10000) {
        coin-=100;
        console.log("현재 금액: "+coin);
        alert("삽입 가능 금액을 초과하였습니다.");
    }
});

document.getElementById('insert500').addEventListener('click', function(){
    coin+=500;
    console.log("현재 금액: "+coin);
    if(coin > 10000) {
        coin-=500;
        console.log("현재 금액: "+coin);
        alert("삽입 가능 금액을 초과하였습니다.");
    }
});

document.getElementById('insert1000').addEventListener('click', function(){
    coin+=1000;
    console.log("현재 금액: "+coin);
    if(coin > 10000) {
        coin-=1000;
        console.log("현재 금액: "+coin);
        alert("삽입 가능 금액을 초과하였습니다.");
    }
});

document.getElementById('resultButton').addEventListener('click', function(){
    if(coin >= 1000) {
        display.innerHTML = "총 금액: " + coin + "원 모든 음료 구매 가능합니다.";
    } else if(1000 > coin && coin > 700) {
        display.innerHTML = "총 금액: " + coin + "원 콜라, 비타민 음료 구매 가능합니다.";
    } else if(700 >= coin && coin > 200) {
        display.innerHTML = "총 금액: " + coin + "원 비타민 음료 구매 가능합니다.";
    } else {
        display.innerHTML = "총 금액: " + coin + "원 구매 가능한 음료가 없습니다.";
    }
    coin = 0;
});