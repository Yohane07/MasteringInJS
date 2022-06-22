
// OBJET WINDOWS/ a revoir à partir du windows.setInterval();
/*
function aleatoire(maxalea) {
    return Math.floor(Math.random()*maxalea);
}

var nombreAleatoire = aleatoire(2);

var reponse = window.prompt("Devinez mon nombre");

while (reponse != nombreAleatoire) {
    if (reponse < nombreAleatoire) {
        alert("Ressaies c'est trop bas, le nombre était " + nombreAleatoire )
    } else {
        alert("Ressaies c'est trop haut, le nombre était " + nombreAleatoire)
    }
    reponse = window.prompt("Devinez mon nombre");
}
alert("Bien joué champion " + nombreAleatoire);

 */

// LE DOM:

// var p = document.querySelector('.paragraph');


/* L'IDEE était d'avoir une phrase qui change toute les secondes ou les dis secondes un peu comme une conversation

var element = ['hey Creative', 'You good ?', 'Welcome'];

function boucle (){
        for (var i; i<element.length; i++){
           console.log(element);
        }
    window.setInterval(function (){
        p.classList.toggle('element')
    }, 1000)
}

boucle();

*/

// window.setInterval(function (){
//     p.classList.toggle('orange')
// }, 1000)

// ------IIIIIIIICCCCCCCIIIIIIII-------------------
/*var para = document.querySelectorAll('p');

for (var i = 0; i < para.length; i++){
    (function(p){
        window.setInterval(function (){
            p.classList.toggle('orange')
        }, 1000)
    })(para[i]);
} */

//Juste pour être suur que ça fonctionne
//

var ul = document.querySelector('ul');
var li = document.querySelector('li');

//ul.querySelector('li:nth-child(3)')

// ------LES ÉVÈNEMENTS ------------------
// var p = document.querySelector('.paragraph');
// var blueir = function (){
//     p.classList.toggle('darkblue')
// }
//
// p.addEventListener('click',blueir);
//
// //- Donc on va faire en sorte que le changement de couleur s'effectue sur sur tous les paragraphes
//
// var lesp= document.querySelectorAll('p');
//
// for (var i = 0; i<lesp.length;i++){
//     var p = lesp[i];
//     var orangeIt= function (){
//         this.classList.toggle('orange');
//     }
//     p.addEventListener('click', orangeIt);
// }

// Avoir une confirmation avant de quitter le site et que si le user clique sur annuler qu'il annule
/*
var liens = document.querySelectorAll('a.externe');

for (var i = 0; i<liens.length; i++){
    var lien = liens[i];
   lien.addEventListener('click', function (monevenement){
        var reponse= window.confirm("Voulez-vous vraiment quittez");
        monevenement.stopPropagation();
       console.log('J ai aussi cliqué sur le lien',monevenement);
       if (reponse==false){
           monevenement.preventDefault();
       }
   })
}

document.querySelector('p').addEventListener('click', function (evenement){
    console.log('J ai aussi cliqué sur le paragraphe',evenement);
})
//Naturellement bien entendu si y a un addEventListerner y a cernantinement un removeEventListerner quelque part

*/

// ------LES FORMULAIRES & LES ÉVÈNEMENTS------------------

/* keyCode , fromCharCode, event: keyup, keydown that stop taping others letters on the keybord, then there is a lot
kind of Event as EventListener, KeyboardEvent
*

document.querySelector("#a").addEventListener('keydown', function (event){
    var lettre = String.fromCharCode(event.keyCode);
    if (lettre !== "A"){
        event.preventDefault();
    }

})


document.querySelector('#form').addEventListener('submit', function (event){
    var cp = document.querySelector('#cp');
    if (cp.value.length !== 5){
        window.alert('La taille du code postal n\'est pas égale à 5');
        event.preventDefault();
    }
})

document.querySelector('#form').addEventListener('submit', function (event){
    var mention = document.querySelector("#mentionsLegales");

    if (mention.checked === false){
        window.alert('Veuillez accepter les mentions légales pour continuer');
        event.preventDefault();
    }
})


document.querySelector('#form').addEventListener('submit', function (event){
    var age = parseInt(document.querySelector('#age').selectedOptions[0].value, 10)
    if (age < 18){
        window.alert('Vous ne pouvez pas passez le permis');
        event.preventDefault();
    }
})
*/

/* Lorsqu'on clique sur le bouton que ça affiche le spoiler et que le bouton disparaisse après qu'on ait
 cliqué dessus

var spoiler = document.querySelector('.spoiler button');

  spoiler.addEventListener('click', function (){
    this.nextElementSibling.classList.add('visible');
    this.parentNode.removeChild(this);
})

// On  refait un code qui permet de gérer tous ceux qui ont la classe spoiler
 */

var spoilerAll = document.querySelectorAll('.spoiler');

var createSpoilerButton = function (spoiler){
    var span = document.createElement('span');
    span.className = 'spoiler-content';
    span.innerHTML = spoiler.innerHTML;

    var button = document.createElement('button');
    button.textContent='Afficher le spoiler';

    spoiler.appendChild(button);
    spoiler.appendChild(span)
}

for ( var e = 0; e <spoilerAll.length; e++){
    createSpoilerButton(spoilerAll[e]);
}