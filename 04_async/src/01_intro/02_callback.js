
//콜백함수 함수안에서 다른함수 호출
function increse(number,callback){
    setTimeout(()=>{
        const result = number +10;
        //함수가 채워지면 truesy
        if(callback){
            callback(result);
        }
    },1000)
}
increse(0,result=>console.log(result));

/*
    여러번 순차적으로 결과물을 콜백함수로 전달하기 위해서는
    중첩을 사용해서 호출할 수 있다...
    하지만 이러한 형태는 가독성도 좋지않고 유지보수도 힘들기 떄문에
    피해야하는 패턴... 콜백지옥이라 불린다
*/

increse(0,result=>{
    console.log(result);
    increse(result,result=>{
        console.log(result);
        increse(result,result=>{
            console.log(result);
        })
    })
})