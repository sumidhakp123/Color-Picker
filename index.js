// get value
document.querySelectorAll('input[type=color]').forEach(function(picker){
    // target pointer 
    var target=document.querySelector('label[for=""+picker.id+""]'), 
    colorArea=document.createElement(span);

    colorArea.innerHTML=picker.value;target.appendChild(colorArea);

    // add event listener
    picker.addEventListener('change', function(){
colorArea.innerHTML=picker.value;
target.removeChild(colorArea)
    });
});