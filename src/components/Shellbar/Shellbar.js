import { AjnaElement } from "ajna";

export default class Shellbar extends AjnaElement {

  constructor () {
    super();
  }

  template () {
    return require("./Shellbar.html")
  }

}