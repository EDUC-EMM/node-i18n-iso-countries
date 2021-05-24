export interface GetNameOptions {
  select: 'all' | 'official' | 'alias';
}

export type CountryName<T extends GetNameOptions> = T extends { select: 'all' } ? string[] : string

export type LocalizedCountryNames<T extends GetNameOptions> = {
  [alpha2Key: string]: CountryName<T>
};

export type LocaleData = {
  locale: string,
  countries: {
    [alpha2Key: string]: string[] | string
  }
};



export function registerLocale(localeData: LocaleData): void;
export function alpha2ToAlpha3(alpha2: string | Alpha2Code): string;
export function alpha2ToNumeric(alpha2: string | Alpha2Code): string;
export function alpha3ToAlpha2(alpha3: string | Alpha3Code): string;
export function alpha3ToNumeric(alpha3: string | Alpha3Code): string;
export function numericToAlpha2(numeric: number | string): string;
export function numericToAlpha3(numeric: number | string): string;

/**
 * Returns object map where key is alpha 2 code and value is alpha 3 code
 */
export function getAlpha2Codes(): { [alpha2Key: string]: string };

/**
 * Returns object map where key is alpha 3 code and value is alpha 2 code
 */
export function getAlpha3Codes(): { [alpha3Key: string]: string };

/**
 * Returns object map where key is numeric code and value is alpha 2 code
 */
export function getNumericCodes(): { [numericKey: string]: string };

/**
 * @param countryCode  Alpha2 or Alpha3 or Numeric
 * @param lang        ISO 639-1 format string
 */
export function getName(
  countryCode: string | number | Alpha2Code | Alpha3Code,
  lang: string
): string;

/**
 * @param countryCode  Alpha2 or Alpha3 or Numeric
 * @param lang        ISO 639-1 format string
 * @param options     Optional config of getName
 */
export function getName<T extends GetNameOptions>(
  countryCode: string | number | Alpha2Code | Alpha3Code,
  lang: string,
  options: T
): CountryName<T>;

/**
 * @param lang    ISO 639-1 format string
 */
export function getNames(lang: string): LocalizedCountryNames<{ select: 'official' }>;

/**
 * @param lang      ISO 639-1 format string
 * @param options   Optional config of getName
 */
export function getNames<T extends GetNameOptions>(
  lang: string,
  options: T
): LocalizedCountryNames<T>;

export function getAlpha2Code(name: string, lang: string): string;
export function getSimpleAlpha2Code(name: string, lang: string): string;
export function getAlpha3Code(name: string, lang: string): string;
export function getSimpleAlpha3Code(name: string, lang: string): string;
export function langs(): string[];
export function toAlpha3(
  alpha2orNumeric: number | string | Alpha2Code
): string;
export function toAlpha2(
  alpha3orNumeric: number | string | Alpha3Code
): string;
export function isValid(alpha2orAlpha3orNumeric: string | number): boolean;


export type Alpha2Code =
  | "01"
  | "02"
  | "03"
  | "04"
  | "05"
  | "06"
  | "07"
  | "08"
  | "09"
  | "10"
  | "11"
  | "12"
  | "13"
  | "14"
  | "15"
  | "16"
  | "17"
  | "18"
  | "19"
  | "20"
  | "21"
  | "22"
  | "23"
  | "24"
  | "25"
  | "26"
  | "27"
  | "28"
  | "29"
  | "30"
  | "31"
  | "32"
  | "33"
  | "34"
  | "35"
  | "36"
  | "37"
  | "38"
  | "39"
  | "40"
  | "41"
  | "42"
  | "43"
  | "44"
  | "45"
  | "46"
  | "47"
  | "48"
  | "49"
  | "50"
  | "51"
  | "52"
  | "53"
  | "54"
  | "55"
  | "56"
  | "57"
  | "58"


export type Alpha3Code =
  | "01"
  | "02"
  | "03"
  | "04"
  | "05"
  | "06"
  | "07"
  | "08"
  | "09"
  | "10"
  | "11"
  | "12"
  | "13"
  | "14"
  | "15"
  | "16"
  | "17"
  | "18"
  | "19"
  | "20"
  | "21"
  | "22"
  | "23"
  | "24"
  | "25"
  | "26"
  | "27"
  | "28"
  | "29"
  | "30"
  | "31"
  | "32"
  | "33"
  | "34"
  | "35"
  | "36"
  | "37"
  | "38"
  | "39"
  | "40"
  | "41"
  | "42"
  | "43"
  | "44"
  | "45"
  | "46"
  | "47"
  | "48"
  | "49"
  | "50"
  | "51"
  | "52"
  | "53"
  | "54"
  | "55"
  | "56"
  | "57"
  | "58"