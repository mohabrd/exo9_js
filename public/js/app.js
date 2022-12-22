// EXO1 en js déclare une varibale qui se nomme 'multiplicateur' valant 5 et utilise une boucle for pour créer une table de multiplication allant jusqu'a 9 et apparaissant dans la console sous le format 5 x 1 = 5 etc.

// let multiplicateur = 5;

// for (let index = 0; index <=10; index++) {
//     console.log(`${multiplicateur} * ${index} = ${multiplicateur * index}`);
    
// }

// EXO2 la même chose sauf qu'on incrémente par deux

// let multiplicateur = 5;

// for (let index = 0; index <=10; index+=2) {
//     console.log(`${multiplicateur} * ${index} = ${multiplicateur * index}`);
    
// }

// EXO 3 en js faire une boucle déscendante pour les nombres pairs de 20 à 0

// for (let index = 20; index >=0; index-=2) {
//     console.log(index);
    
// }

// EXO 4 en js créer un tableau avec les prénoms des gens de la classe ensuite avec l'aide d'une boucle, mettre les prénomns ayant plus de 5 caractères dans un second tableau qui se nomme 'longPrenoms'

// let prenoms = ['Quentin','Bachir','Sebastien','Brandon','Charlotte','Denis','Yassine'];

// let longPrenoms = [];

// for (let index = 0; index < prenoms.length; index++) {
    
//     if (prenoms[index].length>5) {
//         longPrenoms.push(prenoms[index]);
        
//     }
// }
// console.log(prenoms);
// console.log(longPrenoms);

// EXO 5 en js créer un tableau qui se nomme 'sommes' avec une multitude de valeurs numérique ensuite créer un tableau qui se nomme 'grossesSommes' et si la valeur excède 60, pousser les dabs ce tableau et les retirer du tableau sommes

let sommes = [14, 7 , 97, 65 , 247 , 67 , 101 , 4 , 34 ,78 , 1 ,900 , 0, 11 , 32 , 23 , 61];

let grossesSommes =[];

for (let index = 0; index < sommes.length; index++) {
    
    if (sommes[index]>60) {
        grossesSommes.push(sommes[index]);
        sommes.splice(index, 1);
        index--; 
    }
}
console.log(sommes);
console.log(grossesSommes);