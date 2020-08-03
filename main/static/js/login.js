console.log('hi');
let flag = true;
const log = document.getElementById('signIn');
const reg = document.getElementById('reg');
console.log(log);
console.log(reg);
const logBut = document.getElementsByClassName('inner')[0];
logBut.style.color = 'white';
logBut.style.background = 'blue';
const regBut = document.getElementsByClassName('inner')[1];
logBut.addEventListener('click',login);
regBut.addEventListener('click',register);

function login()
    {
    log.style.display='block';
    logBut.style.color = 'white';
    logBut.style.background = 'blue';
    regBut.style.color = 'black';
    regBut.style.background = 'white';
    reg.style.display='none';
    }
function register()
    {
    log.style.display = 'none';
    regBut.style.color = 'white';
    regBut.style.background = '#ea4335';
    logBut.style.color = 'black';
    logBut.style.background = 'white';
    reg.style.display = 'block';
    }