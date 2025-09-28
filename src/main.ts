import './style.css'
import { h, createRoot } from './interact.ts'

function App() {
  return (
    h("div", null,
      h("h1", null,
        h("span", null, "Food Ordering App")
      ),
    )
  );
}

createRoot(document.getElementById("app")!).render(App());
