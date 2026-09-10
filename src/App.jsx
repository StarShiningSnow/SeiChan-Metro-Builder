import { LiquidGlassFilter } from "@zakisheriff/liquid-glass";
import Canvas from "./Canvas";
import FirstPanel from "./FirstPanel"
import SecondPanel from "./SecondPanel";
import "./App.css"
import { useState } from "react";

function App() {
  const [panel, setPanel] = useState("first")
  return (
    <LiquidGlassFilter>
      <div className="app"><Canvas /></div>
      <div className="panel">
        {panel === "first" && <FirstPanel setPanel={setPanel} />}
        {panel === "second" && <SecondPanel setPanel={setPanel} />}
      </div>
    </LiquidGlassFilter>
  )
}

export default App