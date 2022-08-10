const inputField = document.getElementById('input');
const unorderedList = document.getElementById('ul');
const container = document.getElementById('container');


const newToDo = () => {
    const newEl = document.createElement('li');
    unorderedList.appendChild(newEl);
    newEl.name = inputField.value;

    const deleteBtn = document.createElement('button');
    deleteBtn.name = inputField.value;

    const check = document.createElement('input');
    check.type = 'checkbox';

    newEl.append(check, inputField.value, deleteBtn)
    
    deleteBtn.addEventListener('click', function() {
        newEl.remove();
    });

    check.addEventListener('change', function() {
        if(!newEl.classList.contains('checked')) {
            newEl.classList.add('checked');    
        } else {
            newEl.classList.remove('checked')
        };
    })  
};

inputField.addEventListener('keypress', function(e) {
        if(e.key === 'Enter') {
            newToDo();
            inputField.value = '';
        };
    });


