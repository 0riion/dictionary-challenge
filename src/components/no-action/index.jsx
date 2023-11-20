import noAction from '../../assets/folder.png';

export default function NoAction() {
  return (
    <div className="h-80 flex flex-col justify-center items-center">
      <img src={noAction} width={100} height={100} />
      <p>Please, search the word you need to know.</p>
    </div>
  );
};
