

//비동기에 then,await등을 안쓰면 기다려주지 않는다.

/*
    Promise : 비동기 작업의 결과를 처리하는 객체
    async/await : 비동기 작업을 동기적으로 실행하는 것 처럼 보이게 만드는 구문
    then()과 await : promis의 결과를 사용할 때
    then()을 사용하거나,async함수 내에서 await 로 처리할 수 있음...
*/

function increase(number){
    const promise = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const result = number +10;
            if(result >50){
                const e = new Error("number to big");
                return reject(e)
            }
            resolve(result);
        },1000);
    })

    return promise;
}

//async : 비동기 함수를 정의
//resolve 반환시 try  , reject반환시 catch 로 간다
async function run() {
    try {
        //await 없으면  안기다리고 Promise { <pending> }나온다 
        let result = await increase(1);
        console.log(result);
         result = await increase(2);
        console.log(result);
         result = await increase(3);
        console.log(result);
        result = await increase(4);
        console.log(result);
        result = await increase(5);
        console.log(result);
        result = await increase(6);
        console.log(result);
        return result;
        
    } catch (e) {
        console.log(e," 가 발생함")
    }
}

// async await 결과값 받아오는 법

const value = async ()=>{
    const runValue = await run();
    console.log("value :" + runValue);
}

const result = value();
console.log(result)