import { AjnaElement } from "ajna";

export default class Grid extends AjnaElement {

  constructor () {
    super();
  }

  template () {
    return require("./Grid.html")
  }

}