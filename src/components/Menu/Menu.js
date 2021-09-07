import { AjnaElement } from "ajna";

export default class Menu extends AjnaElement {

  constructor () {
    super();
  }

  template () {
    return require("./Menu.html")
  }

}