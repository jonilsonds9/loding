import React, { memo, useMemo } from "react";
import Loading from "./components/loading";

import "./index.css";

function App() {
  const loading = useMemo(() => true, []);

  return (
    <>
      <div>Teste!</div>
      <button>Teste</button>
      <Loading loading={loading} />
    </>
  );
}

export default memo(App);
