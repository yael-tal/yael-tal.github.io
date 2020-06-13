
window.onload = () => {
   let i = 0;
   const words = ['Love', 'Think', 'Live', 'Breath', 'Admire', 'Dream'];

   const str = document.getElementById("change");
   const heart = document.getElementById("heart");
   const credits = document.getElementById("credits");
   str.addEventListener('mouseenter', e => {
       i++;
       i %= words.length;
       str.innerHTML = words[i];
   });

    credits.addEventListener('mouseenter', e => {
        heart.style.opacity = "1"
    });

    credits.addEventListener('mouseleave', e => {
        heart.style.opacity = "0"
    })
};