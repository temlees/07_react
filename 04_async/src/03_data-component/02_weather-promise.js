// https://openweathermap.org/current

import { useEffect, useState } from "react";

export const Weather = () =>{
    const API_KEY = '207a52923e0d2e1ca4acea1ce48628fc';

    const [position,setPosition] = useState({})//현재 위치저장
    const [cityName,setCityName] = useState("")// 현재 도시 이름
    const [weather,setWeather]= useState({});//날씨 정보 저장
    const [wind,setWind] = useState({});//바람정보 저장
    //   비동기 호출 순서 
    //1. 경도외 위도 호출 api  2. 날씨정보 호출 api
    //promise를 쓴이유 : 호출순서를 지키게 하기 위해 then으로 순서 연결
    useEffect(()=>{
        new Promise((resolve,reject)=>{
            //현재 사용자의 위치를 가져오는 기본 api
            navigator.geolocation.getCurrentPosition((currentPosition)=>{
                setPosition({
                    // longitudere경도, latitude위도
                    longitude : currentPosition.coords.longitude,
                    latitude : currentPosition.coords.latitude
                });
                //정상적인결과물 
                resolve(currentPosition.coords);
            })
        }).then(coords=>{
                fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${coords.latitude}&lon=${coords.longitude}&appid=${API_KEY}`)
                .then(response=>response.json())
                .then(data=>{
                    console.log(data);
                    setCityName(data.name);
                    setWeather(data.weather[0]);
                    setWind(data.wind);
                });
        })
    },[])
    return (
        <>
          <h3>오늘의 날씨</h3>
          <h4>{`경도 : ${position.longitude} 위도 : ${position.latitude}`}</h4>
          <h4>{`조회 도시 : ${cityName}`}</h4>
          <h4>{`날씨 : ${weather.main} 날씨 설명 : ${weather.description}`}</h4>
          <h4>{`풍향  : ${wind.deg}도 풍속 : ${wind.speed}m/s`}</h4>
        </>
      );


}