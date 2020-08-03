const bar = document.getElementsByClassName('productbutt')[0];
let butt = document.getElementById('buy');
let cancel = document.createElement('button');
cancel.setAttribute('class','btn btn-danger');
cancel.innerText = 'Cancel Request';
let details = document.createElement('button');
details.setAttribute('class','btn btn-info');
details.innerText = 'Contact Seller';

butt.addEventListener('click',removeMe);
details.addEventListener('click',giveDetails);
function removeMe()
{
bar.appendChild(cancel);
bar.append(details);
bar.removeChild(butt);
}
function giveDetails()
{ 
bar.removeChild(cancel);
let number = document.createElement('div');
number.setAttribute('class','set');
number.innerHTML = 'Name: ::NAME:: <br/> Number: ::+91 1234567890::';
bar.removeChild(details);
bar.appendChild(number);
}
