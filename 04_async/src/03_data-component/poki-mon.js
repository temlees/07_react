// https://pokeapi.co/api/v2/{endpoint}/
//https://pokeapi.co/api/v2/pokemon/ditto
//name,url,

import React, { useEffect, useState } from 'react';

const PokemonComponent = () => {
    const [pokemonData, setPokemonData] = useState(null); // 포켓몬 데이터를 저장하는 상태
    const [loading, setLoading] = useState(true);         // 로딩 상태
    const [error, setError] = useState(null);             // 에러 상태

    // 포켓몬 API에서 데이터를 가져오는 비동기 함수
    const fetchPokemon = async () => {
        try {
            const response = await fetch('https://pokeapi.co/api/v2/pokemon/pikachu');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setPokemonData(data);   // API에서 받은 데이터를 상태로 설정
            setLoading(false);      // 로딩 완료
        } catch (error) {
            setError(error.message);
            setLoading(false);      // 로딩 실패
        }
    };

    useEffect(() => {
        fetchPokemon();  // 컴포넌트가 마운트될 때 API 호출
    }, []);

    if (loading) return <p>Loading...</p>;  // 데이터를 로딩 중일 때 표시
    if (error) return <p>Error: {error}</p>; // 에러가 발생할 경우 표시

    // 포켓몬 데이터를 화면에 표시
    return (
        <div>
            <h1>{pokemonData.name}</h1>
            <img src={pokemonData.sprites.front_default} alt={pokemonData.name} />
            <p>Height: {pokemonData.height}</p>
            <p>Weight: {pokemonData.weight}</p>
            <h3>Abilities</h3>
            <ul>
                {pokemonData.abilities.map((ability, index) => (
                    <li key={index}>{ability.ability.name}</li>
                ))}
            </ul>
        </div>
    );
}

export default PokemonComponent;