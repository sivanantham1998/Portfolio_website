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

// skills hide and show

document.getElementById('sk').addEventListener('click',function()
{
   console.log('work')
   let skills=document.getElementById('extra')

   if(skills.style.display=="block")
   {
      skills.style.display='none'
   }
   else
   {
      skills.style.display="block"
   }
})