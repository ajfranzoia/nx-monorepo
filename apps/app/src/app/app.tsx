// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {getHello} from "@nx-monorepo/shared";

export function App() {
  return (
    <>
      <h1>{getHello()}</h1>
      <div />
    </>
  );
}

export default App;
