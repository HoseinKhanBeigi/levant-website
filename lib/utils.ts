interface MakeItTwoDigits {
	(value: string, prefix?: string, suffix?: string): string;
	(value: number, prefix?: string, suffix?: string): string;
	(value: string | number, prefix?: unknown, suffix?: unknown): string;
}

interface SeparateWithComma {
	(value?: string): string;
	(value?: number): string;
	(value?: unknown): string;
}

class Utils {
	static separateWithComma: SeparateWithComma = (value) => {
		if (value) {
			return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
		} else {
			return "";
		}
	};

	static objectIsEmpty(obj: Record<string, unknown>): boolean {
		return obj ? Object.keys(obj).length === 0 : false;
	}

	static convertToPersianNumber = (number) => {
		const persianNumber = [
			"صفر",
			"یک",
			"دو",
			"سه",
			"چهار",
			"پنج",
			"شش",
			"هفت",
			"هشت",
			"نه",
			"ده",
		];
		return persianNumber[number];
	};

	static checkIfItsFilled(value) {
		return value !== null && typeof value !== "undefined";
	}

	static isEmptyString(value?: string): boolean {
		return Utils.checkIfItsFilled(value) ? value === "" : true
	}

	static toFarsiNumber(n) {
		const farsiDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];

		return n.toString().replace(/\d/g, (x) => farsiDigits[x]);
	}

	static ToEnglishNumber = function (str) {
		const persianNumbers = [
			/۰/g,
			/۱/g,
			/۲/g,
			/۳/g,
			/۴/g,
			/۵/g,
			/۶/g,
			/۷/g,
			/۸/g,
			/۹/g,
		];
		const arabicNumbers = [
			/٠/g,
			/١/g,
			/٢/g,
			/٣/g,
			/٤/g,
			/٥/g,
			/٦/g,
			/٧/g,
			/٨/g,
			/٩/g,
		];
		if (typeof str === "string") {
			for (var i = 0; i < 10; i++) {
				str = str.replace(persianNumbers[i], i).replace(arabicNumbers[i], i);
			}
		}
		return str;
	};
	static generateUniqueArray = (a) => [...new Set(a)];
}

export default Utils;
