import { Route, Routes } from "react-router";

import { QueryClient, QueryClientProvider } from "react-query";

import Home from "./SlideShow/Home";

const queryClient = QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </QueryClientProvider>
  );
}

export default App;
