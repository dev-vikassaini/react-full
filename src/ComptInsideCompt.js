import "./App.css";
import { WithoutDefaultExport } from "./WithoutDefaultExport";

function ComptInsideCompt() {
  function ComptInsideCompt2() {
    return (
      <div>
        <p>Component inside component 2</p>
      </div>
    );
  }

  return (
    <div className="App">
      <p>Component inside component </p>
      {/* First Way to call  */}
      <ComptInsideCompt2 />
      <WithoutDefaultExport />
    </div>
  );
}

export default ComptInsideCompt;
