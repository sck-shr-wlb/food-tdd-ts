export const convert = (input: number): string => {

    let textRoman = "";

    if (input == 4) {
        return "IV";
    }

    if (input == 5) {
        return "V";
    }

    for (let i = 0; i < input; i++) {
        textRoman += "I";
    }

    return textRoman;
}