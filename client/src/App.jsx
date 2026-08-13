import { useState } from "react";
import AppRouter from "./routes/AppRouter";
import IntroLoader from "./components/common/IntroLoader";

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && <IntroLoader onFinish={() => setLoading(false)} />}
      <AppRouter />
    </>
  );
}

export default App;