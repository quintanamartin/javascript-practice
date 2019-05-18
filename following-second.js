/*
Following second
Write a program that asks for a time under the form of three information 
(hours, minutes, seconds). The program calculates and shows the time one
second after. 

*/

function followingSecond() {
   let hh = Number(prompt('Ingrese la hora:'));
   let mm = Number(prompt('Ingrese los minutos:'));
   let ss = Number(prompt('Ingrese los segundos:'));

   if (ss === 59) {
      ss = 0;
      mm += 1;

      if (mm === 60) {
         mm = 0;
         hh += 1;

         if (hh === 24) {
            hh = 0;
         }
      }
   } else {
      ss += 1;
   }

   let formatedTime = formatTime(hh, mm, ss);
   console.log(formatedTime);
}

function formatTime() {
   return `La hora es ${hh}h:${mm}m:${ss}s`;
}

followingSecond();