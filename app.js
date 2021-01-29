const cursorall = document.querySelector('.cursor-all');
const cursorcolor = document.querySelector('#cursor-color').value;

document.addEventListener('mousemove', e => {

    cursorall.setAttribute('style', 'top:'+(e.pageY - 25)+"px; left:"+(e.pageX - 20)+"px;")
})

document.addEventListener('click', ()=>{
    cursorall.classList.add('expand-' + cursorcolor);

    setTimeout(()=>{
        cursorall.classList.remove("expand-"  + cursorcolor);
    }, 500);
})


document.addEventListener('mousemove', ()=>{
    if(window.innerWidth>960) {
    cursorall.style.display = "block";
    }
    
})






