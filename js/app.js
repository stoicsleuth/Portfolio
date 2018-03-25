const footerJump = document.querySelector('.footerJump');
const toggle = document.querySelector('#toggle');
if(footerJump){
    footerJump.addEventListener('click', ()=>{
       
        toggle.click();
    })
}
toggle.addEventListener('click', (e)=>{
    console.log(e.target.checked);
    if(e.target.checked)
    {
        document.querySelector('body').style['overflow-y'] = "hidden";
    }
    else{
        document.querySelector('body').style['overflow-y'] = "visible";
    }
})