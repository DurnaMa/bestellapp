let menu = [
    {
        category: "Vorspeisen",
        items: [
            {
                dish: "Bruschetta",
                price: 4.5,
                ingredients: ["Tomaten", "Basilikum", "Knoblauch", "Olivenöl"],
                likes: 150,
                liked: true,
                comments: [
                    {
                        name: "AppetizerFan",
                        comment: "Frisch und lecker, der perfekte Start!",
                    },
                ],
            },
            {
                dish: "Antipasti",
                price: 8.0,
                ingredients: [
                    "Gegrilltes Gemüse",
                    "Oliven",
                    "Mozzarella",
                    "Schinken",
                ],
                likes: 220,
                liked: true,
                comments: [
                    {
                        name: "GourmetLover",
                        comment:
                            "Eine tolle Auswahl an italienischen Vorspeisen.",
                    },
                ],
            },
        ],
    },
    {
        category: "Salate",
        items: [
            {
                dish: "Insalata Mista",
                price: 6.5,
                ingredients: [
                    "Gemischter Salat",
                    "Tomaten",
                    "Gurken",
                    "Karotten",
                ],
                likes: 180,
                liked: true,
                comments: [
                    {
                        name: "SaladLover",
                        comment: "Frisch und knackig, genau richtig.",
                    },
                ],
            },
            {
                dish: "Caesar Salad",
                price: 7.5,
                ingredients: [
                    "Römersalat",
                    "Parmesan",
                    "Croutons",
                    "Caesar-Dressing",
                ],
                likes: 200,
                liked: true,
                comments: [
                    {
                        name: "HealthyEater",
                        comment: "Der beste Caesar Salad, den ich je hatte.",
                    },
                ],
            },
        ],
    },
    {
        category: "Aufläufe",
        items: [
            {
                dish: "Lasagne",
                price: 9.5,
                ingredients: [
                    "Hackfleisch",
                    "Tomatensauce",
                    "Bechamelsauce",
                    "Mozzarella",
                ],
                likes: 250,
                liked: true,
                comments: [
                    {
                        name: "PastaLover",
                        comment: "Eine klassische Lasagne, sehr herzhaft.",
                    },
                ],
            },
            {
                dish: "Gemüseauflauf",
                price: 8.5,
                ingredients: ["Zucchini", "Aubergine", "Tomaten", "Käse"],
                likes: 170,
                liked: false,
                comments: [
                    {
                        name: "VeggieFan",
                        comment: "Lecker und gesund, toll für Vegetarier.",
                    },
                ],
            },
        ],
    },
    {
        category: "Pizza",
        items: [
            {
                dish: "Margherita",
                price: 8.5,
                ingredients: ["Tomatensauce", "Mozzarella", "Basilikum"],
                likes: 250,
                liked: true,
                comments: [
                    {
                        name: "PizzaLover123",
                        comment:
                            "Einfach und lecker, die beste Margherita in der Stadt!",
                    },
                    {
                        name: "ItalienFan",
                        comment:
                            "Sehr authentisch und frisch, genau wie in Italien.",
                    },
                ],
            },
            {
                dish: "Salami",
                price: 9.5,
                ingredients: ["Tomatensauce", "Mozzarella", "Salami"],
                likes: 300,
                liked: true,
                comments: [
                    {
                        name: "MeatLover",
                        comment:
                            "Die Salami ist schön würzig und passt perfekt zur Pizza.",
                    },
                ],
            },
        ],
    },
    {
        category: "Baguette",
        items: [
            {
                dish: "Baguette Caprese",
                price: 5.5,
                ingredients: ["Tomaten", "Mozzarella", "Basilikum", "Olivenöl"],
                likes: 190,
                liked: true,
                comments: [
                    {
                        name: "SandwichFan",
                        comment:
                            "Ein köstliches Baguette mit frischen Zutaten.",
                    },
                ],
            },
            {
                dish: "Baguette Salami",
                price: 6.0,
                ingredients: ["Salami", "Käse", "Tomaten", "Salat"],
                likes: 210,
                liked: true,
                comments: [
                    {
                        name: "SnackLover",
                        comment:
                            "Perfekt für den kleinen Hunger zwischendurch.",
                    },
                ],
            },
        ],
    },
];


let shoppingBasket = [
    {
        dish: [],
        price: [],
        amount: [],
        subTotal: [],
        total: [],
    },
];

console.log(menu);
console.log(shoppingBasket);