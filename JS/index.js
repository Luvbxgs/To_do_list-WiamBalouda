const inputField = document.getElementById("inputField");
const container = document.getElementById("container-tasks"); 


function planning(){
    if(inputField.value === ''){
        alert("Please add your text!");
    } else{
        createItem();
        inputField.value = '';
    
    }
}
function createItem(){

    let li = document.createElement("li");
    li.innerHTML = inputField.value;
    // check button toevoegen
    let checkButton = document.createElement("button");
    checkButton.classList.add("done");
    checkButton.innerHTML = '<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 17.837 17.837" xml:space="preserve"><g><path d="M16.145,2.571c-0.272-0.273-0.718-0.273-0.99,0L6.92,10.804l-4.241-4.27c-0.272-0.274-0.715-0.274-0.989,0L0.204,8.019c-0.272,0.271-0.272,0.717,0,0.99l6.217,6.258c0.272,0.271,0.715,0.271,0.99,0L17.63,5.047c0.276-0.273,0.276-0.72,0-0.994L16.145,2.571z"/></g></svg>';
    li.appendChild(checkButton);
    // remove button toevoegen
    let removeButton = document.createElement("button");
    removeButton.classList.add("remove");
    removeButton.innerHTML = '<svg fill="#000000" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 408.483 408.483" xml:space="preserve"><g><path d="M87.748,388.784c0.461,11.01,9.521,19.699,20.539,19.699h191.911c11.018,0,20.078-8.689,20.539-19.699l13.705-289.316H74.043L87.748,388.784z M247.655,171.329c0-4.61,3.738-8.349,8.35-8.349h13.355c4.609,0,8.35,3.738,8.35,8.349v165.293c0,4.611-3.738,8.349-8.35,8.349h-13.355c-4.61,0-8.35-3.736-8.35-8.349V171.329z M189.216,171.329c0-4.61,3.738-8.349,8.349-8.349h13.355c4.609,0,8.349,3.738,8.349,8.349v165.293c0,4.611-3.737,8.349-8.349,8.349h-13.355c-4.61,0-8.349-3.736-8.349-8.349V171.329L189.216,171.329z M130.775,171.329c0-4.61,3.738-8.349,8.349-8.349h13.356c4.61,0,8.349,3.738,8.349,8.349v165.293c0,4.611-3.738,8.349-8.349,8.349h-13.356c-4.61,0-8.349-3.736-8.349-8.349V171.329z"/><path d="M343.567,21.043h-88.535V4.305c0-2.377-1.927-4.305-4.305-4.305h-92.971c-2.377,0-4.304,1.928-4.304,4.305v16.737H64.916c-7.125,0-12.9,5.776-12.9,12.901V74.47h304.451V33.944C356.467,26.819,350.692,21.043,343.567,21.043z"/></g></svg>';
    li.appendChild(removeButton);
    // roep de li op
    container.appendChild(li);
    buttons(li, checkButton, removeButton);
}

function buttons(li, checkButton, removeButton){
    removeButton.addEventListener('click',function(){
        li.remove();
    });

    checkButton.addEventListener('click', function(){
        if(li.classList.contains('checked')){
            li.classList.remove('checked');
        }else{
            li.classList.add('checked');
            checkButton
            
        }
    }); 
}
