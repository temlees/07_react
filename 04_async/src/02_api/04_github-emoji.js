import {useState} from "react";

const SearchBox =({setImgUrl})=>{
    const [emojiName,setEmojiName]= useState('');
    
    return(
        <>
            <input type="text" onChange={onChangeHandler}/>
        </>
    )
}


export const EmojiContainer = ()=>{
    const [imgUrl,setImgUrl] = useState('');

    const ImageBox =({imgUrl})=>{
        //트루시 펄시 그대로 쓰지 못하기 때문에 확실히 바꿔주고 쓴다
        return !!imgUrl? <img src={imgUrl} alt="이모지"/> : <h1>텅</h1>;
    }

    return(
        <>
            <SearchBox setImgUrl={setImgUrl}/>
            <br/>
            <ImageBox imgUrl={imgUrl}/>
        </>
    )
}