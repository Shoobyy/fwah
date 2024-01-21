let btn = document.getElementById('btn');
let inp = document.getElementById('inp');
let boxs = document.querySelectorAll('.box');
let drag = null;
btn.addEventListener ('click', clickBtn);
btn.addEventListener ('click', dragItem);
btn.addEventListener ('click', moveItem);
function clickBtn(){
    if (inp.value != '') {
        boxs[0].innerHTML += `<p class="item" draggable="true">${inp.value}</p>`;
        inp.value = '';
    }
}
function dragItem(){
    let items = document.querySelectorAll('.item');
    for(let i=0; i<items.length; i++) {
        items[i].addEventListener ('dragstart', function(){
            drag = items[i];
            items[i].style.opacity = '0.5';
        });
        items[i].addEventListener ('dragend', function(){
            drag = null;
            items[i].style.opacity = '1';
        });
    }
}
function moveItem(){
    for(let i=0; i<boxs.length; i++){
        boxs[i].addEventListener('dragover', function(e){
            e.preventDefault();
            boxs[i].style.background = '#402';
            boxs[i].style.color = '#fff';
        });
        boxs[i].addEventListener('dragleave', function(){
            boxs[i].style.background = '#402';
            boxs[i].style.color = '#000';
        });
        boxs[i].addEventListener('drop', function(){
            boxs[i].append (drag);
            boxs[i].style.background = '#fff';
            boxs[i].style.color = '#000';
        });
    }
} 