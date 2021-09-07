import { AjnaElement } from "ajna";

export default class Form extends AjnaElement {

  constructor () {
    super();
  }

  template () {
    return require("./Form.html")
  }

}