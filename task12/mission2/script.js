window.onload = () => {
    var userMenu = document.querySelector('#userMenu');
    var dropDown = document.querySelector('#dropDown');

    userMenu.addEventListener('click',()=>{
        dropDown.classList.add('drop-down-list-open');
    });

    document.addEventListener('click',function(e){
        if (e.target != userMenu && !e.path.includes(dropDown) && dropDown.classList.contains('drop-down-list-open')){
            dropDown.classList.remove('drop-down-list-open');
        }
    })
}