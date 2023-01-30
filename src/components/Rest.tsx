import React, {useEffect, useState} from 'react';

import { Card, CardVariant } from './Card';
import { Counter } from './Counter';


const Rest: React.FC = () => {

  const [prop, setProp] = useState<number>(0)
  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setProp(+event.target.value)
  }


  return (
    <>
      <input onChange={changeHandler} type="number" className='d-block input-field text-center m-5 w-25 mx-auto bg-light'/>
      <Counter n={prop} console={(n) => console.log(n)}/>
      <Card width='400px' height='100px' margin='auto' variant={CardVariant.outlined} onClick={(num)=>console.log('click', num)}>
        <button className={'m-auto d-block align-middle'}>Button</button>
      </Card>
      <div><br /></div>


    </>
  );
}

export default Rest;
