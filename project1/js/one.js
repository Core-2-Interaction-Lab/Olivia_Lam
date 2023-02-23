const toggle = document.getElementById('toggleDark');
const body = document.querySelector('body');

toggle.addEventListener('click', function(){
    this.classList.toggle('bi-lamp-fill');
    if(this.classList.toggle('bi-lamp')){
        body.style.background = '#ede7cc';
        body.style.color = 'black';
        body.style.transition = '2s';
    }else{
        body.style.background = 'black';
        body.style.color = '#ede7cc';
        body.style.transition = '2s';
    }
});