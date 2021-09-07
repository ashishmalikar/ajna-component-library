import { AjnaElement } from "ajna";

export default class Slider extends AjnaElement {

  constructor () {
    super();
  }

  template () {
    return require("./Slider.html")
  }

}