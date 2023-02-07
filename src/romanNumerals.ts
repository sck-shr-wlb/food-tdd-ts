export const convert = (input: number): string => {
    if (input == 1) {
        return "I";
    } else if (input == 2) {
        return "II";
    } else {
        return "III";
    }
}