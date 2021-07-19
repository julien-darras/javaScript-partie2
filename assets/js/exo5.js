let dayNumber='1';
dayNumber=parseInt(dayNumber);
let day='';
switch (dayNumber){
    case 1:
        day='Lundi';
        break;
    case 2:
        day='Mardi';
        break;
    case 3:
        day='Mercredi';
        break;
    case 4:
        day='Jeudi';
        break;
    case 5:
        day='Vendredi';
        break;
    case 6:
        day='Samedi';
        break;
    case 7:
        day='Dimanche';  
        break;
    default: 
        day='Erreur' 
}
alert(day);