import React, { useLayoutEffect, useRef } from 'react';
import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch';
import './layout.css';

export const Layout = () => {
  const { counter, increment } = useCounter(1);

  const pTag = useRef();

  useLayoutEffect(() => {
    console.log(pTag.current.getBoundingClientRect());
  }, []);

  const { loading, data } = useFetch(
    `https://www.breakingbadapi.com/api/quotes/${counter}`
  );

  const { quote } = !loading && data && data.length > 0 && data[0];

  return (
    <div>
      <h1>Layout effect</h1>
      <hr />

      <blockquote className="blockquote text-right">
        <p ref={pTag} className={'mb-0'}>
          {quote}
        </p>
      </blockquote>

      <button className={'btn btn-primary'} onClick={() => increment(1)}>
        Next quote
      </button>
    </div>
  );
};
