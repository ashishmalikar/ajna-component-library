import { AjnaElement } from "ajna";

export default class CardHeader extends AjnaElement {

  constructor () {
    super();
  }

  template () {
    return require("./CardHeader.html")
  }

}