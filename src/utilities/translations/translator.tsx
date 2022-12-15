//import en from "../../assets/translations/en.json";
//import es from "../../assets/translations/es.json";
// import { CURRENT_LOCALE } from "../../helper/locale-utils";

export const _t = (phrase: string) => {
  let phrasesSource: any = undefined;
  // switch (CURRENT_LOCALE) {
  //   case "es-ES":
  //     phrasesSource = es;
  //     break;
  //   case "ro-RO":
  //   case "tr-TR":
  //   case "cs-CZ":
  //   case "fr-FR":
  //   case "de-DE":
  //   case "nl-NL":
  //   case "en-US":
  //   case "pl-PL":
  //   case "it-IT":
  //   case "fr-LU":
  //   default:
  //     phrasesSource = en;
  //     break;
  // }
  phrasesSource = {};
  const phraseValue = phrasesSource[phrase];
  if (phraseValue) {
    return phrasesSource[phrase];
  }
  return phrase;
};

export default _t;
