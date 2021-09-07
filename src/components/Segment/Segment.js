import { AjnaElement } from "ajna";

export default class Segment extends AjnaElement {

  constructor () {
    super();
  }

  template () {
    return require("./Segment.html")
  }

}