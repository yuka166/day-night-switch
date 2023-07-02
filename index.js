const switches = document.querySelector('button');
const body = document.body;
switches.addEventListener('click', () => {
    switches.className === 'day' ? switches.className = 'night' : switches.className = 'day';
    switches.className === 'day' ? body.style.background = '#FFFFFF' : body.style.background = '#141414';
})