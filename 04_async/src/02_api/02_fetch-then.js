//response는 요청한 모든 내용 
// json은 response로 가져온  본문에있는 내용이 key value로 나오게된다
//cont 앞에 async붙이면 await 쓸 수 있다 
 export const ApiComponent = ()=>{
    const callApi = ()=>{
        fetch( "https://jsonplaceholder.typicode.com/users")
        .then(response=>{
            console.log(response);
            return response.json();
        }).then(data =>{
            console.log(data);
        }).catch(error=>{
            console.log("API 호출 중 오류 발생",error);
        })
    }
    return(
        <>
            <button onClick={callApi}>api 호출</button>
        </>
    )
}