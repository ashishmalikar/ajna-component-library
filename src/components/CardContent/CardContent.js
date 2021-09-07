import { AjnaElement } from "ajna";

export default class CardContent extends AjnaElement {

  constructor () {
    super();
  }

  template () {
    return require("./CardContent.html")
  }

}