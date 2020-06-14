
$(document).ready(() => {
   let i = 0;
   const words = ['Love', 'Think', 'Live', 'Breath', 'Dream'];

   const change = document.getElementById("change");
   const trig = document.getElementById("trig");
   const heart = document.getElementById("heart");
   const credits = document.getElementById("credits");

   trig.addEventListener('mouseenter', e => {
       i++;
       i %= words.length;
       change.innerHTML = words[i];
   });

    credits.addEventListener('mouseenter', e => {
        heart.style.opacity = "1"
    });

    credits.addEventListener('mouseleave', e => {
        heart.style.opacity = "0"
    })
});