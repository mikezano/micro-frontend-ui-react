import { Toggle } from "../components/toggles/Toggle";
import { IComponentExampleConfiguration } from "../interface/ComponentExamples";
import { IItem } from "../interface/interface";
import { fruitItems, IFruitItem } from "../models/Fruits";
import { Fruit } from "../template/Fruit";
import { randomizeIds } from "../utils/RandomizeIds";

const onSelect = (value: IFruitItem) => {
  console.log("Value from toggle", value);
};
export const Toggles: IComponentExampleConfiguration[] = [
  {
    description: "Basic text field input",
    jsx: <Toggle onSelectItem={onSelect} items={randomizeIds(fruitItems)} />,
    title: "Basic",
  },
  {
    description: "Customized Layout",
    jsx: (
      <Toggle onSelectItem={onSelect} items={randomizeIds(fruitItems)}>
        {(item: IFruitItem) => <Fruit {...item} />}
      </Toggle>
    ),
    title: "Custom Render",
  },
  {
    description: "So many fruits!",
    jsx: (
      <Toggle onSelectItem={onSelect} items={randomizeIds(fruitItems)}>
        {(item: IFruitItem) => <span>{item.icon}</span>}
      </Toggle>
    ),
    title: "Fruits Only",
  },
];
