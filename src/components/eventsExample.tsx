import React, { FC, useState, useRef } from 'react';

const EventsExamle: FC = () => {
  const [value, setValue] = useState<string>('');
  const inputRef = useRef<HTMLInputElement>(null);
  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log('Управляемый', value);
    console.log('Не управляемый', inputRef?.current?.value);
  };
  return (
    <div>
      <input value={value} onChange={changeHandler} />
      <input ref={inputRef} />
      <button onClick={clickHandler}>Send</button>
    </div>
  );
};

export default EventsExamle;
