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

// let sommes = [14, 7 , 97, 65 , 247 , 67 , 101 , 4 , 34 ,78 , 1 ,900 , 0, 11 , 32 , 23 , 61];

// let grossesSommes =[];

// for (let index = 0; index < sommes.length; index++) {

//     if (sommes[index]>60) {
//         grossesSommes.push(sommes[index]);
//         sommes.splice(index, 1);
//         index--; 
//     }
// }
// console.log(sommes);
// console.log(grossesSommes);

// EXO 6 en js trier le contenu du tableau "données" en vérifiant le type de chaque donnée puis créer 4 tableaux : 'typeString' , 'typeNumber' , 'typeObject' , 'typeAutre et finir par vider le tableau "données" en redistribuant avec l'aide de condition et d'une function prédéfinie trouvé sur internet dans les bons tableau

// let donnees = [14, 7 , 97, {} , "247" , 67 , 101 , true , 34 ,78 , [] ,'coding school' , 0, 11 , 32 , "italie" , 61,null,'cent',100];

// let typeString = []
// let typeNumber = []
// let typeObject = []
// let typeAutre = []

// for (let i = 0; i < donnees.length; i++) {
//     let element = donnees[i];

//     if (typeof element === 'string') {
//         typeString.push(element);

//     }
//     else if (typeof element === 'number') {
//         typeNumber.push(element);

//     }
//     else if (typeof element === 'object') {
//         typeObject.push(element);

//     }
//     else {
//         typeAutre.push(element);

//     }
// }

// console.log(donnees);
// console.log(typeString);
// console.log(typeNumber);
// console.log(typeObject);
// console.log(typeAutre);

// EXO 7 en js créer un tableau avec les prénoms de toute la classe, et mettez leur première lettre en majuscule, la dernière aussi et le reste en minuscule

// let prenoms = ['quentin', 'bachir', 'sebastien', 'brandon', 'charlotte', 'denis', 'yassine'];

//   let prenomsmodifier = prenoms.map(nom => {
//   let premierelettre = nom.charAt(0).toUpperCase();
//   let dernierelettre = nom.charAt(nom.length - 1).toUpperCase();
//   let lettredumilieu = nom.slice(1, -1).toLowerCase();
//   return `${premierelettre}${lettredumilieu}${dernierelettre}`;
// });

// console.log(prenomsmodifier);

// EXO 8 en js créer une variable avec cette valeur = "Bonjour à tous" ensuite faire en sorte d'avoir ce résultat à la fin : BoNjOuR A ToUs

// let bonjour = "Bonjour à tous";

// METTRE EN MAJ :

// let bonjourenmajuscule = bonjour.toUpperCase();
// console.log(bonjourenmajuscule);

// let messagentiermaj = "";
// for (let i = 0; i < bonjour.length; i++) {
//   if (i % 2 === 0) {
//     messagentiermaj += bonjour[i].toUpperCase();
//   } else {
//     messagentiermaj += bonjour[i].toLowerCase();
//   }
// }

// console.log(messagentiermaj);

// EXO 9 aie

// EXO 10 WHAT? Quel résultat?

// exo 11 en js créer un tableau avec 10 prénoms puis créer un tableau avec 10 chiffres entre 0 et 20 ensuite combiner ces deux tableau  petit indice : console.log(`${lepremiereprenom} a eu ${lepremierchiffre}/20 en Math`

let prenom = ['quentin', 'bachir', 'sebastien', 'brandon', 'charlotte', 'denis', 'yassine','adil','enide','victor'];

let chiffre = [0,3,5,6,8,11,12,15,18,20]

for (let i = 0; i < prenom.length; i++) {
  console.log(`${prenom[i]} a eu ${chiffre[i]}/20 en Math`)
  
}