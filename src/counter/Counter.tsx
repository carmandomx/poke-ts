import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import { increment, decrement, fetchPokemonByName } from './counterSlice'


const Counter = () => {

    const count = useAppSelector(state => state.counter.value);
    const loading = useAppSelector(state => state.counter.loading);
    const pokemons = useAppSelector(state => state.counter.pokemons);
    const dispatch = useAppDispatch()
    useEffect(() => {
      

      dispatch(fetchPokemonByName({
        name: 'pikachu'
      }))
    
      
    }, [dispatch])

    // useEffect(() => {
    //   if (token) {
    //     navigate('/my-app-ultra-secreta')
    //   }
    // }, [token])
    

    if (loading === 'idle' || loading === 'pending') {
      return (<h3>ESTOY AGRRANDO SEÑAL</h3>)
    }


    const list = pokemons.map((value) => <p key={value.id}> {value.name} </p>)

  return (
    <div>
        <p>{ count }</p>
        {list}
        <button onClick={() => {
            dispatch(increment())
        }}>+</button>
        <button onClick={() => {
            dispatch(decrement());
        }}>-</button>
    </div>
  )
}

export default Counter