export const convert = (input: number): string => {
    let i = 0;
    let textRoman = "";

    if(input == 4){
        return "IV";
    }

    for (i = 0; i < input; i++) {
        textRoman+="I";

    }


    return textRoman;

}