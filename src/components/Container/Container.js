import { AjnaElement } from "ajna";

export default class Container extends AjnaElement {

  constructor () {
    super();
  }

  template () {
    return require("./Container.html")
  }

}