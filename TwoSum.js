//Rishi Dosaj
//Given an array of integers, find a matching pair that is equal to the sum

//solution with O(n^2) time
function TwoSum (array, sum) {
    for (let i = 0; i < array.length; i++){
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] + array [j] === sum) {
                console.log("FOUND ", array[i], array[j], "equal", sum);
                return true;
            }
        }
    
    }
    console.log("not found");
}

//TwoSum([2, 3, 4, 5, 10], 5);

//----

//faster solution
function TwoSum2 (array, sum) {
    const myset = new Set();
    for (let i = 0; i < array.length; i++) {
        if(myset.has(array[i])) {
            console.log("FOUND ", array[i], (sum - array[i]));
            return true;
        }
        myset.add(sum - array[i]);
    }
    console.log("does not exist");
    return false;
}

TwoSum2([2, 3, 4, 5, 10], 15);