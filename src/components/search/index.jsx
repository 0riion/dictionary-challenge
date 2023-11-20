export default function Search() {
  return (
    <div className="grid grid-cols-1 form-control w-full p-2 gap-4">
      <label className="label col-span-1">
        <span className="label-text">You are lucky</span>
      </label>
      <input type="text" placeholder="Type here" className="input input-bordered w-full col-span-1" />
      <button className="btn  btn-outline btn-primary col-span-1">Search</button>
    </div>
  );
};
