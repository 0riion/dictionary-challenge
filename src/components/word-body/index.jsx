import React from 'react';

const WordBody = ({ word, data }) => {
  return (
    <div className="grid grid-cols-1 gap-4 pt-10">
      <h1 className="text-slate-900 font-extrabold text-5xl tracking-tight text-center dark:text-white capitalize">
        {word}
      </h1>

      {data?.map((variant, index) => {
        const { meanings, phonetic, phonetics, sourceUrls, word } = variant;

        return (
          <>
            {index === 0 && (
              <>
                <div key={phonetic + index} className="flex justify-between">
                  <h2 className="text-xl">
                    <a href={sourceUrls} target='_blank'>
                      <span className="capitalize font-bold underline ml-2">
                        {word}
                      </span>
                    </a>
                    {phonetic}
                  </h2>
                  <div>
                    <button className="btn btn-circle">UK</button>
                    <button className="btn btn-circle">USA</button>
                  </div>
                </div>

                <div>
                  <p>
                    <span className='font-bold'>Principal definition: </span>
                    {meanings[0]['definitions'][0]['definition']}
                  </p>
                </div>
              </>
            )}

            {meanings.map((meaning) => {
              const { partOfSpeech, definitions } = meaning;
              console.log(meaning);
              return (
                <>
                  <div className="divider">{partOfSpeech}</div>
                  {definitions.map(({ definition }) => {
                    return <p>- {definition}</p>
                  })}
                </>
              );
            })}
          </>
        );
      })}
    </div>
  );
};

export default WordBody;
