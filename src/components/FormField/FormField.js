import { AjnaElement } from "ajna";

export default class FormField extends AjnaElement {

  constructor () {
    super();
  }

  template () {
    return require("./FormField.html")
  }

}