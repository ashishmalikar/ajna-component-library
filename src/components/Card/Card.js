import { AjnaElement } from "ajna";

export default class Card extends AjnaElement {

  constructor () {
    super();
  }

  template () {
    return require("./Card.html")
  }

}