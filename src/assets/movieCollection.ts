interface Movie {
    name_zh: string;
    name_en: string;
    genre: string;
    language: string;
    director: string;
    year: number;
    actors: string[];
    tags: string[];
}

export const movieCollection: Array<Movie> = [
    {
        name_zh: "馬永貞",
        name_en: "The Boxer From Shantung",
        genre: "武俠",
        language: "zh-m",
        director: "張徹",
        year: 1972,
        actors: ["陳觀泰", "井莉", "姜大衛"],
        tags: ["邵氏電影"]
    },
    {
        name_zh: "刺馬",
        name_en: "Blood Brothers",
        genre: "武俠",
        language: "zh-m",
        director: "張徹",
        year: 1973,
        actors: ["陳觀泰", "井莉", "姜大衛", "狄龍"],
        tags: ["邵氏電影"]
    },
    {
        name_zh: "獨臂刀",
        name_en: "One-Armed Swordsman",
        genre: "武俠",
        language: "zh-m",
        director: "張徹",
        year: 1967,
        actors: ["王羽", "焦姣"],
        tags: ["邵氏電影"]
    },
    {
        name_zh: "獨臂刀王",
        name_en: "Return of One-Armed Swordsman",
        genre: "武俠",
        language: "zh-m",
        director: "張徹",
        year: 1969,
        actors: ["王羽", "焦姣"],
        tags: ["邵氏電影"]
    },
    {
        name_zh: "大醉俠",
        name_en: "Come Drink With Me",
        genre: "武俠",
        language: "zh-m",
        director: "胡金銓",
        year: 1966,
        actors: ["岳華", "鄭佩佩"],
        tags: ["邵氏電影"]
    },
    {
        name_zh: "流星蝴蝶劍",
        name_en: "Death Duel",
        genre: "武俠",
        language: "zh-m",
        director: "楚原",
        year: 1976,
        actors: ["宗華","岳華", "井莉"],
        tags: ["邵氏電影"]
    },
    {
        name_zh: "三少爺的劍",
        name_en: "Killer Clans",
        genre: "武俠",
        language: "zh-m",
        director: "楚原",
        year: 1977,
        actors: ["爾冬陞","余安安"],
        tags: ["邵氏電影"]
    },
    {
        name_zh: "飲食男女",
        name_en: "Eat Drink Man Woman",
        genre: "文藝",
        language: "zh-m",
        director: "李安",
        year: 1994,
        actors: ["郎雄","楊貴媚","吳倩蓮"],
        tags: ["台灣電影"]
    },
    {
        name_zh: "臥虎藏龍",
        name_en: "Crouching Tiger, Hidden Dragon",
        genre: "武俠",
        language: "zh-m",
        director: "李安",
        year: 2000,
        actors: ["周潤發","郎雄","楊紫瓊","章子怡"],
        tags: ["奧斯卡"]
    },
    {
        name_zh: "綠巨人浩克",
        name_en: "Hulk",
        genre: "英雄",
        language: "en",
        director: "李安",
        year: 2003,
        actors: ["Eric Bana"],
        tags: ["漫威"]
    },
    {
        name_zh: "終極標靶",
        name_en: "Hard Target",
        genre: "動作",
        language: "en",
        director: "吳宇森",
        year: 1993,
        actors: ["尚·克勞德·范達美"],
        tags: []
    },
    {
        name_zh: "長城",
        name_en: "The Great Wall",
        genre: "科幻",
        language: "en",
        director: "張藝謀",
        year: 2016,
        actors: ["劉德華", "麥特·戴蒙", "彭于晏"],
        tags: []
    },
    {
        name_zh: "滿城盡是黃金甲",
        name_en: "Curse of Golden Flower",
        genre: "歷史",
        language: "zh-m",
        director: "張藝謀",
        year: 2006,
        actors: ["周潤發", "鞏俐", "周杰倫"],
        tags: []
    },
    {
        name_zh: "十面埋伏",
        name_en: "House of Flying Dagger",
        genre: "武俠",
        language: "zh-m",
        director: "張藝謀",
        year: 2004,
        actors: ["劉德華", "金城武", "章子怡"],
        tags: []
    },
    {
        name_zh: "歸來",
        name_en: "Coming Home",
        genre: "文藝",
        language: "zh-m",
        director: "張藝謀",
        year: 2014,
        actors: ["陳道明", "鞏俐"],
        tags: []
    },
    {
        name_zh: "魔翡翠",
        name_en: "Magic Crystal",
        genre: "科幻",
        language: "zh-c",
        director: "王晶",
        year: 1986,
        actors: ["劉德華", "張敏", "陳百祥"],
        tags: ["永盛電影公司"]
    },
    {
        name_zh: "精裝追女仔",
        name_en: "The Romancing Stars",
        genre: "喜劇",
        language: "zh-c",
        director: "王晶",
        year: 1987,
        actors: ["周潤發", "張敏", "張曼玉" ,"陳百祥", "曾志偉"],
        tags: ["永盛電影公司"]
    },
    {
        name_zh: "至尊三十六計之偷天換日",
        name_en: "Perfect Exchange",
        genre: "喜劇",
        language: "zh-c",
        director: "王晶",
        year: 1993,
        actors: ["劉德華", "梁家輝", "鍾麗緹", "關海山"],
        tags: ["永盛電影公司"]
    },
    {
        name_zh: "倚天屠龍記之魔教教主",
        name_en: "Kung Fu Cult Master",
        genre: "武俠",
        language: "zh-c",
        director: "王晶",
        year: 1994,
        actors: ["李連杰", "張敏", "洪金寶", "邱淑貞"],
        tags: ["永盛電影公司"]
    },
    {
        name_zh: "賭俠",
        name_en: "god of Gambler II",
        genre: "喜劇",
        language: "zh-c",
        director: "王晶",
        year: 1990,
        actors: ["劉德華", "周星馳", "吳孟達", "張敏"],
        tags: ["永盛電影公司"]
    },
    {
        name_zh: "賭俠2之上海灘賭聖",
        name_en: "god of Gambler III: Back to Shanghai",
        genre: "喜劇",
        language: "zh-c",
        director: "王晶",
        year: 1991,
        actors: ["周星馳", "吳孟達", "呂良偉", "鞏俐"],
        tags: ["永盛電影公司"]
    },
    {
        name_zh: "逃學威龍",
        name_en: "Fight Back to School",
        genre: "喜劇",
        language: "zh-c",
        director: "王晶",
        year: 1991,
        actors: ["周星馳", "吳孟達", "張敏", "張耀揚"],
        tags: ["永盛電影公司"]
    },
    {
        name_zh: "逃學威龍2",
        name_en: "Fight Back to School 2",
        genre: "喜劇",
        language: "zh-c",
        director: "王晶",
        year: 1992,
        actors: ["周星馳", "吳孟達", "張敏", "朱茵"],
        tags: ["永盛電影公司"]
    },
    {
        name_zh: "逃學威龍3之龍過雞年",
        name_en: "Fight Back to School 3",
        genre: "喜劇",
        language: "zh-c",
        director: "王晶",
        year: 1993,
        actors: ["周星馳", "陳百祥", "張敏", "梅艷芳"],
        tags: ["永盛電影公司"]
    },
    {
        name_zh: "追龍II：賊王",
        name_en: "Chasing the Dragon II: Wild Wild Bunch",
        genre: "動作",
        language: "zh-c",
        director: "王晶",
        year: 2019,
        actors: ["梁家輝", "古天樂", "林家棟"],
        tags: []
    },
];