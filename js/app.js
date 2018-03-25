const footerJump = document.querySelector('.footerJump');
const toggle = document.querySelector('#toggle');
if(footerJump){
    footerJump.addEventListener('click', ()=>{
        console.log('Oo');
        toggle.click();
    })
}
