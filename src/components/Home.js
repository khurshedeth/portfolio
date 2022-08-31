let arr = [2 , 3, 4, 6, 8];
let arr2 = arr.map((curElem) => curElem * 2).filter((curElem) => curElem >10).reduce((accumultor,curElem) =>{
    return accumultor += curElem;
})


console.log(arr2);





 