let items = ['사과', '바나나'];

function showItems() {
  const list = document.getElementById('list');
  list.innerHTML = ''; // 기존 내용 지우기

  items.forEach(item => {   // items.forEach : items 배열의 원소 각각   (item: items의 원소)
    const li = document.createElement('li');    // 'li' 태그 생성   =>  <li></li> 형태
    li.textContent = item;    // item 배열의 원소(예: '사과', '바나나')라는 글자를 집어넣음 => ex. <li>사과</li>
    list.appendChild(li);     // list.appendChild(li) : li 변수에 든 <li>사과</li>를 list(ul 태그의 id)에 원소로 추가
  });
}

document.getElementById('addBtn').addEventListener('click', () => {
  items.push('귤'); // 배열 원소로 '귤' 추가
  showItems();
});

showItems();