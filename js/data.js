     
     
        // id: $number$
            // only include ids to master and slave tags

        // name: $string$
            // tag name

        // description: $string$
            // tag desc

        // category: $string$
            // tag category

        // status: $number$
            // 1: normal, 2: extreme, 3: obsolete

        // comment: $string$
            // tag comments 
        // comment: null
            // for no comments 

        // aliases: [$string$]
            // for no comments 

        // slaveTags: [%id%]
            // only for master tags


const tagsData = {
    tags: [
      {
        id: 1,
        name: "RenPy",
        description: "Games made using Ren'Py visual novel engine",
        category: "Engine",
        status: 1,
        comment: "Common in visual novels and dating sims",
        aliases: ["Ren'Py"],
        slaveTags: []
      },
      {
        id: 2,
        name: "Unity3D",
        description: "Games developed using Unity 3D engine",
        category: "Engine",
        status: 1,
        comment: null,
        aliases: ["Unity"],
        slaveTags: []
      },
      {
        id: 3,
        name: "UnrealEngine",
        description: "Games developed using UE engine",
        category: "Engine",
        status: 1,
        comment: null,
        aliases: ["UE"],
        slaveTags: []
      },
      {
        id: 4,
        name: "RPGM",
        description: "Games developed using RPG Maker engine",
        category: "Engine",
        status: 1,
        comment: "Common for RPG games",
        aliases: ["RPG Maker"],
        slaveTags: []
      },
      {
        id: 5,
        name: "HTML",
        description: "Games developed using HTML file format",
        category: "Engine",
        status: 1,
        comment: "Common for Text-based games",
        aliases: [],
        slaveTags: []
      },
      {
        id: 6,
        name: "Java",
        description: "Games developed using JS file format",
        category: "Engine",
        status: 1,
        comment: null,
        aliases: [],
        slaveTags: []
      },
      {
        id: 7,
        name: "Flash",
        description: "Games that made in Adobe Flash",
        category: "Engine",
        status: 1,
        comment: "Common for web browser games",
        aliases: ["Adobe", "Adobe Flash"],
        slaveTags: []
      },
      {
        id: 8,
        name: "Others",
        description: "Games that do not come up with engines listed on Engine tab",
        category: "Engine",
        status: 1,
        comment: null,
        aliases: [],
        slaveTags: []
      },





      {
        id: 9,
        name: "2D-game",
        description: "Games that only use 2 dimensions to build a game",
        category: "Technical",
        status: 1,
        comment: null,
        aliases: [""],
        slaveTags: []
      },
      {
        id: 10,
        name: "2D-cg",
        description: "Games that use 2 dimensions for their image illustrations",
        category: "Technical",
        status: 1,
        comment: null,
        aliases: [],
        slaveTags: []
      },
      {
        id: 11,
        name: "3D-game",
        description: "Games that use 3 dimensions to build a game",
        category: "Technical",
        status: 1,
        comment: null,
        aliases: [],
        slaveTags: []
      },
      {
        id: 12,
        name: "3D-cg",
        description: "Games that use 3 dimensions for their image illustrations",
        category: "Technical",
        status: 1,
        comment: null,
        aliases: [],
        slaveTags: []
      },
      {
        id: 13,
        name: "AI-cg",
        description: "Games that use AI generation to illustrate images",
        category: "Technical",
        status: 1,
        comment: null,
        aliases: [],
        slaveTags: []
      },
      {
        id: 14,
        name: "Animated",
        description: "Sex scenes are is animated",
        category: "Technical",
        status: 1,
        comment: null,
        aliases: ["Anime"],
        slaveTags: []
      },
      {
        id: 15,
        name: "RealLife",
        description: "[TBD]",
        category: "Technical",
        status: 1,
        comment: "Really?",
        aliases: ["Real porn"],
        slaveTags: []
      },
      {
        id: 16,
        name: "Voiced",
        description: "Text is fully or partially voiced by voice actors",
        category: "Technical",
        status: 1,
        comment: null,
        aliases: ["VA", "Voice actor"],
        slaveTags: []
      },



      
      {
        id: 17,
        name: "Japanese",
        description: "Japanese language",
        category: "Language",
        status: 1,
        comment: null,
        aliases: ["JP"],
        slaveTags: []
      },
      {
        id: 18,
        name: "Korean",
        description: "Korean language",
        category: "Language",
        status: 1,
        comment: null,
        aliases: ["KOR"],
        slaveTags: []
      },
      {
        id: 19,
        name: "English",
        description: "English language",
        category: "Language",
        status: 1,
        comment: null,
        aliases: ["EN", "GB", "USA", "US"],
        slaveTags: []
      },
      {
        id: 20,
        name: "Russian",
        description: "Russian language",
        category: "Language",
        status: 1,
        comment: null,
        aliases: ["RU"],
        slaveTags: []
      },
      {
        id: 21,
        name: "Other-language",
        description: "Any other language",
        category: "Language",
        status: 1,
        comment: null,
        aliases: [],
        slaveTags: []
      },



      
      {
        id: 22,
        name: "Ahegao",
        description: "[TBD]",
        category: "Kinks",
        status: 1,
        comment: null,
        aliases: [],
        slaveTags: []
      },
      {
        id: 23,
        name: "Age-difference",
        description: "Significant age gap between characters",
        category: "Kinks",
        status: 2,
        comment: "Includes various age-gap relationships",
        aliases: [
          "age"
        ],
        slaveTags: ['Dilf', 'Milf', "Lolicon", "Shota"]
            
      },
      {
        id: 24,
        name: "Anal-sex",
        description: "[TBD]",
        category: "Kinks",
        status: 2,
        comment: null,
        aliases: [],
        slaveTags: []
      },
      {
        id: 25,
        name: "BDSM",
        description: "[TBD]",
        category: "Kinks",
        status: 2,
        comment: null,
        aliases: ["bondage", "sadomasochism", "sadism", "masochism"],
        slaveTags: []
      },
      {
        id: 26,
        name: "Bestiality",
        description: "Sexual acts involving animals.",
        category: "Kinks",
        status: 2,
        comment: null,
        aliases: ["Zoophilia"],
        slaveTags: []
      },
      {
        id: 27,
        name: "Bimbofication",
        description: "[TBD]",
        category: "Kinks",
        status: 2,
        comment: null,
        aliases: [],
        slaveTags: []
      },
      {
        id: 28,
        name: "Body-Modification",
        description: "Extreme alterations to the body for sexual pleasure.",
        category: "Kinks",
        status: 2,
        comment: "Subcategories might include scarification, branding, piercings, etc.",
        aliases: [],
        slaveTags: []
      },
      {
        id: 29,
        name: "Bukkake",
        description: "Sex act in which one participant is ejaculated on by multiple participants",
        category: "Kinks",
        status: 1,
        comment: null,
        aliases: ["multiple", "ejaculation"],
        slaveTags: []
      },
      {
        id: 30,
        name: "Blackmail",
        description: "[TBD]",
        category: "Kinks",
        status: 2,
        comment: null,
        aliases: [],
        slaveTags: []
      },
      {
        id: 31,
        name: "Cheating",
        description: "Sexual contact with someone other than their partner, without approval from their partner",
        category: "Kinks",
        status: 1,
        comment: null,
        aliases: [],
        slaveTags: ["Netorare"]
      },
      {
        id: 32,
        name: "Creampie",
        description: "Semen leaks from a woman's vagina after sex",
        category: "Kinks",
        status: 1,
        comment: null,
        aliases: ["Semen"],
        slaveTags: []
      },
      {
        id: 33,
        name: "Corruption",
        description: "[TBD]",
        category: "Kinks",
        status: 2,
        comment: null,
        aliases: [],
        slaveTags: ["MindControl"]
      },
      {
        id: 34,
        name: "Cosplay",
        description: "[TBD]",
        category: "Kinks",
        status: 1,
        comment: null,
        aliases: [],
        slaveTags: []
      },
      {
        id: 35,
        name: "Drugs",
        description: "[TBD]",
        category: "Kinks",
        status: 2,
        comment: null,
        aliases: [],
        slaveTags: []
      },
      {
        id: 113,
        name: "Domination",
        description: "Top role played by someone who likes taking control.",
        category: "Kinks",
        status: 2,
        comment: null,
        aliases: ["Dom"],
        slaveTags: ["BDSM", "FemDom", "MaleDom", "MindControl", "Posession"]
      },
      {
        id: 36,
        name: "Dilf",
        description: "Older male character",
        category: "Kinks",
        status: 1,
        comment: null,
        aliases: [
          "daddy",
          "dad"
        ],
        slaveTags: []
      },
      {
        id: 37,
        name: "Exhibitionism",
        description: "[TBD]",
        category: "Kinks",
        status: 2,
        comment: null,
        aliases: ["Naked", "Nude"],
        slaveTags: []
      },
      {
        id: 38,
        name: "FemDom",
        description: "[TBD]",
        category: "Kinks",
        status: 1,
        comment: null,
        aliases: ["Dom", "Female"],
        slaveTags: []
      },
      {
        id: 39,
        name: "FemSub",
        description: "[TBD]",
        category: "Kinks",
        status: 1,
        comment: null,
        aliases: [],
        slaveTags: []
      },
      {
        id: 40,
        name: "FootJob",
        description: "[TBD]",
        category: "Kinks",
        status: 1,
        comment: null,
        aliases: ["Feet"],
        slaveTags: []
      },
      {
        id: 41,
        name: "Furry",
        description: "[TBD]",
        category: "Kinks",
        status: 2,
        comment: null,
        aliases: ["Animal"],
        slaveTags: []
      },
      {
        id: 42,
        name: "Futanari",
        description: "[TBD]",
        category: "Kinks",
        status: 2,
        comment: null,
        aliases: ["Futa", "Trans"],
        slaveTags: []
      },
      {
        id: 43,
        name: "Homosexual",
        description: "[TBD]",
        category: "Kinks",
        status: 1,
        comment: null,
        aliases: ["Gay", "Lesbian"],
        slaveTags: []
      },
      {
        id: 44,
        name: "Groping",
        description: "[TBD]",
        category: "Kinks",
        status: 1,
        comment: null,
        aliases: [],
        slaveTags: []
      },
      {
        id: 45,
        name: "Gore",
        description: "Contains graphic violence and blood",
        category: "Kinks",
        status: 2,
        comment: "Usually present in horror games",
        aliases: ["Graphical"],
        slaveTags: []
      },
      {
        id: 46,
        name: "Handjob",
        description: "[TBD]",
        category: "Kinks",
        status: 1,
        comment: null,
        aliases: [],
        slaveTags: []
      },
      {
        id: 48,
        name: "Humilation",
        description: "[TBD]",
        category: "Kinks",
        status: 2,
        comment: null,
        aliases: [],
        slaveTags: []
      },
      {
        id: 49,
        name: "Incest",
        description: "Sexual relations between family members.",
        category: "Kinks",
        status: 2,
        comment: null,
        aliases: ["Family"],
        slaveTags: []
      },
      {
        id: 50,
        name: "Lactation",
        description: "[TBD]",
        category: "Kinks",
        status: 1,
        comment: null,
        aliases: ["Milking"],
        slaveTags: []
      },
      {
        id: 51,
        name: "Lolicon",
        description: "Sexual attraction to prepubescent female children",
        category: "Kinks",
        status: 2,
        comment: null,
        aliases: ["Small", "Child"],
        slaveTags: []
      },
      {
        id: 52,
        name: "Masturbation",
        description: "[TBD]",
        category: "Kinks",
        status: 1,
        comment: null,
        aliases: ["Jerking"],
        slaveTags: []
      },
      {
        id: 53,
        name: "Milf",
        description: "Older female character",
        category: "Kinks",
        status: 1,
        comment: null,
        aliases: [
          "mommy",
          "mom"
        ],
        slaveTags: []
      },
      {
        id: 114,
        name: "MaleDom",
        description: "[TBD]",
        category: "Kinks",
        status: 2,
        comment: null,
        aliases: ["Dom"],
        slaveTags: []
      },
      {
        id: 115,
        name: "MaleSub",
        description: "[TBD]",
        category: "Kinks",
        status: 2,
        comment: null,
        aliases: ["Sub"],
        slaveTags: []
      },
      {
        id: 54,
        name: "MindControl",
        description: "[TBD]",
        category: "Kinks",
        status: 2,
        comment: null,
        aliases: ["MC"],
        slaveTags: []
      },
      {
        id: 55,
        name: "Necrophilia",
        description: "Sexual attraction to corpses.",
        category: "Kinks",
        status: 2,
        comment: null,
        aliases: ["dead", "death"],
        slaveTags: []
      },
      {
        id: 56,
        name: "Netorare",
        description: "Sexual contact with someone other than the partner, without the partner's approval and without the victim's consent",
        category: "Kinks",
        status: 2,
        comment: "Extreme Version of Cheating",
        aliases: ["NTR"],
        slaveTags: []
      },
      {
        id: 57,
        name: "OralSex",
        description: "[TBD]",
        category: "Kinks",
        status: 2,
        comment: null,
        aliases: ["Cunnilingus"],
        slaveTags: []
      },
      {
        id: 58,
        name: "Posession",
        description: "[TBD]",
        category: "Kinks",
        status: 2,
        comment: null,
        aliases: [],
        slaveTags: []
      },
      {
        id: 59,
        name: "Pregnancy",
        description: "[TBD]",
        category: "Kinks",
        status: 1,
        comment: null,
        aliases: ["Impregnation"],
        slaveTags: []
      },
      {
        id: 60,
        name: "Prostitution",
        description: "[TBD]",
        category: "Kinks",
        status: 1,
        comment: null,
        aliases: [],
        slaveTags: []
      },
      {
        id: 61,
        name: "Rape",
        description: "[TBD]",
        category: "Kinks",
        status: 2,
        comment: null,
        aliases: ["Assault", "Abuse"],
        slaveTags: []
      },
      {
        id: 62,
        name: "Scat",
        description: "[TBD]",
        category: "Kinks",
        status: 2,
        comment: null,
        aliases: ["Feces", "Crap"],
        slaveTags: []
      },
      {
        id: 63,
        name: "Shota",
        description: "Sexual attraction to prepubescent male children",
        category: "Kinks",
        status: 2,
        comment: null,
        aliases: ["Small", "Child"],
        slaveTags: []
      },
      {
        id: 64,
        name: "Sissification",
        description: "[TBD]",
        category: "Kinks",
        status: 2,
        comment: null,
        aliases: ["Sissy"],
        slaveTags: []
      },
      {
        id: 65,
        name: "Spanking",
        description: "[TBD]",
        category: "Kinks",
        status: 1,
        comment: null,
        aliases: [],
        slaveTags: []
      },
      {
        id: 66,
        name: "Stripping",
        description: "[TBD]",
        category: "Kinks",
        status: 1,
        comment: null,
        aliases: ["Undress", "Nude"],
        slaveTags: []
      },
      {
        id: 123,
        name: "Submission",
        description: "[TBD]",
        category: "Kinks",
        status: 1,
        comment: null,
        aliases: ["Sub"],
        slaveTags: ["FemSub", "MaleSub", "MindControl", "BDSM", "Posession"]
      },
      {
        id: 67,
        name: "Teasing",
        description: "[TBD]",
        category: "Kinks",
        status: 1,
        comment: null,
        aliases: [],
        slaveTags: []
      },
      {
        id: 68,
        name: "Titfuck",
        description: "[TBD]",
        category: "Kinks",
        status: 2,
        comment: null,
        aliases: ["Mammary"],
        slaveTags: []
      },
      {
        id: 69,
        name: "Transformation",
        description: "[TBD]",
        category: "Kinks",
        status: 2,
        comment: null,
        aliases: ["TG", "TFG"],
        slaveTags: ["Bimbofication", "Sissification", "Body-Modification"]
      },
      {
        id: 70,
        name: "Urination",
        description: "[TBD]",
        category: "Kinks",
        status: 2,
        comment: null,
        aliases: ["Pee", "Piss"],
        slaveTags: []
      },
      {
        id: 71,
        name: "Vaginal-Sex",
        description: "[TBD]",
        category: "Kinks",
        status: 2,
        comment: null,
        aliases: [],
        slaveTags: []
      },
      {
        id: 72,
        name: "Vanilla",
        description: "[TBD]",
        category: "Kinks",
        status: 1,
        comment: "Everyone has their own tastes i guess...",
        aliases: [],
        slaveTags: []
      },
      {
        id: 73,
        name: "Vore",
        description: "[TBD]",
        category: "Kinks",
        status: 2,
        comment: null,
        aliases: ["Eating"],
        slaveTags: []
      },
      {
        id: 74,
        name: "Voyeurism",
        description: "A sexual interest in or practice of watching other people engaged in intimate behaviors",
        category: "Kinks",
        status: 1,
        comment: null,
        aliases: ["Observe"],
        slaveTags: []
      },



      
      {
        id: 75,
        name: "Adventure",
        description: "[TBD]",
        category: "Genre",
        status: 1,
        comment: null,
        aliases: [],
        slaveTags: []
      },
      {
        id: 76,
        name: "DateSim",
        description: "[TBD]",
        category: "Genre",
        status: 1,
        comment: null,
        aliases: ["Dating", "DatingSim", "DatingSimulator"],
        slaveTags: []
      },
      {
        id: 77,
        name: "Dystopy",
        description: "[TBD]",
        category: "Genre",
        status: 1,
        comment: null,
        aliases: [],
        slaveTags: []
      },
      {
        id: 78,
        name: "Fantasy",
        description: "[TBD]",
        category: "Genre",
        status: 1,
        comment: null,
        aliases: [],
        slaveTags: []
      },
      {
        id: 79,
        name: "Horror",
        description: "[TBD]",
        category: "Genre",
        status: 1,
        comment: null,
        aliases: [],
        slaveTags: []
      },
      {
        id: 80,
        name: "Harem",
        description: "[TBD]",
        category: "Genre",
        status: 1,
        comment: null,
        aliases: [],
        slaveTags: []
      },
      {
        id: 81,
        name: "KineticNovel",
        description: "[TBD]",
        category: "Genre",
        status: 1,
        comment: null,
        aliases: ["KN", "Novel"],
        slaveTags: []
      },
      {
        id: 82,
        name: "Management",
        description: "[TBD]",
        category: "Genre",
        status: 1,
        comment: null,
        aliases: [],
        slaveTags: []
      },
      {
        id: 83,
        name: "Multiple-Endings",
        description: "[TBD]",
        category: "Genre",
        status: 1,
        comment: null,
        aliases: [],
        slaveTags: []
      },
      {
        id: 84,
        name: "No-Sex",
        description: "[TBD]",
        category: "Genre",
        status: 1,
        comment: null,
        aliases: [],
        slaveTags: []
      },
      {
        id: 85,
        name: "Paranormal",
        description: "[TBD]",
        category: "Genre",
        status: 1,
        comment: null,
        aliases: [],
        slaveTags: []
      },
      {
        id: 86,
        name: "Parody",
        description: "[TBD]",
        category: "Genre",
        status: 1,
        comment: null,
        aliases: [],
        slaveTags: []
      },
      {
        id: 87,
        name: "Platformer",
        description: "[TBD]",
        category: "Genre",
        status: 1,
        comment: null,
        aliases: ["Metroidvania"],
        slaveTags: []
      },
      {
        id: 88,
        name: "Point-n-Click",
        description: "[TBD]",
        category: "Genre",
        status: 1,
        comment: null,
        aliases: [],
        slaveTags: []
      },
      {
        id: 89,
        name: "Puzzle",
        description: "[TBD]",
        category: "Genre",
        status: 1,
        comment: null,
        aliases: ["Riddle"],
        slaveTags: []
      },
      {
        id: 90,
        name: "RPG",
        description: "Role-playing games with character development and storytelling",
        category: "Genre",
        status: 1,
        comment: "Common in story-driven games",
        aliases: [
          "roleplay-game",
          "role-playing-game"
        ],
        slaveTags: []
      },
      {
        id: 91,
        name: "Sandbox",
        description: "[TBD]",
        category: "Genre",
        status: 1,
        comment: null,
        aliases: [],
        slaveTags: []
      },
      {
        id: 92,
        name: "Sci-Fi",
        description: "[TBD]",
        category: "Genre",
        status: 1,
        comment: null,
        aliases: ["Science fiction"],
        slaveTags: []
      },
      {
        id: 93,
        name: "School",
        description: "[TBD]",
        category: "Genre",
        status: 1,
        comment: null,
        aliases: [],
        slaveTags: []
      },
      {
        id: 94,
        name: "Shooter",
        description: "[TBD]",
        category: "Genre",
        status: 1,
        comment: null,
        aliases: ["FPS"],
        slaveTags: []
      },
      {
        id: 95,
        name: "Side-scroller",
        description: "[TBD]",
        category: "Genre",
        status: 1,
        comment: null,
        aliases: [],
        slaveTags: []
      },
      {
        id: 97,
        name: "Simulator",
        description: "[TBD]",
        category: "Genre",
        status: 1,
        comment: null,
        aliases: [],
        slaveTags: []
      },
      {
        id: 98,
        name: "Strategy",
        description: "[TBD]",
        category: "Genre",
        status: 1,
        comment: null,
        aliases: ["RTS"],
        slaveTags: []
      },
      {
        id: 99,
        name: "Text-based",
        description: "[TBD]",
        category: "Genre",
        status: 1,
        comment: null,
        aliases: [],
        slaveTags: []
      },
      {
        id: 100,
        name: "Turn-based",
        description: "[TBD]",
        category: "Genre",
        status: 1,
        comment: null,
        aliases: [],
        slaveTags: []
      },
      {
        id: 102,
        name: "Trainer",
        description: "[TBD]",
        category: "Genre",
        status: 1,
        comment: null,
        aliases: [],
        slaveTags: []
      },
      {
        id: 103,
        name: "VisualNovel",
        description: "[TBD]",
        category: "Genre",
        status: 1,
        comment: null,
        aliases: ["VN"],
        slaveTags: []
      },



      
      {
        id: 104,
        name: "Alien",
        description: "Features extraterrestrial characters",
        category: "Characters",
        status: 1,
        comment: "Includes both humanoid and non-humanoid aliens",
        aliases: [],
        slaveTags: []
      },



      
      {
        id: 105,
        name: "MTL",
        description: "Games that use automatic machine translation to adapt user's language",
        category: "Meta",
        status: 1,
        comment: null,
        aliases: ["Machine translation", "Translation"],
        slaveTags: []
      },
      {
        id: 106,
        name: "Full-censorship",
        description: "[TBD]",
        category: "Meta",
        status: 1,
        comment: null,
        aliases: [],
        slaveTags: []
      },
      {
        id: 107,
        name: "Mosaic-censorship",
        description: "[TBD]",
        category: "Meta",
        status: 1,
        comment: null,
        aliases: [],
        slaveTags: []
      },
      {
        id: 108,
        name: "Uncensored",
        description: "[TBD]",
        category: "Meta",
        status: 1,
        comment: null,
        aliases: [],
        slaveTags: []
      },
      {
        id: 109,
        name: "Translated",
        description: "[TBD]",
        category: "Meta",
        status: 1,
        comment: null,
        aliases: [],
        slaveTags: []
      },
      {
        id: 110,
        name: "Rough-translation",
        description: "Any 3rd party translation consisting of a required amount of text boxes/bubbles with a translation error.",
        category: "Meta",
        status: 1,
        comment: "Should NOT be confused with rough grammar.",
        aliases: [],
        slaveTags: []
      },
      {
        id: 111,
        name: "Rough-grammar",
        description: "Any 3rd party translation consisting of a required amount of sentences with a grammatical or spelling error.",
        category: "Meta",
        status: 1,
        comment: "Translations containing grammatical or spelling errors that occurred in the original work are excluded.",
        aliases: [],
        slaveTags: []
      },
      {
        id: 112,
        name: "Speechless",
        description: "A game with no narration or speech",
        category: "Meta",
        status: 1,
        comment: null,
        aliases: [],
        slaveTags: []
      },
      {
        id: 666,
        name: "ServerErrorCode",
        description: "A Character from THIA franchise",
        category: "Others",
        status: 3,
        comment: "Calm down, this is for obsolete testings.",
        aliases: ["Avali", "Overhappy"],
        slaveTags: ["Furry"]
      }
    ]
  }