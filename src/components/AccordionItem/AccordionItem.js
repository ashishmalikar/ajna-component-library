import { AjnaElement } from "ajna";

export default class AccordionItem extends AjnaElement {

  constructor () {
    super();
  }

  template () {
    return require("./AccordionItem.html")
  }

}