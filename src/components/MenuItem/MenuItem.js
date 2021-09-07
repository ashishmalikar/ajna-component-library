import { AjnaElement } from "ajna";

export default class MenuItem extends AjnaElement {

  constructor () {
    super();
  }

  template () {
    return require("./MenuItem.html")
  }

}