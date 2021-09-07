import { AjnaElement } from "ajna";

export default class Accordion extends AjnaElement {

  constructor () {
    super();
  }

  template () {
    return require("./Accordion.html")
  }

}