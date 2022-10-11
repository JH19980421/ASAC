const menuBar = document.querySelector('.menu');
const containerTop = document.querySelector('.container-top');

const menuExpandDiv = document.createElement('div');
menuExpandDiv.className = 'menu-expand';
menuExpandDiv.innerHTML = `<ul>
                                <li>직군 전체</li>
                                <li>개발</li>
                                <li>개발</li>
                                <li>개발</li>
                                <li>개발</li>
                                <li>개발</li>
                                <li>개발</li>
                                <li>개발</li>
                                <li>개발</li>
                                <li>개발</li>
                                <li>개발</li>
                                <li>개발</li>
                                <li>개발</li>
                                <li>개발</li>
                                <li>개발</li>
                                <li>개발</li>
                                <li>개발</li>
                                <li>개발</li>
                                <li>개발</li>
                                <li>개발</li>
                                <li>개발</li>
                            </ul>`;

menuBar.addEventListener('mouseover', () => {
    containerTop.appendChild(menuExpandDiv);
});
menuBar.addEventListener('mouseout', () => {
    containerTop.removeChild(menuExpandDiv);
})