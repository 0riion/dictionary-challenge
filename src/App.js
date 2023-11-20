import './App.css';
import Layout from './layout';

function App() {
  return (
    <Layout>
      <section className="grid grid-cols-10">
        <div className="bg-indigo-100 col-span-10 md:col-span-3">
          <span>01</span>
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
