import { AjnaElement } from "ajna";

export default class GridColumn extends AjnaElement {

  constructor () {
    super();
  }

  template () {
    return require("./GridColumn.html")
  }

}