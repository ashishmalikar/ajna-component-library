import { AjnaElement } from "ajna";

export default class Checkbox extends AjnaElement {

  constructor () {
    super();
  }

  template () {
    return require("./Checkbox.html")
  }

}