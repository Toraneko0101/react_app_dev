import './App.css';
import {css} from "@emotion/css";

const color = "orange";

function App() {
  return (
    <div
      className={css`
        padding: 32px;
        background-color: hotpink;
        font-size: 24px;
        border-radius: 4px;
        &:hover {
          color: ${color};
        }
        &:action{
          color: orange;
        }
      `}
    >
      Hover to change color.
    </div>
  );
}

export default App;
