/**
 * 자바스크립트를 사용하면 필요할 때 
 * 서버에 네트워크 요청을 보내고 새로운 정보를 받아올 수 있다.
 * 과거에 ajax를 이용해 페이지 새로고침 없이 (비동기)
 * 서버에 데이터를 가져올 수 있었고 axios 외에 fetch를 이용해 받아올 수 있다.
 * fetch는 ajax의 단점을 개선하고 좀 더 현대적인 방식으로 네트워크 요청을처리
 * 따라서 최신 웹 어플리케이션은 fetch를 사용하기 권장한다.
 * 
 * 
 * 기본 사용 방법 
 * 
 * 
 * fetch의 반환값은 promise 객체이다...
 * let promise = fetch(url,[option]);
 * 
 * url : 접근하고자하는 url
 * option : http method 나 headers, body 내용을 객체로 지정할 수 있다
 * 아무것도 넣지 않으면 기본 get방식으로 전송
 * 
 * -- 샘플 api
 *  https://jsonplaceholder.typicode.com
 * 
 */

async function callApi(){
    const promise = fetch( "https://jsonplaceholder.typicode.com/users")

    //프로미스를 await로 꺼내줘야 값이 나온다
    const response = await promise;
    console.log(response);

    //프로퍼티형식으로 되어있기 때문에 .status로 뽑아올 수 있다.
    //반환 값 200 : 성공 400:서버실패 500: 개발자 실수
    console.log(`응답 상태 : ${response.status}`);

    console.log("응답 해더")
    for(let[key,value]of response.headers){
        console.log(`${key}: ${value}`);
    }

    //json은 비동기적함수라 await로 담아준다.
    //key value 객체 배열 구조
    const json = await response.json();
    console.log(json)

    json.forEach(element =>{
        console.log(element);
    })

    /*json(javascript object notation)은 데이터를
    구조화 하여 교환하기 위한 경량 데이터 형식이다...
    사람과 기계 모두 읽고 쓰기 쉽게 설계되어있으며
    주로 웹 어플리케이션에서 서버와 클라이언트 사이의 데이터 전송에 사용된다
    특징으로는 
    1. 텍스트 기반의 형식
    2. 키 - 값 쌍으로 데이터를 표현
    3. 다양한 언어에서 지원
    4.다양한 데이터 타입을 지원 문자,boolean 등등 자바에서 사용가능
*/
}

callApi();