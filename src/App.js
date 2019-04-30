import React from "react";

import withContainer from "./HOCs/withContainer";

import Element from "./Components/Element";

const App = ({ fields, handlerClick }) => (
  <div className="App">
    {fields.map(f => (
      <div className={`field f-${f.num}`} key={f.num}>
        {f.columns.map(c => (
          <Element
            handlerClick={handlerClick}
            key={`${f.num}${c.num}`}
            idx={c.num}
            active={c.active}
            field={f.num}
          />
        ))}
      </div>
    ))}
  </div>
);

export default withContainer(App);
