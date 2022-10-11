let insertedMoney = 0;

const btn = document.querySelector("#button-container");
btn.onclick = (event) => {
    insertedMoney += Number(event.target.textContent);
    insertedMoney = Math.min(10000, insertedMoney);
    console.log(insertedMoney);
}

const resultButton = document.getElementById("result-button");
resultButton.onclick = () => {
    show_result(insertedMoney);
    insertedMoney = 0;
    console.log(insertedMoney);
}

function show_result (totalMoney) {
    const resultText = document.getElementById("result-content");
    if(totalMoney >= 1000) {
        resultText.innerText = '비타민 음료, 사이다, 콜라';
    }
    else if(totalMoney >= 500) {
        resultText.innerText = '비타민 음료, 사이다';
    }
    else if(totalMoney >= 300) {
        resultText.innerText = '비타민 음료';
    }
    else {
        resultText.innerText = '뽑을 수 있는 음료수 없음';
    }
    
}