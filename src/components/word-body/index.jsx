import React from 'react';

const WordBody = ({ word, data }) => {
  return (
    <div className="grid grid-cols-1 gap-4 pt-10">
      <h1 className="text-slate-900 font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-center dark:text-white uppercase">
        {word}
      </h1>

      {data?.map((variant, index) => (
        <div key={index}>
          {variant.meanings?.map((meaning) => (
            <div key={meaning.partOfSpeech}>
              <div className="flex justify-between">
                <h2 className="text-xl font-bold">
                  <span className="capitalize">{word}</span>
                  <span className="uppercase ml-2">({meaning.partOfSpeech})</span>
                </h2>

                <div>
                  <button className="btn btn-circle">UK</button>
                  <button className="btn btn-circle">USA</button>
                </div>
              </div>

              <ul>
                {meaning.definitions.map((definition) => (
                  <li key={definition.definition}>
                    <p>- {definition.definition}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="divider" />
        </div>
      ))}
    </div>
  );
};

export default WordBody;
