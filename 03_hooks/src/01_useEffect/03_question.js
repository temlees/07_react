import {  useEffect,useState } from "react"



export const Profile = () =>{


    const [name,setName] = useState("");
    const[email,setEmail]=useState("");

    const[jname,setjName]= useState("");
    const[jemail,setjEmail]=useState("");


     useEffect(()=>{
            console.log("이름 또는 이메일이 변경되었습니다")
            console.log({name,email})
            
     },[name,email])

     useEffect(()=>{
        setTimeout(()=>{
        setName("홍길동");
        setEmail("hong@example.com")
       },1000)
     },[]
     
    )
     

    const namePlus = (e)=>{
        setName(e.target.value)
    }

    const emailPlus = (e)=>{
        setEmail(e.target.value)
    }

    const jujang =()=>{
        setjName(name)
        setjEmail(email)
    }


    return(
        <>
            <h3>프로필 입력</h3>
            <br/>
            이름:<input value={name} onChange={namePlus}/><br/>
            이메일 :<input value={email} onChange={emailPlus}/>
            <br/>
            <button onClick={jujang}>저장</button>
            <br/>
            <h3>프로필 미리보기</h3>
            <br/>
            <h1>이름 : {jname}</h1>
            <h1>이메일 :{jemail}</h1>
        </>
    )
}