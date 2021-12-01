const fs = require('fs')
const path = require('path')



let mergedArrays = []

    for (let i = 0; i < 20; i++) {
        let read = fs.readFileSync(`./200k_words_100x100/out${i}.txt`, 'utf8').split('\n')
        mergedArrays.push(read)
    }

    // console.log(mergedArrays)               // [ [] [] []]

    let finalArray = mergedArrays.flat()
    // console.log(finalArray)           // [ , , , ]

//                                       1                     2                                         3           4
// let array = ['lol', 'lol', 'lol',  'lal', 'lel', 'lel', 'lul', 'lil', 'lyl', 'lol', 'lyl', 'lil', 'trf', 'lil', 'kek'];

    // let array = ['John', 'Pete', 'Mary', 'John', 'Mary', 'Mary']

function uniq(a) {
    // create a map from value -> count(value)
    let counts = a.reduce(function (o, k) {
        o[k] = o[k] ? o[k] + 1 : 1;
        return o;
    }, {});

    // find those that only appeared once
    return Object.keys(counts).filter(function (k) {
        return (counts[k] === 1);
    });
}

console.log(
    uniq(finalArray)
)

//
function uniqueValues() {
    let arr = []
    let set = new Set()
    let firstSize = set.size

    finalArray.forEach(value => {
        set.add(value)
        if (firstSize === set.size) arr.push(value)
        firstSize = set.size
    })

    arr.forEach(value => {
        set.delete(value)
    })

    console.log(set)
    console.log(arr)

let doubles = [...new Set(arr)]

console.log(doubles)
}


function existInAllFiles() {






}


function existInAtLeastTen() {

}

uniqueValues()      // no values that appears once???!!!!!!!!!!!!
// existInAllFiles()



// let mergeSet = new Set(mergedArrays)
//
// console.log(mergeSet)


//
// console.log(unique(array));

// let unique = [...array.reduce((once, x) => (once.delete(x) || once.add(x), once), new Set)]
// console.log(unique)
// console.log(unique.length)

// !!!!!!!!!!
// function existInAllFiles() {
//         let existence = finalArray.filter((value,index,self) => (self.indexOf(value) !== index ))
//         let finalExistence = [...new Set(existence)]
//         console.log(finalExistence)
//         console.log(finalExistence.length)
// }

//         //     1                    2                           3             4
// let array = ['lol', 'lol', 'lol',  'lal', 'lel', 'lel', 'lul', 'lil', 'lyl', 'lol', 'lyl', 'lil', 'trf', 'lil'];
//
// let res = array.filter((value,index,self)=> (self.indexOf(value) !== index ))
// let finalRes = new Set(res)
// console.log(finalRes)


// let arr = [2, 0, 6, 8, 10, 2, 6, 10]
//
// function func() {
//        let res =  Array.from(finalArray.reduce((once, x) => (once.delete(x) || once.add(x), once), new Set()))
//
//         console.log(res)
// }
//
//     func()

// const find2Unique2 = a => Array.from( a.reduce(
//     (once, x) => (once.delete(x) || once.add(x), once),
//     new Set()
// ))
//
// console.log( find2Unique2( [2, 0, 6, 8, 10, 2, 6, 10] ) );
//
// let data = [1, 2, 3, 5, 2, 1, 4];
//
// let res = finalArray.filter(function(v) {
//     return finalArray.filter(function(v1) {
//         return v1 === v;
//     }).length === 1;
// });
//
// console.log(res);

//
// console.log([...new Set(array.filter((value, index, self) => self.indexOf(value) === index))]
// );


// let uniqueCount = ["a","b","c","d","d","e","a","b","c","f","g","h","h","h","e","a"];
// let count = {};
// uniqueCount.forEach(function(i) { count[i] = (count[i]||0) + 1;});
// console.log(count);
//



// let filteredArray = []
//
// function uniqueValue(value) {
//     if (finalArray.indexOf(value) !== finalArray.lastIndexOf(value)) {
//         filteredArray.push(value)
//     }
//
// }
//
// finalArray.filter(uniqueValue)
//
// console.log(filteredArray)
//
// function un(value) {
//     console.log(finalArray.indexOf(value))
//     if (finalArray.indexOf(value) === finalArray.lastIndexOf(value))
//         return value
// }
// let unique = [...new Set(finalArray)]
//
//     // console.log(finalArray)
//     console.log(unique)

// let ops = ['monii', 'monii', 'foto', 'foto', 'mesto','kaka' ,'sraki', 'maki', 'maki', 'maki']
//
// function uniqueVal(value) {
//     if (ops.indexOf(value) === ops.lastIndexOf(value))
//
//     return value
// }
//
// let newarr = ops.filter(uniqueVal)
//
// console.log(newarr)

 // let unique = [...new Set(finalArray)]
//
//     // console.log(finalArray)
//     console.log(unique)

// let ops = ['monii', 'monii', 'foto', 'foto', 'mesto','kaka' ,'sraki', 'maki', 'maki', 'maki']

// function uniqueVal(value) {
//     if (finalArray.indexOf(value) === finalArray.lastIndexOf(value))
//
//     return value
// }
//
// let newarr = finalArray.some(uniqueVal)
//
// console.log(newarr)

//
// let ops = ['monii', 'monii', 'foto', 'foto', 'mesto','kaka' ,'mek' , 'maki', 'maki']
// //
// // let b = ops.indexOf()
// //
// // console.log(b)
// //
// let newarr = ops.filter((el, i, arr) => arr.indexOf(el) === arr.lastIndexOf(el))
// //
// console.log(newarr)

// let arr1 = [1, 2, 3, 5, 6, 7, 8, 11, 9, 14, 3, 99, 10, 5, 30, 28, 44, 55, 87, 4, 6]
// let arr2 = []
//
// for (let i = 0; i < arr1.length; i++) {
//     for (let j = i +1; j < arr1.length; j++) {
//         if (arr1[i] === arr1[j]) {
//             arr2.push(arr1[i])
//         }
//     }
// }
//
// console.log(arr2)
//
// console.log(i)
// let dataForm = data.split('\n')
// dataForm.forEach(value => arr.push(value))
// return arr
// })
//
// let newArr = arr.concat(...arr)
// console.log(newArr)
// }



// function getWords() {
//     let arr = []
//     for (let i = 0; i < 20; i++) {
//             fs.readFile(`./200k_words_100x100/out${i}.txt`, 'utf8', (err, data) => {
//             if (err) throw err
//             console.log(i)
//             let dataForm = data.split('\n')
//                 console.log(dataForm.length)
//             for (let j = 0; j<10000;j++) {
//                 arr.push(dataForm[j])
//             }
//                 console.log(arr)
//         })
//     }
//     console.log(arr)
//
// }
//
// getWords()
//
// function fillArr() {
//     let arr = []
//     for (let i = 0; i < 10; i++) {
//         arr.push(i)
//     }
//     console.log(arr)
// }
//
// fillArr()











