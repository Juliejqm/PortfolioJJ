const cursorwhite = document.querySelector('.cursor-white');

document.addEventListener('mousemove', e => {
    cursorwhite.setAttribute('style', 'top:'+(e.pageY - 25)+"px; left:"+(e.pageX - 20)+"px;")
})

const cursorgrey = document.querySelector('.cursor-grey');

document.addEventListener('mousemove', e => {
    cursorgrey.setAttribute('style', 'top:'+(e.pageY - 25)+"px; left:"+(e.pageX - 20)+"px;")
})

document.addEventListener('click', ()=>{
    cursorwhite.classList.add('expand-white');

    setTimeout(()=>{
        cursorwhite.classList.remove("expand-white");
    }, 500);
})

document.addEventListener('click', ()=>{
    cursorgrey.classList.add('expand-grey');

    setTimeout(()=>{
        cursorgrey.classList.remove("expand-grey");
    }, 500);
})






