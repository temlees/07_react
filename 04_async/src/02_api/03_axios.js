import axios from "axios"
const callApi = ()=>{

    fetch("https://jsonplaceholder.typicode.com/users")
    .then(r=>r.json()).then(d=>console.log(d));
}

const axiosCall = ()=>{
// axios 는 자동으로json  처리해주기 때문에
//res.data를 하게되면 바디에 있는거 쓸 수 있다 
//json형식으로 넘겨준다.
//단점 : 무겁다..  외부 install받기 떄문
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then(res => console.log(res.data));
    
}

/*
    Axios : 요청 처리에 대한 여러가지 기능을 제공해준다.
    따라서 패키지 크기가 상대적으로 더 크고 무겁다..

    Fetch : 기본 브라우저 내장 API이다
    가볍고 빠르다. 하지만 여러 처리를 수동으로 해주어야한다..
*/

export const AxiosCallComponent = ()=>{
    return(
        <>
            <button onClick={callApi}>fetch요청</button>
            <button onClick={axiosCall}>axios요청</button>

        </>
    )
}
