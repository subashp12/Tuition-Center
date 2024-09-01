//For Sticky Navbar
let contactNav=document.getElementById('contNav')
let MainNav=document.getElementById('MainNav')
window.addEventListener('scroll',function(){
    if(this.window.scrollY>contactNav.offsetHeight){
        MainNav.classList.add('sticker')
    }
})
//For Review Container
const nextButton=document.getElementById('next')
const previousButton=document.getElementById('previous')
const revContainer=document.getElementById('revContainer')
let scrollAmount=700
nextButton.addEventListener('click',function(){
    if(revContainer.scrollLeft+revContainer.clientWidth>=revContainer.scrollWidth){
        revContainer.scrollLeft=0
    }else{
        revContainer.scrollLeft+=scrollAmount
    }
})
previousButton.addEventListener('click',function(){
    if(revContainer.scrollLeft===0){
        revContainer.scrollLeft=revContainer.scrollWidth
    }else{
        revContainer.scrollLeft-=scrollAmount
    }
})
//for active links
let Elements = document.querySelectorAll('#mainContent, #circleContainer, #schedule, #fees, #Contacts, #reviews');
let navLinks=document.querySelectorAll(' nav.mainNav a')
Elements.forEach(element=>{
    let id=element.getAttribute('id')
    document.querySelector(`nav.mainNav a[href='#${id}']`).dataset.id=id;
})
window.onscroll= ()=>{
    let top=window.scrollY
    Elements.forEach(element=>{
        let offset=element.offsetTop-175;
        let height=element.offsetHeight;
        let id=element.getAttribute('id');
        if(top>=offset && top<offset+height){
            navLinks.forEach(link=>{
                link.classList.remove('active')
            });
            document.querySelector(`nav.mainNav a[data-id='${id}']`).classList.add('active')
        }
    })
}
