import { BrowserRouter, useRoutes } from "react-router-dom";
import Dictionary from "./pages/Dictionary";
import NotFound from "./pages/NotFound";

const Router = () => {
  return useRoutes([
    {
      path: '/',
      element: <Dictionary />,
    },
    {
      path: '/*',
      element: <NotFound />,
    }
  ]);
};


function App() {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
};

export default App;
