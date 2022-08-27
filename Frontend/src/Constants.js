export const languages = [
    {
        name:"English",
        abr:"EN"
    },
    {
        name:"Français",
        abr:"F"
    }
];

export const currencies = [
    {
        name:"EURO",
        abr:"EUR",
        symbol:"£"
    },
    {
        name:"US DOLLARS",
        abr:"USD",
        symbol:"$"
    },
    {
        name:"Franc CFA",
        abr:"CFA",
        symbol:"CFA"
    }
]


export const products = [
    {
        id:"1",
        name:"",
        image:"",
        description:"",
        brand:"Apples",
        category:"Electronics",
        price:89.99,
        discount:75.85,
        countInStock:8,
        rating: 4.5,
        numReviews:4

    }
]
//telephones et accessoires, televisions, laptop et tablettes, audio et vidéo ,
export const categories =[
    {
        _id:1,
        name:"categorie 1",
        image:"https://google.com"
    },
    {
        _id:2,
        name:"catégorie ",
        image:"https://google.com"
    },
    {
        _id:3,
        name:"catégorie 3",
        image:"https://google.com"
    },
    {
        _id:4,
        name:"catégorie 4",
        image:"https://google.com"
    },
    {
        _id:5,
        name:"catégorie 5",
        image:"https://google.com"
    },
    {
        _id:6,
        name:"catégorie 6",
        image:"https://google.com"
    },
    {
        _id:7,
        name:"catégorie 7",
        image:"https://google.com"
    },
    {
        _id:8,
        name:"catégorie 8",
        image:"https://google.com"
    }
]

export const marques =[
    {
        _id:1,
        name:"marque 1",
        description:"marque localisée au ... qui fais dans la vente de produits electroniques etc...",
        image:"brandImage"
    },
    {
        _id:2,
        name:"marque 2",
        description:"marque localisée au ... qui fais dans la vente de produits electroniques etc...",
        image:"brandImage"
    },
    {
        _id:3,
        name:"marque 3",
        description:"marque localisée au ... qui fais dans la vente de produits electroniques etc...",
        image:"brandImage"
    },
    {
        _id:4,
        name:"marque 4",
        description:"marque localisée au ... qui fais dans la vente de produits electroniques etc...",
        image:"brandImage"
    },
    {
        _id:5,
        name:"marque 5",
        description:"marque localisée au ... qui fais dans la vente de produits electroniques etc...",
        image:"brandImage"
    },
    {
        _id:6,
        name:"marque 6",
        description:"marque localisée au ... qui fais dans la vente de produits electroniques etc...",
        image:"brandImage"
    },
    {
        _id:7,
        name:"marque 7",
        description:"marque localisée au ... qui fais dans la vente de produits electroniques etc...",
        image:"brandImage"
    },
    {
        _id:8,
        name:"marque 8"
    }
]

 export const calculate = (original , reduced) => {
    let discount = 0;
    discount = ((original - reduced) * 100) / (original);
    return Math.ceil(discount);
  }