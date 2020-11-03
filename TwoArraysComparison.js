//Rishi Dosaj
//Given 2 arrays, create a function that let's a user know (true/false) whether these two arrays contain any common items
//For example:
//const array1 = ['a', 'b', 'c', 'x'];
//const array2 = ['z', 'y', 'i'];
//should return false
//------
//const array1 = ['a', 'b', 'c', 'x'];
//const array2 = ['z', 'y', 'x'];
//should return true

const array1 = ['a', 'b', 'c', 'x'];
const array2 = ['z', 'a', 'k'];

//not the best approach due to O(n * m) complexity
function ArrayCompare (arrayX, arrayY) {
    for (let i =  0 ; i < arrayX.length; i++) {
        for (let j = 0; j < arrayY.length; j++) {
            console.log(arrayX[i], arrayY[j]);
            if (arrayX[i] == arrayY[j]){
                console.log("True");
                return true;
            }
        }
    }
    console.log("False");
    return false;
}
//ArrayCompare(array1, array2);

//solution with better complexity O(n + m)
//loop through first array, create a table, then loop through second array and check for duplicate
function ArrayCompare2 (arrayX, arrayY){
    let map = {};
    for (let i = 0; i < arrayX.length; i++) {
        if (!map[arrayX[i]]){
            const item = arrayX[i];
            map[item] = true;
        }
    }
    for (let j = 0; j < arrayY.length; j++) {
        if(map[arrayY[j]]) {
            return true;
        }
    }
    return false

}
ArrayCompare2(array1, array2);