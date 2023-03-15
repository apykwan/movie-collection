export interface Movie {
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
        actors: ["王羽", "焦姣", "田豐"],
        tags: ["邵氏電影"]
    },
    {
        name_zh: "獨臂刀王",
        name_en: "Return of One-Armed Swordsman",
        genre: "武俠",
        language: "zh-m",
        director: "張徹",
        year: 1969,
        actors: ["王羽", "焦姣", "田豐"],
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
        tags: ["永盛電影"]
    },
    {
        name_zh: "精裝追女仔",
        name_en: "The Romancing Stars",
        genre: "喜劇",
        language: "zh-c",
        director: "王晶",
        year: 1987,
        actors: ["周潤發", "張敏", "張曼玉" ,"陳百祥", "曾志偉"],
        tags: ["永盛電影"]
    },
    {
        name_zh: "至尊三十六計之偷天換日",
        name_en: "Perfect Exchange",
        genre: "喜劇",
        language: "zh-c",
        director: "王晶",
        year: 1993,
        actors: ["劉德華", "梁家輝", "鍾麗緹", "關海山"],
        tags: ["永盛電影"]
    },
    {
        name_zh: "倚天屠龍記之魔教教主",
        name_en: "Kung Fu Cult Master",
        genre: "武俠",
        language: "zh-c",
        director: "王晶",
        year: 1994,
        actors: ["李連杰", "張敏", "洪金寶", "邱淑貞"],
        tags: ["永盛電影"]
    },
    {
        name_zh: "賭俠",
        name_en: "god of Gambler II",
        genre: "喜劇",
        language: "zh-c",
        director: "王晶",
        year: 1990,
        actors: ["劉德華", "周星馳", "吳孟達", "張敏"],
        tags: ["永盛電影"]
    },
    {
        name_zh: "賭俠2之上海灘賭聖",
        name_en: "god of Gambler III: Back to Shanghai",
        genre: "喜劇",
        language: "zh-c",
        director: "王晶",
        year: 1991,
        actors: ["周星馳", "吳孟達", "呂良偉", "鞏俐"],
        tags: ["永盛電影"]
    },
    {
        name_zh: "逃學威龍",
        name_en: "Fight Back to School",
        genre: "喜劇",
        language: "zh-c",
        director: "王晶",
        year: 1991,
        actors: ["周星馳", "吳孟達", "張敏", "張耀揚"],
        tags: ["永盛電影"]
    },
    {
        name_zh: "逃學威龍2",
        name_en: "Fight Back to School 2",
        genre: "喜劇",
        language: "zh-c",
        director: "王晶",
        year: 1992,
        actors: ["周星馳", "吳孟達", "張敏", "朱茵"],
        tags: ["永盛電影"]
    },
    {
        name_zh: "逃學威龍3之龍過雞年",
        name_en: "Fight Back to School 3",
        genre: "喜劇",
        language: "zh-c",
        director: "王晶",
        year: 1993,
        actors: ["周星馳", "陳百祥", "張敏", "梅艷芳"],
        tags: ["永盛電影"]
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
    {
        name_zh: "魔警",
        name_en: "The Demon Within",
        genre: "動作",
        language: "zh-c",
        director: "林超賢",
        year: 2014,
        actors: ["吳彥祖", "張家輝"],
        tags: ["英皇電影"]
    },
    {
        name_zh: "火龍",
        name_en: "The Demon Within",
        genre: "動作",
        language: "zh-c",
        director: "林超賢",
        year: 2010,
        actors: ["黎明", "任賢齊"],
        tags: ["寰亞電影"]
    },
    {
        name_zh: "逆戰",
        name_en: "The Viral Factor",
        genre: "動作",
        language: "zh-c",
        director: "林超賢",
        year: 2012,
        actors: ["謝霆鋒", "周杰倫"],
        tags: ["英皇電影"]
    },
    {
        name_zh: "激戰",
        name_en: "Unbeatable",
        genre: "動作",
        language: "zh-c",
        director: "林超賢",
        year: 2013,
        actors: ["張家輝", "彭于晏"],
        tags: []
    },
    {
        name_zh: "紅海行動",
        name_en: "Operation Red Sea",
        genre: "戰爭",
        language: "zh-c",
        director: "林超賢",
        year: 2018,
        actors: ["張譯"],
        tags: ["英皇電影"]
    },
    {
        name_zh: "危城",
        name_en: "Call of Heroesr",
        genre: "動作",
        language: "zh-c",
        director: "陳木勝",
        year: 2016,
        actors: ["劉青雲", "古天樂", "彭于晏"],
        tags: []
    },
    {
        name_zh: "怒火",
        name_en: "Raging Fire",
        genre: "動作",
        language: "zh-c",
        director: "陳木勝",
        year: 2021,
        actors: ["甄子丹", "謝霆鋒"],
        tags: ["英皇電影"]
    },
    {
        name_zh: "掃毒",
        name_en: "The White Storm",
        genre: "動作",
        language: "zh-c",
        director: "陳木勝",
        year: 2016,
        actors: ["劉青雲", "古天樂", "張家輝"],
        tags: []
    },
    {
        name_zh: "龍爭虎鬥",
        name_en: "Enter the Dragon",
        genre: "動作",
        language: "en",
        director: "Robert Clouse",
        year: 1973,
        actors: ["李小龍", "石堅", "喬宏"],
        tags: ["華納兄弟"]
    },
    {
        name_zh: "精武門",
        name_en: "Fist of Fury",
        genre: "動作",
        language: "en",
        director: "羅維",
        year: 1972,
        actors: ["李小龍", "苗可秀", "田豐"],
        tags: ["嘉禾電影"]
    },
    {
        name_zh: "猛龍過江",
        name_en: "The Way of the Dragon",
        genre: "動作",
        language: "en",
        director: "李小龍",
        year: 1972,
        actors: ["李小龍", "苗可秀", "查克·羅禮士"],
        tags: ["嘉禾電影"]
    },
    {
        name_zh: "浴血蛟龍",
        name_en: "Showdown in Little Tokyo (1991)",
        genre: "動作",
        language: "en",
        director: "Mark L. Lester",
        year: 1972,
        actors: ["李國豪"],
        tags: ["華納兄弟"]
    },
    {
        name_zh: "龍族戰神",
        name_en: "The Crow",
        genre: "動作",
        language: "en",
        director: "Alex Proyas",
        year: 1994,
        actors: ["李國豪"],
        tags: []
    },
    {
        name_zh: "末代皇帝",
        name_en: "The Last Emperor",
        genre: "傳記",
        language: "en",
        director: "Bernardo Bertolucci",
        year: 1987,
        actors: ["尊龍", "陳沖", "彼得·奧圖"],
        tags: ["哥倫比亞", "奧斯卡"]
    },
    {
        name_zh: "龍年",
        name_en: "Year of the Dragon",
        genre: "劇情",
        language: "en",
        director: "Michael Cimino",
        year: 1985,
        actors: ["尊龍", "黃自強"],
        tags: ["米高梅"]
    },
    {
        name_zh: "冰人四萬年",
        name_en: "Iceman",
        genre: "科幻",
        language: "en",
        director: "Fred Schepisi",
        year: 1984,
        actors: ["尊龍"],
        tags: ["環球影業"]
    },
    {
        name_zh: "魅影奇俠",
        name_en: "The Shadow",
        genre: "科幻",
        language: "en",
        director: "Russell Mulcahy",
        year: 1994,
        actors: ["尊龍"],
        tags: ["環球影業"]
    },
    {
        name_zh: "紅番區",
        name_en: "Rumble in the Bronx",
        genre: "動作",
        language: "en",
        director: "唐季禮",
        year: 1995,
        actors: ["成龍", "梅艷芳", "董驃"],
        tags: ["嘉禾電影"]
    },
    {
        name_zh: "新宿事件",
        name_en: "Shinjuku Incident",
        genre: "劇情",
        language: "en",
        director: "爾冬陞",
        year: 2009,
        actors: ["成龍", "吳彥祖", "范冰冰"],
        tags: ["英皇電影"]
    },
    {
        name_zh: "英倫對決",
        name_en: "The Foreigner (2017)",
        genre: "動作",
        language: "en",
        director: "Martin Campbell",
        year: 2017,
        actors: ["成龍", "Pierce Brosnan"],
        tags: []
    },
    {
        name_zh: "西域威龍",
        name_en: "Shanghai Noon",
        genre: "喜劇",
        language: "en",
        director: "Tom Dey",
        year: 2000,
        actors: ["成龍", "Owen Wilson", "劉玉玲"],
        tags: []
    },
    {
        name_zh: "皇家威龍",
        name_en: "Shanghai Knight",
        genre: "喜劇",
        language: "en",
        director: "David Dobkin",
        year: 2003,
        actors: ["成龍", "Owen Wilson", "甄子丹"],
        tags: []
    },
    {
        name_zh: "功夫夢",
        name_en: "The Karate Kid",
        genre: "喜劇",
        language: "en",
        director: "Harald Zwart",
        year: 2010,
        actors: ["成龍"],
        tags: []
    },
    {
        name_zh: "燕尾服",
        name_en: "The Tuxedo",
        genre: "喜劇",
        language: "en",
        director: "Kevin Donovan",
        year: 2002,
        actors: ["成龍"],
        tags: []
    },
    {
        name_zh: "安娜與國王",
        name_en: "Anna and the King",
        genre: "傳記",
        language: "en",
        director: "Andy Tennant",
        year: 1999,
        actors: ["周潤發", "Jodie Foster", "白靈"],
        tags: ["二十世紀福斯"]
    },
    {
        name_zh: "替身殺手",
        name_en: "The Replacement Killer",
        genre: "動作",
        language: "en",
        director: "Antoine Fuqua",
        year: 1998,
        actors: ["周潤發", "曾江"],
        tags: ["索尼影視"]
    },
    {
        name_zh: "銅雀台",
        name_en: "The Assassins",
        genre: "動作",
        language: "zh-m",
        director: "趙林山",
        year: 2012,
        actors: ["周潤發", "劉亦菲", "蘇有朋"],
        tags: []
    },
    {
        name_zh: "孔子",
        name_en: "Confucius",
        genre: "傳記",
        language: "eng",
        director: "胡玫",
        year: 2010,
        actors: ["周潤發", "周迅", "陳建斌"],
        tags: []
    },
    {
        name_zh: "西遊記之大鬧天宮",
        name_en: "The Monkey King",
        genre: "神話",
        language: "zh-m",
        director: "鄭保瑞",
        year: 2010,
        actors: ["周潤發", "郭富城", "甄子丹", "何潤東"],
        tags: []
    },
    {
        name_zh: "華麗上班族",
        name_en: "Johnnie To's Office",
        genre: "劇情",
        language: "zh-c",
        director: "杜琪峰",
        year: 2010,
        actors: ["周潤發", "陳奕迅", "張艾嘉", "湯唯"],
        tags: []
    },
];