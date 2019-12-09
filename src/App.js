import React, { useState, useEffect } from "react";
import { createGlobelStyle } from "styled-components";
import { createCalendar } from "./helpers";
import Hatch from "./Hatch";
function App() {
  const [hatches, setHatches] = useState(createCalendar());

  console.log(hatches);
  return (
    <>
      {hatches.map(hatch => (
        <Hatch key={hatch.id} hatchData={hatch} handleClick={handleFlipHatch} />
      ))}
    </>
  );
}

export default App;
