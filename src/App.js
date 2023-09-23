import { Route, Routes } from "react-router";
import PictureList from "./components/PictureList/PictureList";
import { QueryClient, QueryClientProvider } from "react-query";

import Home from "./components/Home/Home";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pictures" element={<PictureList />} />
        </Routes>
      </div>
    </QueryClientProvider>
  );
}

export default App;
