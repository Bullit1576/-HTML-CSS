/* Это объявление переменной, мы наши кнопку по тегу */
const button = document.querySelector('button');
button.style.width = '200px'; // setting the width to 200px
button.style.height = '200px'; // setting the height to 200px
button.style.background = '#090974'; // setting the background color to teal
button.style.color = 'braun'; // setting the color to white
button.style.fontSize = '20px'; // setting the font size to 20px
button.style.borderRadius = "50px";
button.style.position = "absolute";
button.style.top = '100px'; // Делаем отступ сверху (Зная координаты текущего элемента, Вы можете его передвигать уже в соответствии с его координатами, или задавать ширину или высоту в зависимости от текущих данных)
button.style.left = '1600px';
button.style.background="url(./sled.jpg)";  
/* Тут на кнопку навешиваем обрабочик, который ждёт клика и тогда запустит логику */
button.addEventListener('click', function() {
	alert('Малинуа? Нет, я лучше')
})