console.log(123);
function fun(arr){
    const len = arr.length,
    res = [];
    f([],len);
    return res;

    function f(curArr, remainLen){
        if(remainLen){
            const pos = len -remainLen;
            f([...curArr], remainLen - 1);
            f([...curArr, arr[pos]], remainLen - 1);
        }else{
            if(curArr.length < 2) return res.push(curArr.join('-'));
        }
    }
}

console.log(fun([3,2,6,9]));
