var addToDoButton = document.getElementById('addToDo');
var toDoContainer = document.getElementById('toDoContainer');
var inputField = document.getElementById('inputField');

/*
 * Si le bouton est click
 * verifier si l'input nest pas vide
 * si l'input n'est pas vide creer un paragraphe
 * valorisé ce paragraphe avec le contenue de l'input
 * insérer le paragraphe dans l'élément container
 */

addToDoButton.onclick = function(){
    if (inputField.value != '')
        var paragraphe = document.createElement('p')
    paragraphe.innerText = inputField.value
    paragraphe.classList.add("task")
    toDoContainer.appendChild(paragraphe)
    inputField.value = ""

    paragraphe.addEventListener('click',function(){
        paragraphe.classList.add("task_click")
    })
}