export const isValidCnpj = (Cnpj: string): boolean => {
	const regex = /^\d{2}\.\d{3}\.\d{3}\\\d{4}-\d{2}$/;
	return regex.test(Cnpj);
};

export const isNumber = (input: string): boolean => {
	const regex = /^[0-9]$/;
	return regex.test(input);
};

export const sanitizeForChars = (input: string): string => {
	const newInput = input.slice();

	return newInput.replaceAll(/(?![0-9])./g, "");
};

export const isInputEndNumber = (input: string): boolean =>
	isNumber(input[input.length - 1]);

export const isValidPassword = (input: string): boolean => input.length >= 8;

export const passwordsMatch = (
	password: string,
	password_confirm: string,
): boolean => password === password_confirm;

export const cnpjPreProcessor = (cnpj: string): string => {
	let modCnpj = cnpj;

	modCnpj = sanitizeForChars(modCnpj);

	if (
		(!isInputEndNumber(modCnpj) &&
			!isCnpjEndDot(modCnpj) &&
			!isCnpjEndDash(modCnpj) &&
			!isCnpjEndBar(modCnpj)) ||
		isCnpjEndDashOutOfPlace(modCnpj) ||
		isCnpjEndDotOutOfPlace(modCnpj) ||
		isCnpjEndBarOutOfPlace(modCnpj) ||
		modCnpj.length > 14
	)
		modCnpj = modCnpj.slice(0, modCnpj.length - 1);

	if (modCnpj.length >= 3 && modCnpj[2] !== ".")
		modCnpj = modCnpj.slice(0, 2) + "." + modCnpj.slice(2, modCnpj.length);

	if (modCnpj.length >= 7 && modCnpj[6] !== ".")
		modCnpj = modCnpj.slice(0, 6) + "." + modCnpj.slice(6, modCnpj.length);

	if (modCnpj.length >= 11 && modCnpj[10] !== "/")
		modCnpj =
			modCnpj.slice(0, 10) + "/" + modCnpj.slice(10, modCnpj.length);

	if (modCnpj.length >= 16 && modCnpj[15] !== "-")
		modCnpj =
			modCnpj.slice(0, 15) + "-" + modCnpj.slice(15, modCnpj.length);

	return modCnpj;
};

const isCnpjEndDot = (Cnpj: string) => Cnpj[Cnpj.length - 1] === ".";
const isCnpjEndDash = (Cnpj: string) => Cnpj[Cnpj.length - 1] === "-";
const isCnpjEndBar = (Cnpj: string) => Cnpj[Cnpj.length - 1] === "/";
const isCnpjEndDashOutOfPlace = (Cnpj: string) =>
	isCnpjEndDash(Cnpj) && Cnpj.length !== 16;
const isCnpjEndDotOutOfPlace = (Cnpj: string) =>
	isCnpjEndDash(Cnpj) && Cnpj.length !== 3 && Cnpj.length !== 7;
const isCnpjEndBarOutOfPlace = (Cnpj: string) =>
	isCnpjEndBar(Cnpj) && Cnpj.length !== 11;

export const isValidLink = (link: string) => {
	const regex = /^(http:\/\/|https:\/\/).+$/;

	return regex.test(link);
};
