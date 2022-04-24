import { Dropdown } from "../components/dropdowns/Dropdown";
import { DropdownCheckbox } from "../components/dropdowns/DropdownCheckbox";
import { Table } from "../components/Table";
import { IComponentExampleConfiguration } from "../interface/ComponentExamples";
import {
  fruitItems,
  fruitItemCheckboxes,
  IFruitItem,
  IFruitItemCheckbox,
} from "../models/Fruits";
import { Fruit } from "../template/Fruit";
import { FruitDetails } from "../template/FruitDetails";
import { randomizeIds } from "../utils/RandomizeIds";

const defaultMessage = "Select a fruit";

let fruits = randomizeIds(fruitItems);
let columns = Object.entries(fruits[0]).map(([key]) => key);
//type columns = keyof IFruitItem;
//let columns = ["A", "B", "C"];
let rows = new Map<number, string[]>();
fruits.forEach((fruit: IFruitItem) => {
  rows.set(fruit.id as number, Object.values(fruit));
});

export const Tables: IComponentExampleConfiguration[] = [
  {
    description: "Simple table",
    jsx: <Table columns={columns} rows={rows} />,
    title: "Basic",
  },
];
