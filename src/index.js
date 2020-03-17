import _ from 'lodash';

let InputField = document.createElement('input');
InputField.style.width = '200px';
InputField.id = 'InputField';
document.body.insertBefore(InputField, document.getElementById('container'));

let AddButton = document.createElement('button');
AddButton.textContent = 'Добавить';
AddButton.style.width = '100px';
AddButton.style.height = '22px';
document.body.insertBefore(AddButton, document.getElementById('container'));

let ul = document.createElement('ul');
document.getElementById('container').appendChild(ul);

if(localStorage.getItem('tasks')){
    Recover();
}

document.querySelector('button').onclick = function(){
    AddTast(document.getElementById('InputField').value);
}
addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
      AddTast(document.getElementById('InputField').value);
    }
});

function AddTast(text){
    if(document.getElementById('InputField').value !== ''){
        let Text = document.createElement('li');
    Text.textContent = text;
    document.querySelector('ul').appendChild(Text);
    document.getElementById('InputField').value = '';
    Sort();
    }
}
function Sort(){
    let arr = [];
    for (const i of document.querySelectorAll('li')) {
        arr.push(i.textContent);
        document.querySelector('li').remove();
    }
    arr.sort();    
    localStorage.setItem('tasks', JSON.stringify(arr));
    Recover();
}

window.addEventListener("storage", function() {
	Recover();
});

function Recover(){
    let list = JSON.parse(localStorage.getItem('tasks'));
    if(document.querySelectorAll('li').length > 0){
        for (const i of document.querySelectorAll('li')) {
            document.querySelector('li').remove();
        }
    }
    list.forEach(element => {
        let li = document.createElement('li');
        li.textContent = element
        document.querySelector('ul').appendChild(li);
    });
}

function component() {
    const element = document.createElement('div');
  
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  
    return element;
}