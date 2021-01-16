/**
 * Converts an html characterSet into its original character.
**/

export const htmlDecode = (str: string): string => {
	const output = str.replace(/&#(\d+);/g, (_, dec) =>  String.fromCharCode(dec));
	return output
}

export default htmlDecode;