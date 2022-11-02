const modal = document.querySelector('.modal');
const data = document.querySelector('.NameModal');
const btnOpenPopup = document.querySelector('.btn_signup');
const x = document.querySelector('.close');
const x2 = document.querySelector('.close2');
const nextBtn = document.querySelector('.signup_btn');
const jobprocess = document.querySelector('.JobProcess_container');

const open1 = function () {
	modal.style.display = 'block';
	data.style.display = 'none';
	jobprocess.style.display = 'none';
	document.body.style = 'overflow: hidden';
	document.body.style.backgroundColor = 'rgba(0, 0, 0, 0.4)';
};

const open2 = function () {
	data.style.display = 'block';
};

btnOpenPopup.addEventListener('click', open1);
nextBtn.addEventListener('click', open2);

console.log(modal.style.display);
console.log(data.style.display);

x.addEventListener('click', () => {
	modal.style.display = 'none';
	jobprocess.style.display = 'block';
	document.body.style = 'overflow: auto';
	document.body.style.backgroundColor = 'white';
});

x2.addEventListener('click', () => {
	modal.style.display = 'none';
	jobprocess.style.display = 'block';
	document.body.style = 'overflow: auto';
	document.body.style.backgroundColor = 'white';
});
