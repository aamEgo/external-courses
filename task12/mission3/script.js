

window.onload = ()=>{
    var starsContainer = document.querySelector('.stars-container');
    var star = document.querySelector('.far .fa-star');
    
    function setRating(element) {
        var stars = starsContainer.children;
        for (var i = 0; i < stars.length; ++i){
            var currentStar = stars[i];
            if (currentStar.hasAttribute('activ')){
                currentStar.removeAttribute('activ');
            }
        }
/*        starsContainer.childNodes.forEach(node=>{
            if (node.hasAttribute('activ')){
                node.removeAttribute('activ');
            }
        });*/
        element.setAttribute('activ',null);
    }
    
    starsContainer.addEventListener('click',function (e) {
        setRating(e.target);
    });
};