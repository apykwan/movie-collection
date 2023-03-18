export interface Movie {
    name_zh: string;
    name_en: string;
    genre: "武俠" | "動作" | "喜劇" | "劇情" | "恐怖" | "英雄" | "神話" | "科幻" | "戰爭" | "傳記" | "歷史" | "驚悚";
    language: "zh-m" | "zh-c" | "en" | "jp" | "kr" | "fr" | "ge" | "th" | "vi" | "other";
    director: string;
    year: number;
    actors: string[];
    tags: string[];
    liked: boolean;
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
        tags: ["邵氏電影"],
        liked: false
    },
    {
        name_zh: "刺馬",
        name_en: "Blood Brothers",
        genre: "武俠",
        language: "zh-m",
        director: "張徹",
        year: 1973,
        actors: ["陳觀泰", "井莉", "姜大衛", "狄龍"],
        tags: ["邵氏電影"],
        liked: false
    },
    {
        name_zh: "獨臂刀",
        name_en: "One-Armed Swordsman",
        genre: "武俠",
        language: "zh-m",
        director: "張徹",
        year: 1967,
        actors: ["王羽", "焦姣", "田豐"],
        tags: ["邵氏電影"],
        liked: false
    },
    {
        name_zh: "獨臂刀王",
        name_en: "Return of One-Armed Swordsman",
        genre: "武俠",
        language: "zh-m",
        director: "張徹",
        year: 1969,
        actors: ["王羽", "焦姣", "田豐"],
        tags: ["邵氏電影"],
        liked: false
    },
    {
        name_zh: "大醉俠",
        name_en: "Come Drink With Me",
        genre: "武俠",
        language: "zh-m",
        director: "胡金銓",
        year: 1966,
        actors: ["岳華", "鄭佩佩"],
        tags: ["邵氏電影"],
        liked: false
    },
    {
        name_zh: "流星蝴蝶劍",
        name_en: "Death Duel",
        genre: "武俠",
        language: "zh-m",
        director: "楚原",
        year: 1976,
        actors: ["宗華", "岳華", "井莉", "凌雲"],
        tags: ["邵氏電影"],
        liked: false
    },
    {
        name_zh: "三少爺的劍",
        name_en: "Killer Clans",
        genre: "武俠",
        language: "zh-m",
        director: "楚原",
        year: 1977,
        actors: ["爾冬陞", "余安安", "凌雲"],
        tags: ["邵氏電影"],
        liked: false
    },
    {
        name_zh: "陸小鳳傳奇之綉花大盜",
        name_en: "Clan of Amazons",
        genre: "武俠",
        language: "zh-m",
        director: "楚原",
        year: 1978,
        actors: ["劉永","岳華", "井莉", "凌雲", "徐少強"],
        tags: ["邵氏電影"],
        liked: false
    },
    {
        name_zh: "陸小鳳之決戰前後",
        name_en: "The Duel of the Century",
        genre: "武俠",
        language: "zh-m",
        director: "楚原",
        year: 1981,
        actors: ["劉永","岳華", "井莉", "白彪"],
        tags: ["邵氏電影"],
        liked: false
    },
    {
        name_zh: "飲食男女",
        name_en: "Eat Drink Man Woman",
        genre: "劇情",
        language: "zh-m",
        director: "李安",
        year: 1994,
        actors: ["郎雄","楊貴媚","吳倩蓮"],
        tags: ["台灣電影"],
        liked: false
    },
    {
        name_zh: "臥虎藏龍",
        name_en: "Crouching Tiger, Hidden Dragon",
        genre: "武俠",
        language: "zh-m",
        director: "李安",
        year: 2000,
        actors: ["周潤發","郎雄","楊紫瓊","章子怡"],
        tags: ["奧斯卡"],
        liked: false
    },
    {
        name_zh: "綠巨人浩克",
        name_en: "Hulk",
        genre: "英雄",
        language: "en",
        director: "李安",
        year: 2003,
        actors: ["艾瑞克·巴納"],
        tags: ["漫威"],
        liked: false
    },
    {
        name_zh: "終極標靶",
        name_en: "Hard Target",
        genre: "動作",
        language: "en",
        director: "吳宇森",
        year: 1993,
        actors: ["尚·克勞德·范達美"],
        tags: [],
        liked: false
    },
    {
        name_zh: "長城",
        name_en: "The Great Wall",
        genre: "科幻",
        language: "en",
        director: "張藝謀",
        year: 2016,
        actors: ["劉德華", "麥特·戴蒙", "彭于晏", "景甜"],
        tags: [],
        liked: false
    },
    {
        name_zh: "滿城盡是黃金甲",
        name_en: "Curse of Golden Flower",
        genre: "歷史",
        language: "zh-m",
        director: "張藝謀",
        year: 2006,
        actors: ["周潤發", "鞏俐", "周杰倫", "劉燁"],
        tags: [],
        liked: false
    },
    {
        name_zh: "十面埋伏",
        name_en: "House of Flying Dagger",
        genre: "武俠",
        language: "zh-m",
        director: "張藝謀",
        year: 2004,
        actors: ["劉德華", "金城武", "章子怡"],
        tags: [],
        liked: false
    },
    {
        name_zh: "歸來",
        name_en: "Coming Home",
        genre: "劇情",
        language: "zh-m",
        director: "張藝謀",
        year: 2014,
        actors: ["陳道明", "鞏俐"],
        tags: [],
        liked: false
    },
    {
        name_zh: "魔翡翠",
        name_en: "Magic Crystal",
        genre: "科幻",
        language: "zh-c",
        director: "王晶",
        year: 1986,
        actors: ["劉德華", "張敏", "陳百祥"],
        tags: ["永盛電影"],
        liked: false
    },
    {
        name_zh: "精裝追女仔",
        name_en: "The Romancing Stars",
        genre: "喜劇",
        language: "zh-c",
        director: "王晶",
        year: 1987,
        actors: ["周潤發", "張敏", "張曼玉" ,"陳百祥", "曾志偉", "馮粹帆"],
        tags: ["永盛電影"],
        liked: false
    },
    {
        name_zh: "至尊三十六計之偷天換日",
        name_en: "Perfect Exchange",
        genre: "喜劇",
        language: "zh-c",
        director: "王晶",
        year: 1993,
        actors: ["劉德華", "梁家輝", "鍾麗緹", "關海山"],
        tags: ["永盛電影"],
        liked: false
    },
    {
        name_zh: "倚天屠龍記之魔教教主",
        name_en: "Kung Fu Cult Master",
        genre: "武俠",
        language: "zh-c",
        director: "王晶",
        year: 1994,
        actors: ["李連杰", "張敏", "洪金寶", "邱淑貞"],
        tags: ["永盛電影"],
        liked: false
    },
    {
        name_zh: "賭俠",
        name_en: "god of Gambler II",
        genre: "喜劇",
        language: "zh-c",
        director: "王晶",
        year: 1990,
        actors: ["劉德華", "周星馳", "吳孟達", "張敏"],
        tags: ["永盛電影"],
        liked: false
    },
    {
        name_zh: "賭俠2之上海灘賭聖",
        name_en: "god of Gambler III: Back to Shanghai",
        genre: "喜劇",
        language: "zh-c",
        director: "王晶",
        year: 1991,
        actors: ["周星馳", "吳孟達", "呂良偉", "鞏俐"],
        tags: ["永盛電影"],
        liked: false
    },
    {
        name_zh: "逃學威龍",
        name_en: "Fight Back to School",
        genre: "喜劇",
        language: "zh-c",
        director: "王晶",
        year: 1991,
        actors: ["周星馳", "吳孟達", "張敏", "張耀揚"],
        tags: ["永盛電影"],
        liked: false
    },
    {
        name_zh: "逃學威龍2",
        name_en: "Fight Back to School 2",
        genre: "喜劇",
        language: "zh-c",
        director: "王晶",
        year: 1992,
        actors: ["周星馳", "吳孟達", "張敏", "朱茵"],
        tags: ["永盛電影"],
        liked: false
    },
    {
        name_zh: "逃學威龍3之龍過雞年",
        name_en: "Fight Back to School 3",
        genre: "喜劇",
        language: "zh-c",
        director: "王晶",
        year: 1993,
        actors: ["周星馳", "陳百祥", "張敏", "梅艷芳"],
        tags: ["永盛電影"],
        liked: false
    },
    {
        name_zh: "追龍II：賊王",
        name_en: "Chasing the Dragon II: Wild Wild Bunch",
        genre: "動作",
        language: "zh-c",
        director: "王晶",
        year: 2019,
        actors: ["梁家輝", "古天樂", "林家棟"],
        tags: [],
        liked: false
    },
    {
        name_zh: "魔警",
        name_en: "The Demon Within",
        genre: "動作",
        language: "zh-c",
        director: "林超賢",
        year: 2014,
        actors: ["吳彥祖", "張家輝"],
        tags: ["英皇電影"],
        liked: false
    },
    {
        name_zh: "火龍",
        name_en: "The Demon Within",
        genre: "動作",
        language: "zh-c",
        director: "林超賢",
        year: 2010,
        actors: ["黎明", "任賢齊", "王寶強"],
        tags: ["寰亞電影"],
        liked: false
    },
    {
        name_zh: "逆戰",
        name_en: "The Viral Factor",
        genre: "動作",
        language: "zh-c",
        director: "林超賢",
        year: 2012,
        actors: ["謝霆鋒", "周杰倫"],
        tags: ["英皇電影"],
        liked: false
    },
    {
        name_zh: "激戰",
        name_en: "Unbeatable",
        genre: "動作",
        language: "zh-c",
        director: "林超賢",
        year: 2013,
        actors: ["張家輝", "彭于晏"],
        tags: [],
        liked: false
    },
    {
        name_zh: "紅海行動",
        name_en: "Operation Red Sea",
        genre: "戰爭",
        language: "zh-c",
        director: "林超賢",
        year: 2018,
        actors: ["張譯", "張涵予"],
        tags: ["英皇電影"],
        liked: false
    },
    {
        name_zh: "危城",
        name_en: "Call of Heroesr",
        genre: "動作",
        language: "zh-c",
        director: "陳木勝",
        year: 2016,
        actors: ["劉青雲", "古天樂", "彭于晏"],
        tags: [],
        liked: false
    },
    {
        name_zh: "怒火",
        name_en: "Raging Fire",
        genre: "動作",
        language: "zh-c",
        director: "陳木勝",
        year: 2021,
        actors: ["甄子丹", "謝霆鋒"],
        tags: ["英皇電影"],
        liked: false
    },
    {
        name_zh: "掃毒",
        name_en: "The White Storm",
        genre: "動作",
        language: "zh-c",
        director: "陳木勝",
        year: 2016,
        actors: ["劉青雲", "古天樂", "張家輝", "袁泉"],
        tags: [],
        liked: false
    },
    {
        name_zh: "龍爭虎鬥",
        name_en: "Enter the Dragon",
        genre: "動作",
        language: "en",
        director: "Robert Clouse",
        year: 1973,
        actors: ["李小龍", "石堅", "喬宏"],
        tags: ["華納兄弟"],
        liked: false
    },
    {
        name_zh: "精武門",
        name_en: "Fist of Fury",
        genre: "動作",
        language: "en",
        director: "羅維",
        year: 1972,
        actors: ["李小龍", "苗可秀", "田豐"],
        tags: ["嘉禾電影"],
        liked: false
    },
    {
        name_zh: "猛龍過江",
        name_en: "The Way of the Dragon",
        genre: "動作",
        language: "en",
        director: "李小龍",
        year: 1972,
        actors: ["李小龍", "苗可秀", "查克·羅禮士"],
        tags: ["嘉禾電影"],
        liked: false
    },
    {
        name_zh: "浴血蛟龍",
        name_en: "Showdown in Little Tokyo (1991)",
        genre: "動作",
        language: "en",
        director: "Mark L. Lester",
        year: 1972,
        actors: ["李國豪"],
        tags: ["華納兄弟"],
        liked: false
    },
    {
        name_zh: "龍族戰神",
        name_en: "The Crow",
        genre: "動作",
        language: "en",
        director: "Alex Proyas",
        year: 1994,
        actors: ["李國豪"],
        tags: [],
        liked: false
    },
    {
        name_zh: "末代皇帝",
        name_en: "The Last Emperor",
        genre: "傳記",
        language: "en",
        director: "Bernardo Bertolucci",
        year: 1987,
        actors: ["尊龍", "陳沖", "鄔君梅", "彼得·奧圖"],
        tags: ["哥倫比亞", "奧斯卡"],
        liked: false
    },
    {
        name_zh: "龍年",
        name_en: "Year of the Dragon",
        genre: "劇情",
        language: "en",
        director: "Michael Cimino",
        year: 1985,
        actors: ["尊龍", "黃自強"],
        tags: ["米高梅"],
        liked: false
    },
    {
        name_zh: "冰人四萬年",
        name_en: "Iceman",
        genre: "科幻",
        language: "en",
        director: "Fred Schepisi",
        year: 1984,
        actors: ["尊龍"],
        tags: ["環球影業"],
        liked: false
    },
    {
        name_zh: "魅影奇俠",
        name_en: "The Shadow",
        genre: "科幻",
        language: "en",
        director: "Russell Mulcahy",
        year: 1994,
        actors: ["尊龍"],
        tags: ["環球影業"],
        liked: false
    },
    {
        name_zh: "紅番區",
        name_en: "Rumble in the Bronx",
        genre: "動作",
        language: "en",
        director: "唐季禮",
        year: 1995,
        actors: ["成龍", "梅艷芳", "董驃", "岳華"],
        tags: ["嘉禾電影"],
        liked: false
    },
    {
        name_zh: "新宿事件",
        name_en: "Shinjuku Incident",
        genre: "劇情",
        language: "en",
        director: "爾冬陞",
        year: 2009,
        actors: ["成龍", "吳彥祖", "范冰冰"],
        tags: ["英皇電影"],
        liked: false
    },
    {
        name_zh: "英倫對決",
        name_en: "The Foreigner (2017)",
        genre: "動作",
        language: "en",
        director: "Martin Campbell",
        year: 2017,
        actors: ["成龍", "Pierce Brosnan"],
        tags: [],
        liked: false
    },
    {
        name_zh: "西域威龍",
        name_en: "Shanghai Noon",
        genre: "喜劇",
        language: "en",
        director: "Tom Dey",
        year: 2000,
        actors: ["成龍", "Owen Wilson", "劉玉玲"],
        tags: [],
        liked: false
    },
    {
        name_zh: "皇家威龍",
        name_en: "Shanghai Knight",
        genre: "喜劇",
        language: "en",
        director: "David Dobkin",
        year: 2003,
        actors: ["成龍", "Owen Wilson", "甄子丹"],
        tags: [],
        liked: false
    },
    {
        name_zh: "功夫夢",
        name_en: "The Karate Kid",
        genre: "喜劇",
        language: "en",
        director: "Harald Zwart",
        year: 2010,
        actors: ["成龍"],
        tags: [],
        liked: false
    },
    {
        name_zh: "燕尾服",
        name_en: "The Tuxedo",
        genre: "喜劇",
        language: "en",
        director: "Kevin Donovan",
        year: 2002,
        actors: ["成龍"],
        tags: [],
        liked: false
    },
    {
        name_zh: "安娜與國王",
        name_en: "Anna and the King",
        genre: "傳記",
        language: "en",
        director: "Andy Tennant",
        year: 1999,
        actors: ["周潤發", "Jodie Foster", "白靈"],
        tags: ["二十世紀福斯"],
        liked: false
    },
    {
        name_zh: "替身殺手",
        name_en: "The Replacement Killer",
        genre: "動作",
        language: "en",
        director: "Antoine Fuqua",
        year: 1998,
        actors: ["周潤發", "曾江"],
        tags: ["索尼影視"],
        liked: false
    },
    {
        name_zh: "銅雀台",
        name_en: "The Assassins",
        genre: "歷史",
        language: "zh-m",
        director: "趙林山",
        year: 2012,
        actors: ["周潤發", "劉亦菲", "蘇有朋"],
        tags: [],
        liked: false
    },
    {
        name_zh: "孔子",
        name_en: "Confucius",
        genre: "傳記",
        language: "en",
        director: "胡玫",
        year: 2010,
        actors: ["周潤發", "周迅", "陳建斌"],
        tags: [],
        liked: false
    },
    {
        name_zh: "西遊記之大鬧天宮",
        name_en: "The Monkey King",
        genre: "神話",
        language: "zh-m",
        director: "鄭保瑞",
        year: 2010,
        actors: ["周潤發", "郭富城", "甄子丹", "何潤東"],
        tags: [],
        liked: false
    },
    {
        name_zh: "華麗上班族",
        name_en: "Johnnie To's Office",
        genre: "劇情",
        language: "zh-c",
        director: "杜琪峰",
        year: 2010,
        actors: ["周潤發", "陳奕迅", "張艾嘉", "湯唯"],
        tags: [],
        liked: false
    },
    {
        name_zh: "致命羅密歐",
        name_en: "Romeo Must Die",
        genre: "動作",
        language: "en",
        director: "Andrzej Bartkowiak",
        year: 2000,
        actors: ["李連杰"],
        tags: [],
        liked: false
    },
    {
        name_zh: "龍潭虎穴",
        name_en: "Cradle 2 the Grave",
        genre: "動作",
        language: "en",
        director: "Andrzej Bartkowiak",
        year: 2003,
        actors: ["李連杰", "DMX"],
        tags: [],
        liked: false
    },
    {
        name_zh: "鬥犬",
        name_en: "Unleashed",
        genre: "動作",
        language: "en",
        director: "Louis Leterrier",
        year: 2005,
        actors: ["李連杰", "摩根·弗里曼"],
        tags: [],
        liked: false
    },
    {
        name_zh: "在陌生的城市",
        name_en: "In a Strange City",
        genre: "劇情",
        language: "zh-m",
        director: "尹祺",
        year: 1996,
        actors: ["趙文瑄", "楊貴媚"],
        tags: ["台灣電影"],
        liked: false
    },
    {
        name_zh: "阿金",
        name_en: "Ah Kam",
        genre: "動作",
        language: "zh-c",
        director: "許鞍華",
        year: 1996,
        actors: ["楊紫瓊", "洪金寶", "張家輝"],
        tags: [],
        liked: false
    },
    {
        name_zh: "情人盒子",
        name_en: "Chinese Box",
        genre: "劇情",
        language: "en",
        director: "王穎",
        year: 1996,
        actors: ["鞏俐", "張曼玉", "許冠文", "Jeremy Irons"],
        tags: [""],
        liked: false
    },
    {
        name_zh: "邁阿密風暴",
        name_en: "Miami Vice",
        genre: "動作",
        language: "en",
        director: "Michael Mann",
        year: 2006,
        actors: ["鞏俐"],
        tags: [],
        liked: false
    },
    {
        name_zh: "危險關係",
        name_en: "Dangerous liaisons",
        genre: "劇情",
        language: "zh-m",
        director: "許秦豪",
        year: 2012,
        actors: ["章子怡", "張柏芝", "張東健"],
        tags: [],
        liked: false
    },
    {
        name_zh: "失孤",
        name_en: "Lost and Love",
        genre: "劇情",
        language: "zh-m",
        director: "彭三源",
        year: 2015,
        actors: ["劉德華", "井柏然"],
        tags: [],
        liked: false
    },
    {
        name_zh: "解救吾先生",
        name_en: "Saving Mr. Wu",
        genre: "劇情",
        language: "zh-m",
        director: "丁晟",
        year: 2015,
        actors: ["劉德華", "劉燁", "王千源"],
        tags: [],
        liked: false
    },
    {
        name_zh: "風暴",
        name_en: "Firestorm",
        genre: "劇情",
        language: "zh-c",
        director: "袁錦麟",
        year: 2015,
        actors: ["劉德華", "姜皓文", "林家棟"],
        tags: [],
        liked: false
    },
    {
        name_zh: "特工爺爺",
        name_en: "My Beloved Bodyguard",
        genre: "劇情",
        language: "zh-c",
        director: "洪金寶",
        year: 2016,
        actors: ["劉德華", "洪金寶"],
        tags: [],
        liked: false
    },
    {
        name_zh: "拆彈專家",
        name_en: "Shock Wave",
        genre: "劇情",
        language: "zh-c",
        director: "	邱禮濤",
        year: 2017,
        actors: ["劉德華", "姜皓文"],
        tags: [],
        liked: false
    },
    {
        name_zh: "花椒之味",
        name_en: "Fagara",
        genre: "劇情",
        language: "zh-c",
        director: "麥曦茵",
        year: 2019,
        actors: ["劉德華", "鄭秀文", "任賢齊", "鍾鎮濤"],
        tags: ["英皇電影"],
        liked: false
    },
    {
        name_zh: "消失的子彈",
        name_en: "The Bullet Vanishes",
        genre: "劇情",
        language: "zh-c",
        director: "羅志良",
        year: 2012,
        actors: ["劉青雲", "謝霆鋒", "井柏然", "楊冪"],
        tags: ["英皇電影"],
        liked: false
    },
    {
        name_zh: "葉問",
        name_en: "Ip Man",
        genre: "傳記",
        language: "zh-c",
        director: "葉偉信",
        year: 2008,
        actors: ["甄子丹", "熊黛林", "任達華", "林家棟"],
        tags: [],
        liked: false
    },
    {
        name_zh: "葉問2",
        name_en: "Ip Man 2",
        genre: "傳記",
        language: "zh-c",
        director: "葉偉信",
        year: 2010,
        actors: ["甄子丹", "熊黛林", "任達華", "黃曉明"],
        tags: [],
        liked: false
    },
    {
        name_zh: "葉問3",
        name_en: "Ip Man 3",
        genre: "傳記",
        language: "zh-c",
        director: "葉偉信",
        year: 2015,
        actors: ["甄子丹", "熊黛林", "任達華", "張晉", "陳國坤"],
        tags: [],
        liked: false
    },
    {
        name_zh: "葉問4：完結篇",
        name_en: "Ip Man 4: The Finale",
        genre: "傳記",
        language: "zh-c",
        director: "葉偉信",
        year: 2019,
        actors: ["甄子丹", "熊黛林", "陳國坤", "吳建豪", "吳樾"],
        tags: [],
        liked: false
    },
    {
        name_zh: "特殊身份",
        name_en: "Special ID",
        genre: "動作",
        language: "zh-c",
        director: "霍耀良",
        year: 2013,
        actors: ["甄子丹", "安志杰", "張涵予", "景甜"],
        tags: [],
        liked: false
    },
    {
        name_zh: "少林足球",
        name_en: "Shaolin Soccer",
        genre: "喜劇",
        language: "zh-c",
        director: "李力持",
        year: 2001,
        actors: ["周星馳", "吳孟達", "陳國坤", "趙薇", "謝賢"],
        tags: ["星輝"],
        liked: false
    },
    {
        name_zh: "功夫",
        name_en: "Kung Fu Hustle",
        genre: "喜劇",
        language: "zh-c",
        director: "周星馳",
        year: 2004,
        actors: ["周星馳", "陳國坤", "梁小龍", "元華"],
        tags: ["星輝"],
        liked: false
    },
    {
        name_zh: "香港仔",
        name_en: "Aberdeen",
        genre: "劇情",
        language: "zh-c",
        director: "彭浩翔",
        year: 2014,
        actors: ["吳孟達", "古天樂", "楊千嬅", "梁詠琪", "曾志偉"],
        tags: [],
        liked: false
    },
    {
        name_zh: "導火新聞線",
        name_en: "The Menu",
        genre: "劇情",
        language: "zh-c",
        director: "方俊華",
        year: 2016,
        actors: ["吳孟達", "周家怡", "郭峰"],
        tags: [],
        liked: false
    },
    {
        name_zh: "東邪西毒",
        name_en: "Ash of Time Redux",
        genre: "武俠",
        language: "zh-c",
        director: "王家衛",
        year: 1994,
        actors: ["張國榮", "林青霞", "梁家輝", "梁朝偉", "張曼玉", "張學友"],
        tags: [],
        liked: false
    },
    {
        name_zh: "金玉滿堂",
        name_en: "The Chinese Feast",
        genre: "喜劇",
        language: "zh-c",
        director: "徐克",
        year: 1995,
        actors: ["張國榮", "鍾鎮濤", "羅家英", "袁詠儀", "趙文卓"],
        tags: [],
        liked: false
    },
    {
        name_zh: "九二黑玫瑰對黑玫瑰",
        name_en: "92 Legendary La Rose Noire",
        genre: "喜劇",
        language: "zh-c",
        director: "劉鎮偉",
        year: 1992,
        actors: ["梁家輝", "邵美琪", "毛舜筠", "馮寶寶"],
        tags: ["香港金像獎"],
        liked: false
    },
    {
        name_zh: "雙瞳",
        name_en: "Double Vision",
        genre: "恐怖",
        language: "zh-c",
        director: "陳國富",
        year: 2002,
        actors: ["梁家輝", "劉若英", "大衛·摩斯", "郎雄", "楊貴媚"],
        tags: ["台灣電影"],
        liked: false
    },
    {
        name_zh: "流氓醫生",
        name_en: "Mack the Knife",
        genre: "喜劇",
        language: "zh-c",
        director: "李志毅",
        year: 1995,
        actors: ["梁朝偉", "劉青雲", "羅家英", "梁詠琪", "鍾麗緹", "陳小春"],
        tags: [],
        liked: false
    },
    {
        name_zh: "安娜馬德蓮娜",
        name_en: "Anna Magdalena",
        genre: "喜劇",
        language: "zh-c",
        director: "奚仲文",
        year: 1998,
        actors: ["郭富城", "陳慧琳", "金城武", "曾志偉", "張學友", "張國榮", "袁詠儀"],
        tags: [],
        liked: false
    },
    {
        name_zh: "大追捕",
        name_en: "Nightfall",
        genre: "劇情",
        language: "zh-c",
        director: "周顯揚",
        year: 2012,
        actors: ["張家輝", "文詠珊", "任達華", "余安安"],
        tags: [],
        liked: false
    },
    {
        name_zh: "毒戰",
        name_en: "Drug War",
        genre: "動作",
        language: "zh-c",
        director: "杜琪峯",
        year: 2013,
        actors: ["古天樂", "孫紅雷", "林家棟", "鍾漢良", "姜皓文", "林雪"],
        tags: [],
        liked: false
    },
    {
        name_zh: "鎗王之王",
        name_en: "Triple Tap",
        genre: "劇情",
        language: "zh-c",
        director: "爾冬陞",
        year: 2010,
        actors: ["古天樂", "吳彥祖", "李冰冰", "蔡卓妍", "林雪"],
        tags: ["英皇電影"],
        liked: false
    },
    {
        name_zh: "殺破狼II",
        name_en: "Kill Zone 2",
        genre: "動作",
        language: "zh-c",
        director: "鄭保瑞",
        year: 2015,
        actors: ["古天樂", "東尼嘉", "吳京", "任達華", "張晉"],
        tags: [],
        liked: false
    },
    {
        name_zh: "迷城",
        name_en: "Wild City",
        genre: "劇情",
        language: "zh-c",
        director: "林嶺東",
        year: 2015,
        actors: ["古天樂", "余文樂", "佟麗婭", "任達華", "姜皓文", "李璨琛"],
        tags: [],
        liked: false
    },
    {
        name_zh: "常在你左右",
        name_en: "Always Be With You",
        genre: "恐怖",
        language: "zh-c",
        director: "	邱禮濤",
        year: 2017,
        actors: ["古天樂", "張智霖", "林家棟", "蔡卓妍", "羅蘭", "林雪"],
        tags: [],
        liked: false
    },
    {
        name_zh: "狂獸",
        name_en: "The Brink",
        genre: "動作",
        language: "zh-c",
        director: "	李子俊",
        year: 2017,
        actors: ["余文樂", "張晉", "文詠珊", "林家棟", "吳樾"],
        tags: [],
        liked: false
    },
    {
        name_zh: "春嬌與志明",
        name_en: "Love in the Buff",
        genre: "劇情",
        language: "zh-c",
        director: "彭浩翔",
        year: 2012,
        actors: ["余文樂", "楊千嬅", "楊冪", "黃曉明", "徐崢"],
        tags: ["寰亞電影"],
        liked: false
    },
    {
        name_zh: "童眼",
        name_en: "Child's Eye",
        genre: "恐怖",
        language: "zh-c",
        director: "彭氏兄弟",
        year: 2012,
        actors: ["余文樂", "楊丞琳", "林家棟"],
        tags: ["寰亞電影"],
        liked: false
    },
    {
        name_zh: "殭屍",
        name_en: "Rigor Mortis",
        genre: "恐怖",
        language: "zh-c",
        director: "麥浚龍",
        year: 2013,
        actors: ["錢小豪", "陳友", "惠英紅", "吳耀漢"],
        tags: [],
        liked: false
    },
    {
        name_zh: "夏日的麼麼茶",
        name_en: "Summer Holiday",
        genre: "劇情",
        language: "zh-c",
        director: "馬楚成",
        year: 2000,
        actors: ["任賢齊", "鄭秀文"],
        tags: ["嘉禾電影"],
        liked: false
    },
    {
        name_zh: "人在囧途之泰囧",
        name_en: "Lost in Thailand",
        genre: "喜劇",
        language: "zh-m",
        director: "徐峥",
        year: 2012,
        actors: ["徐崢", "黃渤", "王寶強"],
        tags: [],
        liked: false
    },
    {
        name_zh: "港囧",
        name_en: "Lost in Hong Kong",
        genre: "喜劇",
        language: "zh-m",
        director: "徐崢",
        year: 2015,
        actors: ["徐崢", "趙薇", "葛民輝", "李璨琛"],
        tags: [],
        liked: false
    },
    {
        name_zh: "心花路放",
        name_en: "Breakup Buddies",
        genre: "喜劇",
        language: "zh-m",
        director: "寧浩",
        year: 2014,
        actors: ["徐崢", "黃渤", "袁泉"],
        tags: [],
        liked: false
    },
    {
        name_zh: "我不是藥神",
        name_en: "Dying to Survive",
        genre: "劇情",
        language: "zh-m",
        director: "文牧野",
        year: 2016,
        actors: ["徐崢"],
        tags: [],
        liked: false
    },
    {
        name_zh: "西遊·降魔篇",
        name_en: "Journey to the West: Conquering the Demons",
        genre: "神話",
        language: "zh-m",
        director: "	周星馳",
        year: 2013,
        actors: ["舒淇", "文章", "黃渤", "羅志祥"],
        tags: [],
        liked: false
    },
    {
        name_zh: "白髮魔女傳之明月天國",
        name_en: "The White Haired Witch of Lunar Kingdom",
        genre: "武俠",
        language: "zh-m",
        director: "張之亮",
        year: 2014,
        actors: ["范冰冰", "黃曉明", "趙文卓"],
        tags: [],
        liked: false
    },
    {
        name_zh: "天地英雄",
        name_en: "Warriors of Heaven and Earth",
        genre: "動作",
        language: "zh-m",
        director: "	何平",
        year: 2003,
        actors: ["趙薇"],
        tags: [],
        liked: false
    },
    {
        name_zh: "白日焰火",
        name_en: "Black Coal, Thin Ice",
        genre: "劇情",
        language: "zh-m",
        director: "刁亦男",
        year: 2014,
        actors: ["廖凡", "桂綸鎂"],
        tags: [],
        liked: false
    },
    {
        name_zh: "火鍋英雄",
        name_en: "Chongqing Hot Pot",
        genre: "劇情",
        language: "zh-m",
        director: "楊慶",
        year: 2016,
        actors: ["陳坤", "秦昊"],
        tags: [],
        liked: false
    },
    {
        name_zh: "熱淚傷痕",
        name_en: "Dolores Claiborne",
        genre: "驚悚",
        language: "en",
        director: "Taylor Hackford",
        year: 1995,
        actors: ["Kathy Bates", "Selena St. George"],
        tags: ["史蒂芬·金"],
        liked: false
    },
    {
        name_zh: "戰慄遊戲",
        name_en: "Misery",
        genre: "恐怖",
        language: "en",
        director: "Rob Reiner",
        year: 1990,
        actors: ["Kathy Bates", "James Caan"],
        tags: ["史蒂芬·金"],
        liked: false
    },
    {
        name_zh: "魔女嘉莉",
        name_en: "Carrie",
        genre: "恐怖",
        language: "en",
        director: "Brian De Palma",
        year: 1976,
        actors: ["Sissy Spacek"],
        tags: ["史蒂芬·金"],
        liked: false
    },
    {
        name_zh: "迷霧驚魂",
        name_en: "The Mist",
        genre: "恐怖",
        language: "en",
        director: "Frank Darabont",
        year: 2007,
        actors: ["Thomas Jane", "Laurie Holden"],
        tags: ["史蒂芬·金"],
        liked: false
    },
    {
        name_zh: "鬼作秀",
        name_en: "Creepshow",
        genre: "恐怖",
        language: "en",
        director: "George A. Romero",
        year: 1982,
        actors: ["史蒂芬·金"],
        tags: ["史蒂芬·金"],
        liked: false
    },
    {
        name_zh: "克麗絲汀魅力",
        name_en: "Christine",
        genre: "恐怖",
        language: "en",
        director: "George A. Romero",
        year: 1982,
        actors: ["Kelly Preston"],
        tags: ["史蒂芬·金"],
        liked: false
    },
    {
        name_zh: "玉米田的孩子",
        name_en: "Children of the Corn",
        genre: "恐怖",
        language: "en",
        director: "Fritz Kiersch",
        year: 1984,
        actors: ["Linda Hamilton"],
        tags: ["史蒂芬·金"],
        liked: false
    },
    {
        name_zh: "魔鬼阿諾",
        name_en: "The Running Man",
        genre: "科幻",
        language: "en",
        director: "Paul Glaser",
        year: 1987,
        actors: ["阿諾·史瓦辛格"],
        tags: ["史蒂芬·金"],
        liked: false
    },
    {
        name_zh: "",
        name_en: "Cat's Eye",
        genre: "恐怖",
        language: "en",
        director: "Lewis Teague",
        year: 1985,
        actors: ["Drew Barrymore"],
        tags: ["史蒂芬·金"],
        liked: false
    },
    {
        name_zh: "撒冷地",
        name_en: "Salem's Lot",
        genre: "恐怖",
        language: "en",
        director: "Tobe Hooper",
        year: 1979,
        actors: ["David Soul", "James Mason"],
        tags: ["史蒂芬·金"],
        liked: false
    },
    {
        name_zh: "鬼店",
        name_en: "The Shining",
        genre: "恐怖",
        language: "en",
        director: "Stanley Kubrick",
        year: 1980,
        actors: ["傑克·尼克遜"],
        tags: ["史蒂芬·金"],
        liked: false
    },
    {
        name_zh: "安眠醫生",
        name_en: "Doctor Sleep",
        genre: "恐怖",
        language: "en",
        director: "Mike Flanagan",
        year: 2019,
        actors: ["Ewan McGregor"],
        tags: ["史蒂芬·金"],
        liked: false
    },
    {
        name_zh: "綠色奇蹟",
        name_en: "The Green Mile",
        genre: "劇情",
        language: "en",
        director: "Frank Darabont",
        year: 1999,
        actors: ["湯姆·漢克", "大衛·摩斯", "Michael Duncan"],
        tags: ["史蒂芬·金"],
        liked: false
    },
    {
        name_zh: "牠",
        name_en: "It",
        genre: "恐怖",
        language: "en",
        director: "Andrés Muschietti",
        year: 2017,
        actors: ["Jaeden Martell"],
        tags: ["史蒂芬·金"],
        liked: false
    },
    {
        name_zh: "牠：第二章",
        name_en: "It Chapter Two",
        genre: "恐怖",
        language: "en",
        director: "Andrés Muschietti",
        year: 2019,
        actors: ["詹姆斯·麥艾維", "Jaeden Martell", "Jessica Chastain"],
        tags: ["史蒂芬·金"],
        liked: false
    },
    {
        name_zh: "",
        name_en: "1408",
        genre: "恐怖",
        language: "en",
        director: "Mikael Håfström",
        year: 2007,
        actors: ["John Cusack", "山繆·傑克森"],
        tags: ["史蒂芬·金"],
        liked: false
    },
    {
        name_zh: "終極追殺令",
        name_en: "Léon: The Professional",
        genre: "動作",
        language: "en",
        director: "盧·貝松",
        year: 1994,
        actors: ["尚·雷諾", "娜塔莉·波曼"],
        tags: [],
        liked: false
    },
    {
        name_zh: "露西",
        name_en: "Lucy",
        genre: "科幻",
        language: "en",
        director: "盧·貝松",
        year: 2014,
        actors: ["史嘉蕾·喬韓森", "摩根·費里曼"],
        tags: [],
        liked: false
    },
    {
        name_zh: "鬼哭神號",
        name_en: "Poltergeist",
        genre: "恐怖",
        language: "en",
        director: "Willard Hooper",
        year: 1982,
        actors: ["Heather O'Rourke"],
        tags: ["史蒂芬·史匹柏"],
        liked: false
    },
    {
        name_zh: "大白鯊",
        name_en: "Jaws",
        genre: "恐怖",
        language: "en",
        director: "史蒂芬·史匹柏",
        year: 1975,
        actors: ["Roy Scheider"],
        tags: ["史蒂芬·史匹柏"],
        liked: false
    },
    {
        name_zh: "E.T.外星人",
        name_en: "E.T. the Extra-Terrestrial",
        genre: "科幻",
        language: "en",
        director: "史蒂芬·史匹柏",
        year: 1982,
        actors: ["Henry Thomas"],
        tags: ["史蒂芬·史匹柏"],
        liked: false
    },
    {
        name_zh: "辛德勒的名單",
        name_en: "Schindler's List",
        genre: "傳記",
        language: "en",
        director: "史蒂芬·史匹柏",
        year: 1993,
        actors: ["連恩·尼遜", "班·金斯利"],
        tags: ["史蒂芬·史匹柏"],
        liked: false
    },
    {
        name_zh: "慕尼黑",
        name_en: "Munich",
        genre: "傳記",
        language: "en",
        director: "史蒂芬·史匹柏",
        year: 2005,
        actors: ["艾瑞克·巴納", "丹尼爾·克雷格"],
        tags: ["史蒂芬·史匹柏"],
        liked: false
    },
    {
        name_zh: "藝伎回憶錄",
        name_en: "Memoirs of a Geisha",
        genre: "劇情",
        language: "en",
        director: "Rob Marshall",
        year: 2005,
        actors: ["章子怡", "鞏俐", "楊紫瓊", "曾江", "渡邊謙"],
        tags: ["史蒂芬·史匹柏"],
        liked: false
    },
    {
        name_zh: "小精靈",
        name_en: "Gremlins",
        genre: "喜劇",
        language: "en",
        director: "Joe Dante",
        year: 1984,
        actors: ["Zach Galligan"],
        tags: ["史蒂芬·史匹柏"],
        liked: false
    },
    {
        name_zh: "小精靈2",
        name_en: "Gremlins 2: The New Batch",
        genre: "喜劇",
        language: "en",
        director: "Joe Dante",
        year: 1990,
        actors: ["Zach Galligan"],
        tags: ["史蒂芬·史匹柏"],
        liked: false
    },
    {
        name_zh: "",
        name_en: "Repulsion",
        genre: "驚悚",
        language: "en",
        director: "羅曼·波蘭斯基",
        year: 1965,
        actors: ["Catherine Deneuve"],
        tags: [],
        liked: false
    },
    {
        name_zh: "失嬰記",
        name_en: "Rosemary's Baby",
        genre: "恐怖",
        language: "en",
        director: "羅曼·波蘭斯基",
        year: 1968,
        actors: ["米亞·法羅", "約翰·卡薩維蒂"],
        tags: [],
        liked: false
    },
    {
        name_zh: "唐人街",
        name_en: "Chinatown",
        genre: "驚悚",
        language: "en",
        director: "羅曼·波蘭斯基",
        year: 1974,
        actors: ["傑克·尼克遜", "費·唐娜薇"],
        tags: [],
        liked: false
    },
    {
        name_zh: "",
        name_en: "The Tenant",
        genre: "驚悚",
        language: "en",
        director: "羅曼·波蘭斯基",
        year: 1976,
        actors: ["羅曼·波蘭斯基"],
        tags: [],
        liked: false
    },
];