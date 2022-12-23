import { variables } from "./GlobalVariables";
export default function createRondomNumber() {
   let { equality, equalityHalf } = variables;
   return Math.floor(Math.random() * equality) + equalityHalf;
}