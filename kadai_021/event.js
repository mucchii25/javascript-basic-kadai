const clickBtn= document.getElementById('btn');
const clickText = document.getElementById('text');


clickBtn.addEventListener('click' , () => {
  setTimeout(() => {
    clickText.textContent = 'ボタンがクリックされました！';
  }, 2000);
 
}); 

/*
setTimeout(() => {
  clickBtn.addEventListener('click' , () => {
    clickText.textContent = 'ボタンがクリックされました！';
  });

} , 2000); 
 
setTimeout内にeventを入れるとブラウザを更新した2秒後にボタンに対して
クリックイベントが有効になる*/