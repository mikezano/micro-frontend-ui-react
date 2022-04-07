import * as React from "react";
import { lazy } from "react";
import { useParams } from "react-router-dom";
import { Card } from "../components/Card";
import { Dropdowns } from "../component-examples/Dropdowns";
import { TextFields } from "../component-examples/TextFields";
import { Toggles } from "../component-examples/Toggles";
import { IComponentExampleConfiguration } from "../interface/ComponentExamples";
import "../scss/Components.scss";

interface ComponenProps {
  description: string;
  jsx: JSX.Element;
  title: string;
  type: string;
}

interface ComponentRouteParams {
  type: string;
}

// const mah = lazy(async () =>
//   await (import('../component-examples/Dropdowns').));

// const NextComponent = lazy(() =>
//   import("../component-examples/Dropdowns").then(({ Dropdowns }) => ({
//     default: Dropdowns,
//   }))
// );

//const NextComponent = lazy(() => import("../component-examples/Dropdowns"));

export const Components = () => {
  let { type } = useParams<ComponentRouteParams>();

  let examples: IComponentExampleConfiguration[] = [];
  let humanizeTitle: string = "";

  switch (type) {
    case "textfields":
      examples = TextFields;
      humanizeTitle = "Text Fields";
      break;
    case "toggles":
      examples = Toggles;
      humanizeTitle = "Toggles";
      break;
    case "dropdowns":
    default:
      examples = Dropdowns;
      humanizeTitle = "Dropdowns";
      break;
  }

  return (
    <div className="components">
      <h1 className="components__title">{humanizeTitle}</h1>
      <div className="components__examples">
        {examples.map((dropdown: IComponentExampleConfiguration) => (
          <Card
            key={dropdown.title}
            component={dropdown.jsx}
            description={dropdown.description}
            title={dropdown.title}
          ></Card>
        ))}
      </div>
    </div>
  );
};
