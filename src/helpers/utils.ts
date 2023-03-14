export const langConvert = (lang: string = ""): string => {
    if(lang === "zh-m") {
        return "國語";
    } else if(lang === "zh-c") {
        return "粵語";
    } else if(lang === "en") {
        return "英語";
    } else if(lang === "fr") {
        return "法語";
    } else if(lang === "ge") {
         return "德語";
    } else if(lang === "jp") {
        return "日語"
    } else if(lang === "kr") {
        return "韓語";
    } else if(lang === "th") {
         return "泰語";
    } else if (lang === "vi") {
         return "越語";
    } else {
        return "從缺";
    }
};