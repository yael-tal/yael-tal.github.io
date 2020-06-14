
$(document).ready(() => {
   let i = 0;
   const words = ['Love', 'Think', 'Live', 'Breath', 'Dream'];

   const change = document.getElementById("change");
   const trig = document.getElementById("trig");

   trig.addEventListener('mouseenter', e => {
       i++;
       i %= words.length;
       change.innerHTML = words[i];
   });
});