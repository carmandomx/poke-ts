import React from 'react';
import { Input } from '@mui/material'
import './App.css';
import { useForm, SubmitHandler, Controller } from 'react-hook-form'
import Counter from './counter/Counter';

type IForm = {
  pokeName: string;
}

function App() {

  const { handleSubmit, control, watch } = useForm<IForm>({
    defaultValues: {
      pokeName: ''
    }
  });

  console.log(watch('pokeName'))

  const onSubmit: SubmitHandler<IForm> = data => {
    console.log(data);

  }

  return (
    <div className="App">
      {/* <form onSubmit={handleSubmit(onSubmit)}>
        <Controller 
          name='pokeName'
          control={control}
          render={({field}) => <Input placeholder='Nombre del Pokemon'  {...field} />}
        
        />

      <input type='submit' />
      </form> */}

      <Counter />
    </div>
  );
}

export default App;
