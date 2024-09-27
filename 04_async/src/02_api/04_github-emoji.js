import {useState} from "react";

const SearchBox =({setImgUrl})=>{
    const [emojiName,setEmojiName]= useState('');
    
    const  onChangeHandler =e=>setEmojiName(e.target.value);

    const  onClickHandler= ()=>{
        fetch("https://api.github.com/emojis")
        .then(r=>r.json()).then(result=>setImgUrl(result[emojiName]));
        // []표기법  emojiName 을 key로 접근
    }
    return(
        <>
            <input type="text" onChange={onChangeHandler}/>
            <button onClick={onClickHandler}>검색</button>
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