     
     
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
        description: "Animated sex scenes",
        category: "Technical",
        status: 1,
        comment: null,
        aliases: ["Anime"],
        slaveTags: []
      },
      {
        id: 15,
        name: "RealLife",
        description: "Scenes taken from real life (often photos and videos)",
        category: "Technical",
        status: 1,
        comment: "Really?",
        aliases: ["Real porn"],
        slaveTags: []
      },
      {

        name: "Pixel",
        description: "[TBD]",
        category: "Technical",
        status: 1,
        comment: null,
        aliases: ["Retro"],
        slaveTags: ["2D-cg"]
      },
      {

        name: "Sprites",
        description: "[TBD]",
        category: "Technical",
        status: 1,
        comment: null,
        aliases: ["Arts"],
        slaveTags: ["2D-cg"]
      },
      {

        name: "FirstPerson",
        description: "[TBD]",
        category: "Technical",
        status: 1,
        comment: null,
        aliases: ["FPS"],
        slaveTags: []
      },
      {

        name: "ThirdPerson",
        description: "[TBD]",
        category: "Technical",
        status: 1,
        comment: null,
        aliases: ["TPS"],
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

      name: "SinglePlayer",
      description: "[TBD]",
      category: "Technical",
      status: 1,
      comment: null,
      aliases: ["SP", "Alone"],
      slaveTags: []
    },
    {

      name: "MultiPlayer",
      description: "[TBD]",
      category: "Technical",
      status: 1,
      comment: null,
      aliases: ["MP", "Multiple"],
      slaveTags: ["Online"]
    },
    {
      id: 125,
      name: "Online",
      description: "[TBD]",
      category: "Technical",
      status: 1,
      comment: null,
      aliases: ["Web", "WorldWide"],
      slaveTags: []
    },
    {

      name: "LAN",
      description: "[TBD]",
      category: "Technical",
      status: 1,
      comment: null,
      aliases: ["Local"],
      slaveTags: ["Online"]
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
        description: "Exaggerated orgasm facial expression (typical in japanese media)",
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
        description: "Sex scenes involve characters being anally penetrated",
        category: "Kinks",
        status: 2,
        comment: null,
        aliases: [],
        slaveTags: []
      },
      {
        id: 25,
        name: "BDSM",
        description: "Bondage and Discipline, Domination and Submission, Sadism and Masochism. The dominant shows outward, sometimes harmful control over the submissive.",
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
        description: "Process of transformation to an airhead, perfectly happy to be used and degraded.",
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
        description: "Coercion using a threat (often revealing sensitive information)",
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
        description: "A character is influenced to deviate from their self to a more perverted or evil persona.",
        category: "Kinks",
        status: 2,
        comment: null,
        aliases: [],
        slaveTags: ["MindControl"]
      },
      {
        id: 34,
        name: "Cosplay",
        description: "Costume Play. A character wears a costume to represend a character or idea.",
        category: "Kinks",
        status: 1,
        comment: null,
        aliases: [],
        slaveTags: []
      },
      {
        id: 35,
        name: "Drugs",
        description: "Chemical substances with known biological effects.",
        category: "Kinks",
        status: 2,
        comment: null,
        aliases: ["Chemical"],
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
        description: "Expousure of their body or certain parts, where is not normally expected (such as public areas)",
        category: "Kinks",
        status: 2,
        comment: null,
        aliases: ["Naked", "Nude"],
        slaveTags: []
      },
      {
        id: 38,
        name: "FemDom",
        description: "Sexual scenes depicting a dominant female.",
        category: "Kinks",
        status: 1,
        comment: null,
        aliases: ["Dom", "Female"],
        slaveTags: []
      },
      {
        id: 39,
        name: "FemSub",
        description: "Sexual scenes depicting a submissive female.",
        category: "Kinks",
        status: 1,
        comment: null,
        aliases: [],
        slaveTags: []
      },
      {
        id: 40,
        name: "FootJob",
        description: "Feet are used to stimulate another character's genitalia",
        category: "Kinks",
        status: 1,
        comment: null,
        aliases: ["Feet"],
        slaveTags: []
      },
      {
        id: 41,
        name: "Furry",
        description: "An animal character with some human qualities added in.",
        category: "Kinks",
        status: 2,
        comment: null,
        aliases: ["Animal"],
        slaveTags: ["ServerErrorCode"]
      },
      {
        id: 43,
        name: "Homosexual",
        description: "A character who engages in sex with a person of the same sex.",
        category: "Kinks",
        status: 1,
        comment: null,
        aliases: ["Yaoi", "Yuri", "Gay", "Lesbian"],
        slaveTags: []
      },
      {
        id: 44,
        name: "Groping",
        description: "A character is sexually rubbing, feeling, or grabbing another's body in a dominating or invasive way. Often forced.",
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
        description: "Stimulation of the penis with a hand.",
        category: "Kinks",
        status: 1,
        comment: null,
        aliases: [],
        slaveTags: []
      },
      {
        id: 48,
        name: "Humilation",
        description: "A character is being, usually, forced to another to participate in a deliberately embarrassing, degrading, or humiliating activity.",
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
        description: "Secretion of fluid (typically breast milk) from the nipples of a character.",
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
        description: "A character is sexually stimulating themselves.",
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
        description: "Sexual scenes depicting a dominant male.",
        category: "Kinks",
        status: 2,
        comment: null,
        aliases: ["Dom"],
        slaveTags: []
      },
      {
        id: 115,
        name: "MaleSub",
        description: "Sexual scenes depicting a submissive male.",
        category: "Kinks",
        status: 2,
        comment: null,
        aliases: ["Sub"],
        slaveTags: []
      },
      {
        id: 54,
        name: "MindControl",
        description: "A character taking control of another, commonly by hypnosis.",
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
        description: "Stimulation of the genitals by the mouth (Including anal)",
        category: "Kinks",
        status: 2,
        comment: null,
        aliases: ["Cunnilingus"],
        slaveTags: []
      },
      {
        id: 58,
        name: "Posession",
        description: "A character's body is invaded by a magical, spiritual, or otherwordly forced. Often for control.",
        category: "Kinks",
        status: 2,
        comment: null,
        aliases: [],
        slaveTags: []
      },
      {
        id: 59,
        name: "Pregnancy",
        description: "A visibly pregnant character who's carrying one or more unborn offspring.",
        category: "Kinks",
        status: 1,
        comment: null,
        aliases: ["Impregnation"],
        slaveTags: []
      },
      {
        id: 60,
        name: "Prostitution",
        description: "Offering sexual activity in exchange for payment.",
        category: "Kinks",
        status: 1,
        comment: null,
        aliases: [],
        slaveTags: []
      },
      {
        id: 116,
        name: "Petrification",
        description: "[TBD]",
        category: "Kinks",
        status: 1,
        comment: null,
        aliases: ["Statue", "Stiff"],
        slaveTags: []
      },
      {
        id: 117,
        name: "Parasite",
        description: "[TBD]",
        category: "Kinks",
        status: 2,
        comment: null,
        aliases: [],
        slaveTags: []
      },
      {
        id: 61,
        name: "Rape",
        description: "A character is forcing another to engage in sexual activities without their consent or will.",
        category: "Kinks",
        status: 2,
        comment: null,
        aliases: ["Assault", "Abuse"],
        slaveTags: []
      },
      {
        id: 62,
        name: "Scat",
        description: "Sexual pleasure from feces.",
        category: "Kinks",
        status: 2,
        comment: null,
        aliases: ["Feces", "Crap"],
        slaveTags: []
      },
      {
        id: 63,
        name: "Shotacon",
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
        description: "A male bodied character is made to look girly (sissy), often through transformation.",
        category: "Kinks",
        status: 2,
        comment: null,
        aliases: ["Sissy"],
        slaveTags: []
      },
      {
        id: 65,
        name: "Spanking",
        description: "A character strikes another on the buttcheeks with an open palm with enough force to hurt, but not to permanently harm.",
        category: "Kinks",
        status: 1,
        comment: null,
        aliases: [],
        slaveTags: []
      },
      {
        id: 66,
        name: "Stripping",
        description: "A character removes their clothing, often in a sexual or slow manner.",
        category: "Kinks",
        status: 1,
        comment: null,
        aliases: ["Undress", "Nude"],
        slaveTags: []
      },
      {
        id: 123,
        name: "Submission",
        description: "Being controlled, dictated, or dominated by another character (the dominant).",
        category: "Kinks",
        status: 1,
        comment: null,
        aliases: ["Sub"],
        slaveTags: ["FemSub", "MaleSub", "MindControl", "BDSM", "Posession"]
      },
      {
        id: 67,
        name: "Teasing",
        description: "Words, poses, touches, or other actions intended to provoke a reaction, usually embarrassment, or arousal.",
        category: "Kinks",
        status: 1,
        comment: null,
        aliases: [],
        slaveTags: []
      },
      {
        id: 68,
        name: "Titfuck",
        description: "A character's penis is placed between another's breasts and sexually stimulated.",
        category: "Kinks",
        status: 2,
        comment: null,
        aliases: ["Mammary"],
        slaveTags: []
      },
      {
        id: 69,
        name: "Transformation",
        description: "A character is transformed from one form to another, usually forced.",
        category: "Kinks",
        status: 2,
        comment: null,
        aliases: ["TG", "TFG"],
        slaveTags: ["Bimbofication", "Sissification", "Body-Modification", "Petrification"]
      },
      {
        id: 70,
        name: "Urination",
        description: "Sexual activity involving peeing or urine.",
        category: "Kinks",
        status: 2,
        comment: null,
        aliases: ["Pee", "Piss"],
        slaveTags: []
      },
      {
        id: 71,
        name: "Vaginal-Sex",
        description: "Sexual activity involving the vagina.",
        category: "Kinks",
        status: 2,
        comment: null,
        aliases: [],
        slaveTags: []
      },
      {
        id: 72,
        name: "Vanilla",
        description: "Sexual activities that do not involve other fetishes or kinks.",
        category: "Kinks",
        status: 1,
        comment: "Everyone has their own tastes i guess...",
        aliases: [],
        slaveTags: []
      },
      {
        id: 73,
        name: "Vore",
        description: "A character consumes, inserts, or absorbs another.",
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
        description: "A genre that often involves danger, or gives a sense of excitement.",
        category: "Genre",
        status: 1,
        comment: null,
        aliases: [],
        slaveTags: []
      },
      {
        id: 76,
        name: "DateSim",
        description: "A genre where a character romances or dates other characters.",
        category: "Genre",
        status: 1,
        comment: null,
        aliases: ["Dating", "DatingSim", "DatingSimulator"],
        slaveTags: []
      },
      {
        id: 77,
        name: "Dystopia",
        description: "An extremely bad or frightening society, the opposite of an utopia.",
        category: "Genre",
        status: 1,
        comment: null,
        aliases: [],
        slaveTags: []
      },
      {
        id: 78,
        name: "Fantasy",
        description: "Speculative fiction, usually supernatural, magic, and imaginary.",
        category: "Genre",
        status: 1,
        comment: null,
        aliases: [],
        slaveTags: []
      },
      {
        id: 79,
        name: "Horror",
        description: "Fiction intended to disturb, frighten, or scare.",
        category: "Genre",
        status: 1,
        comment: null,
        aliases: [],
        slaveTags: []
      },
      {
        id: 80,
        name: "Harem",
        description: "A character with multiple partners.",
        category: "Genre",
        status: 1,
        comment: null,
        aliases: [],
        slaveTags: []
      },
      {
        id: 81,
        name: "KineticNovel",
        description: "A Visual Novel with a purely linear story with only one ending. Often advanced with the press of only one button.",
        category: "Genre",
        status: 1,
        comment: null,
        aliases: ["KN", "Novel"],
        slaveTags: []
      },
      {
        id: 82,
        name: "Management",
        description: "Games where the player is expected to manage an organization or building.",
        category: "Genre",
        status: 1,
        comment: null,
        aliases: [],
        slaveTags: []
      },
      {
        id: 83,
        name: "Multiple-Endings",
        description: "The player can get more than one significant ending.",
        category: "Genre",
        status: 1,
        comment: null,
        aliases: [],
        slaveTags: []
      },
      {
        id: 84,
        name: "No-Sex",
        description: "Games where there are no sexual activities depicted. Often only nudity.",
        category: "Genre",
        status: 1,
        comment: null,
        aliases: ["Ecchi"],
        slaveTags: []
      },
      {
        id: 85,
        name: "Paranormal",
        description: "Games where there are phenomena or characters beyond the range of normal or scientific explaination. Often horror, involving ghosts.",
        category: "Genre",
        status: 1,
        comment: null,
        aliases: [],
        slaveTags: []
      },
      {
        id: 86,
        name: "Parody",
        description: "A game that imitates the style of another, often done for comedy or satire (ridicule, mockery)",
        category: "Genre",
        status: 1,
        comment: null,
        aliases: ["Comedy"],
        slaveTags: []
      },
      {
        id: 87,
        name: "Platformer",
        description: "Action video game in which the core objective is to move the character to another point with multiple obstacles, uneven terrain, or platforms.",
        category: "Genre",
        status: 1,
        comment: null,
        aliases: ["Metroidvania"],
        slaveTags: []
      },
      {
        id: 88,
        name: "Point-n-Click",
        description: "A game in which the player only needs to use the mouse to point and click.",
        category: "Genre",
        status: 1,
        comment: null,
        aliases: [],
        slaveTags: []
      },
      {
        id: 89,
        name: "Puzzle",
        description: "A game in which the focus is on solving puzzles or riddles.",
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
        description: "A game in which the player has a great degree of creativitiy, often with no predetermined goal",
        category: "Genre",
        status: 1,
        comment: null,
        aliases: ["Open-World"],
        slaveTags: []
      },
      {
        id: 92,
        name: "Sci-Fi",
        description: "Speculactive fiction of futuristic concepts such as advances in science, space travel, parallel universes, and alien life.",
        category: "Genre",
        status: 1,
        comment: null,
        aliases: ["Science-Fiction", "Future"],
        slaveTags: []
      },
      {
        id: 93,
        name: "School",
        description: "Games in which the main focus is a place of learning, a school, or its environment.",
        category: "Genre",
        status: 1,
        comment: null,
        aliases: ["Highschool"],
        slaveTags: []
      },
      {
        id: 94,
        name: "Shooter",
        description: "Games in which the focus is on the main character using ranged weapons to defeat enemies.",
        category: "Genre",
        status: 1,
        comment: null,
        aliases: [],
        slaveTags: []
      },
      {
        id: 95,
        name: "Side-scroller",
        description: "A type of 2D game where the camera follows the player, usually, left-to-right, from the side. Common in platformers.",
        category: "Genre",
        status: 1,
        comment: null,
        aliases: [],
        slaveTags: ["Platformer"]
      },
      {
        id: 97,
        name: "Simulator",
        description: "Games that attempt to closely simulate or depict a real life or imagined activity.",
        category: "Genre",
        status: 1,
        comment: null,
        aliases: [],
        slaveTags: []
      },
      {
        id: 98,
        name: "Strategy",
        description: "Games that focus on the decision making skills of the player.",
        category: "Genre",
        status: 1,
        comment: null,
        aliases: [],
        slaveTags: []
      },
      {

        name: "RealTime",
        description: "[TBD]",
        category: "Genre",
        status: 1,
        comment: null,
        aliases: ["RTS"],
        slaveTags: ["Strategy"]
      },
      {
        id: 99,
        name: "Text-based",
        description: "Games that focus on purely text, often assisted by images or some animation.",
        category: "Genre",
        status: 1,
        comment: null,
        aliases: [],
        slaveTags: []
      },
      {
        id: 100,
        name: "Turn-based",
        description: "Games where the player or/and the enemy take turns when playing, in opposition to real time.",
        category: "Genre",
        status: 1,
        comment: null,
        aliases: ["TBS"],
        slaveTags: ["Strategy"]
      },
      {

        name: "Rhythm",
        description: "[TBD]",
        category: "Genre",
        status: 1,
        comment: null,
        aliases: ["Musical"],
        slaveTags: []
      },
      {
        id: 102,
        name: "Trainer",
        description: "A game in which the player can train other characters.",
        category: "Genre",
        status: 1,
        comment: null,
        aliases: [],
        slaveTags: []
      },
      {
        id: 103,
        name: "VisualNovel",
        description: "Games with a textual narrative combined with static or animated illustrations.",
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
        id: 119,
        name: "Female",
        description: "[TBD]",
        category: "Characters",
        status: 1,
        comment: null,
        aliases: [],
        slaveTags: []
      },
      {
        id: 120,
        name: "Male",
        description: "[TBD]",
        category: "Characters",
        status: 1,
        comment: null,
        aliases: [],
        slaveTags: []
      },
      {
        id: 121,
        name: "NonBinary",
        description: "[TBD]",
        category: "Characters",
        status: 1,
        comment: null,
        aliases: [],
        slaveTags: []
      },
      {
        id: 118,
        name: "Insect",
        description: "[TBD]",
        category: "Characters",
        status: 1,
        comment: null,
        aliases: ["Bug"],
        slaveTags: []
      },
      {
        id: 42,
        name: "Futanari",
        description: "A female-bodied character with male genitalia, often depicted with both female and male genitalia present.",
        category: "Characters",
        status: 2,
        comment: null,
        aliases: ["Futa", "Trans"],
        slaveTags: []
      },
      {
        id: 122,
        name: "Bee",
        description: "[TBD]",
        category: "Characters",
        status: 1,
        comment: null,
        aliases: [],
        slaveTags: []
      },
      {
        id: 123,
        name: "Bear",
        description: "[TBD]",
        category: "Characters",
        status: 1,
        comment: null,
        aliases: [],
        slaveTags: []
      },
      {
        id: 124,
        name: "Humanoid",
        description: "[TBD]",
        category: "Characters",
        status: 1,
        comment: null,
        aliases: [],
        slaveTags: []
      },
      {
        id: 121,
        name: "NonHumanoid",
        description: "[TBD]",
        category: "Characters",
        status: 1,
        comment: null,
        aliases: [],
        slaveTags: []
      },


      {
        id: 200,
        name: "Sex-Toys",
        description: "Game features sex toys",
        category: "Characters",
        status: 1,
        comment: null,
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
        description: "Genitalia are fully censored (censor boxes, white-out). Common in japanese eroge",
        category: "Meta",
        status: 1,
        comment: null,
        aliases: [],
        slaveTags: []
      },
      {
        id: 107,
        name: "Mosaic-censorship",
        description: "Genitalia are censored with a mosaic pixel-like filter. Common in japanese eroge.",
        category: "Meta",
        status: 1,
        comment: null,
        aliases: [],
        slaveTags: []
      },
      {
        id: 108,
        name: "Uncensored",
        description: "Genitalia are not censored.",
        category: "Meta",
        status: 1,
        comment: null,
        aliases: [],
        slaveTags: []
      },
      {
        id: 109,
        name: "Translated",
        description: "The game is translated to another language, commonly to english, by a 3rd party or internally.",
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
        category: "Other",
        status: 3,
        comment: "Calm down, this is for obsolete testings.",
        aliases: ["Avali", "Overhappy"],
        slaveTags: []
      }
    ]
  }