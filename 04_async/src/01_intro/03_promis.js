/*
    promis는 콜백 지옥과 같은 코드가 형성되지않게 
    (비동기 통신간의 순서를 정하기 쉽게) 하는 방법으로
    es6에서 도입

    promise 객체 생성 이유 ?
    1. 비동기 처리함수를 실행 시 성공,실패에 대한 처리가 용이하다..
    2. promise 객체가 제공하는 메소드를 사용하기 위함
    (콜백 지옥 상황을 해소해 주기 때문... 가독성이 좋고 메소드 체이닝 방식 제공)
*/

const increse  = (number) => {
    //프로미스 객체는 몸체내용을 다 동기로 처리(기다려줌..)
    //resolve => 성공시,reject=>실패시  : 프로미스가 제공해주는 매개변수 
    const promise = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const result = number+10;
            if(result > 50){
                const e  = new Error("NumberToBig");
                return reject(e);
            }
            resolve(result);
        },1000)
    })

    return promise;
}

//프로미스 객체는 외부에서 사용하지 못한다.
//프로미스에 접근하는 메소드를 사용한다.
console.log(increse(0));

//체이닝
// promise객체는 then메소드를 사용하여 비동기 작업의 결과를 처리

increse(0).then(number =>{
    console.log(number);
    return increse(number);
}).then(number=>{
    console.log(number);
    return increse(number);  
}).catch(e=>console.log(e,"가 발생했네"));