import {
  grey100, grey300, grey50, grey900,
  orange600, yellow200,
  blue300, blue600, red500,
  white, darkBlack, fullBlack, blue100,
} from 'material-ui/styles/colors';
import { red200 } from 'material-ui/styles/colors';
import { black } from 'material-ui/styles/colors';

const BUNDLE = {
	default: {
		backTxt: "Back",
		viewTxt:"View",
		nextTxt:"Next",
		previousTxt:"Previous",
		okTxt:"OK",
		cancelTxt:"Cancel",
		fnameTxt:"First Name",
		lnameTxt:"Last Name",
		bTownTxt:"Birth Town",
		bYearTxt: "BirthYear",
		editTxt:"Edit",
		nwValTxt:"Enter new value",
		palette: {},
	},	
	en: {
		backTxt: "Back",
		viewTxt:"View",
		nextTxt:"Next",
		previousTxt:"Previous",
		okTxt:"OK",
		cancelTxt:"Cancel",
		fnameTxt:"First Name",
		lnameTxt:"Last Name",
		bTownTxt:"Birth Town",
		bYearTxt: "BirthYear",
		editTxt:"Edit",
		nwValTxt:"Enter new value",



		palette: {textColor: black, canvasColor: red200},
	},	
	fi: {
		backTxt: "Takaisin",
		viewTxt:"Näkymä",
		nextTxt:"Seuraava",
		previousTxt:"Edellinen",
		okTxt:"Okei",
		cancelTxt:"Peruuttaa",
		fnameTxt:"Etunimi",
		lnameTxt:"Sukonimi",
		bTownTxt:"Syntymäkaupunki",
		bYearTxt: "Syntymävuosi",
		editTxt:"Muokata",
		nwValTxt:"Anna uusi arvo",
		palette: {textColor: blue300, canvasColor: white},
	}
	
}

export default BUNDLE;