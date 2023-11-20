import React from 'react';
import { Howl } from 'howler';

const WordBody = ({ word, data }) => {

  function getLocale(url) {
    const path = new URL(url).pathname;
    const locale = path.split("-").slice(-1)[0].split(".")[0];
    return locale;
  }

  const handleAudio = (audioPath) => {
    let sound = new Howl({
      src: [audioPath]
    });

    sound.play();
  };

  return (
    <div className="grid grid-cols-1 gap-4 pt-10">
      <h1 className="text-slate-900 font-extrabold text-5xl tracking-tight text-center dark:text-white capitalize">
        {word}
      </h1>

      {data?.map((variant, index) => {
        const { meanings, phonetic, phonetics, sourceUrls, word } = variant;
        return (
          <div key={index + word}>
            {index === 0 && (
              <>
                <div key={phonetic + index} className="flex justify-between">
                  <h2 className="text-xl">
                    <a href={sourceUrls} target="_blank" without rel="noreferrer">
                      <span className="capitalize font-bold underline ml-2">
                        {word}
                      </span>
                    </a>
                    {phonetic}
                  </h2>
                  <div>
                    {phonetics.map(({ audio }) => {
                      const locale = getLocale(audio);
                      return (
                        <button className="btn btn-xs btn-secondary btn-circle mx-1" onClick={() => handleAudio(audio)} key={audio}>
                          {locale}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div>
                  <p>
                    <span className='font-bold p-4'>Principal definition: </span>
                    {meanings[0]['definitions'][0]['definition']}
                  </p>
                </div>
              </>
            )}

            {meanings.map((meaning) => {
              const { partOfSpeech, definitions } = meaning;
              return (
                <>
                  <div className="divider">{partOfSpeech}</div>
                  {definitions.map(({ definition }) => {
                    return <p>- {definition}</p>
                  })}
                </>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default WordBody;
