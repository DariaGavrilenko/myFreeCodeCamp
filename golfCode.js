const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {
 if(strokes == 1){
   return "Hole-in-one!"
 }
 else if ((par-strokes)>=2){
   return "Eagle"
 }
else if ((par-strokes)>=1){
   return "Birdie"
 }
 else if ((par-strokes)==0){
   return "Par"
 }

else if ((par-strokes)<=-3){
   return "Go Home!"
 }
  else if ((par-strokes)<=-2){
   return "Double Bogey"
 }
 else if ((par-strokes)<=-1){
   return "Bogey"
 }
  // Only change code above this line
}

golfScore(5, 4);