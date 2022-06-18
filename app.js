
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
var para = document.querySelectorAll('p');

for (var i = 0; i < para.length; i++){
    (function(p){
        window.setInterval(function (){
            p.classList.toggle('orange')
        }, 1000)
    })(para[i]);
}

//Juste pour être suur que ça fonctionne
//