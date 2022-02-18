const startOfRange = 2;
const endOfRange = 100;

// !!! deux fonctions utilitaires non codées par moi-même trouvées sur google
// une pour pouvoir test si un nombre est premier
// l'autre pour reverse un nombre

function primeNumber(nbr) {
    for(var i = 2; i < nbr; i++)
      if(nbr%i === 0) return false;
    return nbr > 1;
}

const reversedNum = num => parseInt(num.toString().split('').reverse().join('')) * Math.sign(num)


// fonction pour renvoyer un tableau contenant tous les nombres premiers de la range pouvant être lut dans les deux sens.
function backwardsPrime(start, end) {

    // on créer un tableau de nombres premiers compris dans la range passée en paramètre
    const primeNumberArray = []

    for (let i=start; i < end; i++) {
        if (primeNumber(i)) {
            primeNumberArray.push(i)
        }
    }

    // on garde uniquement les nombres qui peuvent être lut dans l'autre sens
    const backwardsPrimeArray = primeNumberArray.filter((n) => {
        return primeNumber(reversedNum(n))
    })
    
    console.log(backwardsPrimeArray)  
}

backwardsPrime(startOfRange, endOfRange)

// Réalisé en 17 minutes