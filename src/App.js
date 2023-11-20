import './App.css';
import Search from './components/search';
import Layout from './layout';

function App() {
  return (
    <Layout>
      <div className="max-w-5xl mx-auto py-10">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-slate-900 font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-center dark:text-white">
            The best dictionary
            <span className="block text-sky-600 dark:text-sky-400">
              Is here for you
            </span>
          </h1>
          <p className="mt-6 text-lg text-slate-600 text-center max-w-3xl mx-auto dark:text-slate-400">
            Find all words you need to know, just right here.
          </p>
        </div>
      </div>

      <section className="bg-base-200 rounded-sm grid grid-cols-10 gap-4 p-2">
        <div className="col-span-10 md:col-span-3">
          <Search />
        </div>
        <div className="bg-fuchsia-100 col-span-10 md:col-span-7">
          <span>02</span>
        </div>
        <div className="bg-purple-100 col-span-10 md:col-span-3">
          <span>03</span>
        </div>
      </section>
    </Layout>
  );
}

export default App;
