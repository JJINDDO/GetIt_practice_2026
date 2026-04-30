const countBtn = document.getElementById('countBtn');
const countDisplay = document.getElementById('countDisplay');
let count = 0;

countBtn.addEventListener('click', () => {
  count++;
  countDisplay.textContent = count; // span한 부분의 텍스트를 count 변수에 든 값으로 수정
});