const switches = document.querySelectorAll('button');
const body = document.body;
switches.forEach(item => {
    item.addEventListener('click', () => {
        item.className === 'day' ? item.className = 'night' : item.className = 'day';
        item.className === 'day' ? body.style.background = '#FFFFFF' : body.style.background = '#141414';
    })
});