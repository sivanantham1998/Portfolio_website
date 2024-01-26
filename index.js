let menuBar=document.querySelector('.menuBar')

menuBar.addEventListener('click',function()
{
   let ul=document.getElementById('ul')

   if(ul.style.display=="block")
   {
      ul.style.display="none";
   }
   else
   {
      ul.style.display="block"
   }
})