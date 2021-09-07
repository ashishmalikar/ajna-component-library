import AjnaAccordion from "./components/Accordion/Accordion";
import AjnaAccordionItem from "./components/AccordionItem/AccordionItem";
import AjnaButton from "./components/Button/Button";
import AjnaCard from "./components/Card/Card";
import AjnaCardContent from "./components/CardContent";
import AjnaCardHeader from "./components/CardHeader";



export function install () {
    define(AjnaAccordion, "ajna-accordion")
}

function define(cmpCon, cmpName) {
  window.customElements.define(cmpCon, cmpName)
}