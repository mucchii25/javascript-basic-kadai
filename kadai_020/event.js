const clickBtn= document.getElementById('btn');
const clickText = document.getElementById('text');


clickBtn.addEventListener('click' , () => {

   clickText.textContent = 'ボタンがクリックされました！'; 
 
});
