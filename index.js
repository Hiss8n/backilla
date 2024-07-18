

const bodyEl=document.querySelector('body');

const themeEl=document.querySelector('.color-theme');


themeEl.addEventListener('click',()=>{
    document.body.classList.toggle('dark-theme');
}) 


const paEl=document.querySelector('.donate');
const ulEl=document.querySelector('.list-items')
const listEls=document.querySelectorAll('li')


listEls.forEach(list=>{
    list.addEventListener('click',()=>{
        const childEl=list.childNodes[1];

        childEl.classList.toggle('active')
    
        

       /*  list.classList.toggle('active') */

    })

})


/* console.log(listEl) */


function navigateToPage(){
    let select=document.getElementById('pages')
    const page=select.value;
    window.location.href=page;
}

function navigateToSection(){
    let select=document.getElementById('footer')
    const section=select.value;
    window.location.hash=section;
}

const menuEl=document.querySelector('.menu-icons');
const spanEl=document.querySelector('.drop-down')

menuEl.addEventListener('click',()=>{
    spanEl.classList.toggle('active')
})


  
    
  




const menuListEls=document.querySelector('.drop-down');

const ListEls=document.querySelector('.item');

const ListIconEl=document.querySelector('.menu-list')

/* console.log(ListEls) */
/* console.log(ListIconEl) */

/* console.log(menuListEls.childNodes[1].classList) */

/* 
ListIconEl.addEventListener('click',()=>{
/* const chEl=menuListEls.childNodes[1]; */

/* const spanEL=menuListEls.childNodes; */

/* console.log(spanEL) */
/* spanEL[1].style.display='none' */
/* if(spanEL.style.display==='block'){
 spanEL.style.display='none'
}
else{
    spanEL.style.display='none'



} */

    const itemEl1=document.querySelector('.item1')
    const itemEl2=document.querySelector('.item2')
    const itemEl3=document.querySelector('.item3')
    const itemEl4=document.querySelector('.item4')
    /* console.log(itemEl1.classList) */

    itemEl4.addEventListener('click',()=>{
        spanEl.classList.toggle('active')
    })
    itemEl3.addEventListener('click',()=>{
        spanEl.classList.toggle('active')
    }) 

   

    menuListEls.addEventListener('click',()=>{
       /*  itemEl1.classList.toggle('active')
        itemEl2.classList.toggle('active')
        itemEl3.classList.toggle('active')
        itemEl4.classList.toggle('active') */
        console.log(itemEl3)
    })

    const dateEl=document.querySelector('.date')

    


    const currentDate=new Date()

    dateEl.innerHTML=currentDate.getFullYear()
   






    
    

    

   
    

