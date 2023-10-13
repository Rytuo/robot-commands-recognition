import * as React from 'react';
import './App.css';

const PROMPT_KEY = 'prompt';

export default function App() {

  const [result, setResult] = React.useState<string | undefined>();

  const onSubmit: React.FormEventHandler<HTMLFormElement> = e => {
    e.preventDefault();
    e.stopPropagation();
    const formData = new FormData(e.target as HTMLFormElement);
    setResult(`Sample text "${formData.get(PROMPT_KEY)}" №${Math.floor(Math.random() * 100)}`)
  };

  return (
    <div className='page'>
      <h1>
        Распознавание команд
      </h1>

      <form onSubmit={onSubmit} className='form'>
        <input name={PROMPT_KEY} placeholder='Введите текст'/>
        <button type='submit'>
          Отправить!
        </button>
      </form>
        {result && (
          <div>
            <h3>
              Результат:
            </h3>
            <p>
              {result}
            </p>
          </div>
        )}
    </div>
  );
};
