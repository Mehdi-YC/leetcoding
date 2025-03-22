function linear_search(list,target){
//write a forloop that goes through the list

    for (let x = 0; x < list.length; x++){
        if (list[x] === target){
            return x
        }
    }
    return -1
}


function binary_search(list,target){
    if (target<list[0] || target > list[list.length-1]) return -1
    let start = 0
    let end = list.length
    let cursor = Math.floor((start+end)/2)
    while (start <= end){        
        if (list[cursor] === target) return cursor
        if (list[cursor] < target){
            start = cursor;
            cursor = Math.floor((start+end)/2)
        }
        else if (list[cursor] > target){
            end = cursor;
            cursor = Math.floor((start+end)/2)
        }
        
    }
    return -1
}

function two_crystal_balls(list){
    let jump = Math.floor(Math.sqrt(list.length))
    let i = jump;
    
    while (i < list.length){
        if (list[i]) break
        i = i + jump
    }
    
    if (i >= list.length) return -1

    i = Math.min(i, list.length - 1);

    for(let j = i - jump; j <= i; j++){
        if (list[j]) return j  
    }
    
    return -1  
}

function bubble_sort(list){
    for (let i=0;i<list.length;++i){
        for(let j=0;j<list.length-1-i;++j){
            if (list[j+1]<list[j]){
                list[j+1] = list[j+1]+list[j]
                list[j] = list[j+1]-list[j]
                list[j+1] = list[j+1]-list[j]
            }
        }
    }

    return list
}





//wrting tests for the function

function assertEqual(actual, expected, message) {
    console.assert(actual === expected, `${message} | Expected: ${expected}, but got: ${actual}`);
}

// Linear Search
assertEqual(linear_search([1,2,3,4,5,6,7,8,9,10], 5), 4, "Test 1: Linear Search");
assertEqual(linear_search([1,2,3,4,5,6,7,8,9,10], 10), 9, "Test 2: Linear Search");
assertEqual(linear_search([1,2,3,4,5,6,7,8,9,10], 11), -1, "Test 3: Linear Search");

// Binary Search
assertEqual(binary_search([1,2,3,4,5,6,7,8,9,10], 11), -1, "Test 1: Binary Search");
assertEqual(binary_search([1,2,3,4,5,6,7,8,9,10], 6), 5, "Test 2: Binary Search");
assertEqual(binary_search([1,2,3,4,5,7,8,9,10], 3), 2, "Test 3: Binary Search");

// Two Crystal Balls
assertEqual(two_crystal_balls([false,false,false,true,true]), 3, "Test 1: Two Crystal Balls");
assertEqual(two_crystal_balls([true,true,true,true,true]), 0, "Test 2: Two Crystal Balls");
assertEqual(two_crystal_balls([false,false,false,false,false]), -1, "Test 3: Two Crystal Balls");

const list = new Array(100).fill(false).concat(new Array(10).fill(true));
assertEqual(two_crystal_balls(list), 100, "Test 4: Two Crystal Balls");

// Bubble Sort
assertEqual(JSON.stringify(bubble_sort([1,38,8,21,9,7])), JSON.stringify([1,7,8,9,21,38]), "Test 1: Bubble Sort");
