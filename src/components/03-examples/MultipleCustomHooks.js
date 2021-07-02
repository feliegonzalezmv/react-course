import React from 'react';
import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch';
import './hooks.css';

export const MultipleCustomHooks = () => {
  const { counter, increment } = useCounter(1);

  const { loading, data } = useFetch(
    `https://www.breakingbadapi.com/api/quotes/${counter}`
  );

  const { quote, author } = !loading && data && data.length > 0 && data[0];

  return (
    <div>
      <h1>BreakingBad quotes</h1>
      <hr />

      {loading ? (
        <div className="alert alert-info text-center">loading...</div>
      ) : (
        <blockquote className="blockquote text-right">
          <p className={'mb-0'}>{quote}</p>
          <footer className="blockquote-footer">{author}</footer>
        </blockquote>
      )}

      <button className={'btn btn-primary'} onClick={() => increment(1)}>
        Next quote
      </button>
    </div>
  );
};
