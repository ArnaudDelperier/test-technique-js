const testTrue = [
    [5, 3, 4, 6, 7, 8, 9, 1, 2],
    [6, 7, 2, 1, 9, 5, 3, 4, 8],
    [1, 9, 8, 3, 4, 2, 5, 6, 7],
    [8, 5, 9, 7, 6, 1, 4, 2, 3],
    [4, 2, 6, 8, 5, 3, 7, 9, 1],
    [7, 1, 3, 9, 2, 4, 8, 5, 6],
    [9, 6, 1, 5, 3, 7, 2, 8, 4],
    [2, 8, 7, 4, 1, 9, 6, 3, 5],
    [3, 4, 5, 2, 8, 6, 1, 7, 9],
]

const testFalse = [
    [5, 3, 4, 6, 7, 8, 9, 1, 2],
    [6, 7, 2, 1, 9, 0, 3, 4, 8],
    [1, 0, 0, 3, 4, 2, 5, 6, 0],
    [8, 5, 9, 7, 6, 1, 0, 2, 0],
    [4, 2, 6, 8, 5, 3, 7, 9, 1],
    [7, 1, 3, 9, 2, 4, 8, 5, 6],
    [9, 0, 1, 5, 3, 7, 2, 1, 4],
    [2, 8, 7, 4, 1, 9, 6, 3, 5],
    [3, 0, 0, 4, 8, 1, 1, 7, 9],
]


function validSolution(board, box){
 
    // le résulat finale qui sera renvoyé
    let result = true
    
    for(let i=0; i < board.length; i++) {  
        // pour chaque ligne on test si on a un doublon ou un 0
        if (checkDuplicate(board[i])) {
            result = false
        }

        // pour chaque colonne on test si on a un doublon ou un 0
        if (checkDuplicate(getColumn(board, i))) {
            result = false
        }

    }

    // Pour chaque tableau de 3x3 qui compose le tableau principal on test si on a un doublon ou un 0
    for (let i=0; i < box.length; i++) {
        if (checkDuplicate(box[i])) {
            result = false
        }
    }

    return result 
}

// fonciton pour récupérer une colonne du tableau
function getColumn(board, index) {

    const column = []

    for (let i=0; i < board.length; i++) {
        column.push(board[i][index])
    }

    return column
}

// fonction pour découper un tableau de 9x9 en en 9 tableaux de 3x3
const getBox = (board) => {
    const boxArr = [[], [], [], [], [], [], [], [], []]

    function fillBox(k, i, j, board, boxArr) {
        if (j < 3) {
            boxArr[k].push(board[i][j])
        }

        if (j >= 3 && j <= 5) {
            boxArr[k+1].push(board[i][j])
        }
    
        if (j > 5) {
            boxArr[k+2].push(board[i][j])
        }
    }


    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < 9; j++) {
            if (i < 3) {
                fillBox(0, i, j, board, boxArr)
            }
            if (i >= 3 && i <= 5) {
                fillBox(3, i, j, board, boxArr)
            }
            if (i > 5) {
                fillBox(6, i, j, board, boxArr)
            }
        }   
    }

    return boxArr
  }

// fonction pour vérifier qu'il n'y ai pas de doublons ou de 0 dans un tableau
function checkDuplicate(arr) {
    if (arr.includes(0)) return true
    if (new Set(arr).size !== arr.length) return true
    return false
}

console.log(validSolution(testTrue, getBox(testTrue)))
console.log(validSolution(testTrue, getBox(testFalse)))


// Réalisé en 2 heures !!!
// 30 minutes pour vérifier les lignes/colonnes et 1h30 pour les blocs de 3x3
