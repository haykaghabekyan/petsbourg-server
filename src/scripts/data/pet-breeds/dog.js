const breeds = [
    {
        "petTypeId": 1, "id": 1,
        "name": "English Pointer"
    },
    {
        "petTypeId": 1, "id": 2,
        "name": "English Setter"
    },
    {
        "petTypeId": 1, "id": 3,
        "name": "Kerry Blue Terrier"
    },
    {
        "petTypeId": 1, "id": 4,
        "name": "Cairn Terrier"
    },
    {
        "petTypeId": 1, "id": 5,
        "name": "English Cocker Spaniel"
    },
    {
        "petTypeId": 1, "id": 6,
        "name": "Gordon Setter"
    },
    {
        "petTypeId": 1, "id": 7,
        "name": "Airedale Terrier"
    },
    {
        "petTypeId": 1, "id": 8,
        "name": "Australian Terrier"
    },
    {
        "petTypeId": 1, "id": 9,
        "name": "Bedlington Terrier"
    },
    {
        "petTypeId": 1, "id": 10,
        "name": "Border Terrier"
    },
    {
        "petTypeId": 1, "id": 11,
        "name": "Bull Terrier"
    },
    {
        "petTypeId": 1, "id": 12,
        "name": "Fox Terrier (Smooth)"
    },
    {
        "petTypeId": 1, "id": 13,
        "name": "English Toy Terrier (Black &tan)"
    },
    {
        "petTypeId": 1, "id": 14,
        "name": "Swedish Vallhund"
    },
    {
        "petTypeId": 1, "id": 15,
        "name": "Belgian Shepherd Dog"
    },
    {
        "petTypeId": 1, "id": 16,
        "name": "Old English Sheepdog"
    },
    {
        "petTypeId": 1, "id": 17,
        "name": "Griffon Nivernais"
    },
    {
        "petTypeId": 1, "id": 19,
        "name": "Briquet Griffon Vendeen"
    },
    {
        "petTypeId": 1, "id": 20,
        "name": "Ariegeois"
    },
    {
        "petTypeId": 1, "id": 21,
        "name": "Gascon Saintongeois"
    },
    {
        "petTypeId": 1, "id": 22,
        "name": "Great Gascony Blue"
    },
    {
        "petTypeId": 1, "id": 24,
        "name": "Poitevin"
    },
    {
        "petTypeId": 1, "id": 25,
        "name": "Billy"
    },
    {
        "petTypeId": 1, "id": 28,
        "name": "Artois Hound"
    },
    {
        "petTypeId": 1, "id": 30,
        "name": "Porcelaine"
    },
    {
        "petTypeId": 1, "id": 31,
        "name": "Small Blue Gascony Blue"
    },
    {
        "petTypeId": 1, "id": 32,
        "name": "Blue Gascony Griffon"
    },
    {
        "petTypeId": 1, "id": 33,
        "name": "Grand Basset Griffon Vendeen"
    },
    {
        "petTypeId": 1, "id": 34,
        "name": "Norman Artesien Basset"
    },
    {
        "petTypeId": 1, "id": 35,
        "name": "Blue Gascony Basset"
    },
    {
        "petTypeId": 1, "id": 36,
        "name": "Basset Fauve De Bretagne"
    },
    {
        "petTypeId": 1, "id": 37,
        "name": "Portuguese Water Dog"
    },
    {
        "petTypeId": 1, "id": 38,
        "name": "Welsh Corgi Cardigan"
    },
    {
        "petTypeId": 1, "id": 39,
        "name": "Welsh Corgi Pembroke"
    },
    {
        "petTypeId": 1, "id": 40,
        "name": "Irish Soft Coated Wheaten Terrier"
    },
    {
        "petTypeId": 1, "id": 41,
        "name": "Yugoslavian Shepherd Dog - Sharplanina"
    },
    {
        "petTypeId": 1, "id": 42,
        "name": "Jämthund"
    },
    {
        "petTypeId": 1, "id": 43,
        "name": "Basenji"
    },
    {
        "petTypeId": 1, "id": 44,
        "name": "Berger De Beauce"
    },
    {
        "petTypeId": 1, "id": 45,
        "name": "Bernese Mountain Dog"
    },
    {
        "petTypeId": 1, "id": 46,
        "name": "Appenzell Cattle Dog"
    },
    {
        "petTypeId": 1, "id": 47,
        "name": "Entlebuch Cattle Dog"
    },
    {
        "petTypeId": 1, "id": 48,
        "name": "Karelian Bear Dog"
    },
    {
        "petTypeId": 1, "id": 49,
        "name": "Finnish Spitz"
    },
    {
        "petTypeId": 1, "id": 50,
        "name": "Newfoundland"
    },
    {
        "petTypeId": 1, "id": 51,
        "name": "Finnish Hound"
    },
    {
        "petTypeId": 1, "id": 52,
        "name": "Polish Hound"
    },
    {
        "petTypeId": 1, "id": 53,
        "name": "Komondor"
    },
    {
        "petTypeId": 1, "id": 54,
        "name": "Kuvasz"
    },
    {
        "petTypeId": 1, "id": 55,
        "name": "Puli"
    },
    {
        "petTypeId": 1, "id": 56,
        "name": "Pumi"
    },
    {
        "petTypeId": 1, "id": 57,
        "name": "Hungarian Short-haired Pointer (Vizsla)"
    },
    {
        "petTypeId": 1, "id": 58,
        "name": "Great Swiss Mountain Dog"
    },
    {
        "petTypeId": 1, "id": 59,
        "name": "Swiss Hound"
    },
    {
        "petTypeId": 1, "id": 60,
        "name": "Small Swiss Hound"
    },
    {
        "petTypeId": 1, "id": 61,
        "name": "St. Bernard"
    },
    {
        "petTypeId": 1, "id": 62,
        "name": "Coarse-haired Styrian Hound"
    },
    {
        "petTypeId": 1, "id": 63,
        "name": "Austrian Black And Tan Hound"
    },
    {
        "petTypeId": 1, "id": 64,
        "name": "Austrian  Pinscher"
    },
    {
        "petTypeId": 1, "id": 65,
        "name": "Maltese"
    },
    {
        "petTypeId": 1, "id": 66,
        "name": "Fawn Brittany Griffon"
    },
    {
        "petTypeId": 1, "id": 67,
        "name": "Petit Basset Griffon Vendeen"
    },
    {
        "petTypeId": 1, "id": 68,
        "name": "Tyrolean Hound"
    },
    {
        "petTypeId": 1, "id": 70,
        "name": "Lakeland Terrier"
    },
    {
        "petTypeId": 1, "id": 71,
        "name": "Manchester Terrier"
    },
    {
        "petTypeId": 1, "id": 72,
        "name": "Norwich Terrier"
    },
    {
        "petTypeId": 1, "id": 73,
        "name": "Scottish Terrier"
    },
    {
        "petTypeId": 1, "id": 74,
        "name": "Sealyham Terrier"
    },
    {
        "petTypeId": 1, "id": 75,
        "name": "Skye Terrier"
    },
    {
        "petTypeId": 1, "id": 76,
        "name": "Staffordshire Bull Terrier"
    },
    {
        "petTypeId": 1, "id": 77,
        "name": "Continental Toy Spaniel"
    },
    {
        "petTypeId": 1, "id": 78,
        "name": "Welsh Terrier"
    },
    {
        "petTypeId": 1, "id": 80,
        "name": "Griffon Bruxellois"
    },
    {
        "petTypeId": 1, "id": 81,
        "name": "Griffon Belge"
    },
    {
        "petTypeId": 1, "id": 82,
        "name": "Petit Brabançon"
    },
    {
        "petTypeId": 1, "id": 83,
        "name": "Schipperke"
    },
    {
        "petTypeId": 1, "id": 84,
        "name": "Bloodhound"
    },
    {
        "petTypeId": 1, "id": 85,
        "name": "West Highland White Terrier"
    },
    {
        "petTypeId": 1, "id": 86,
        "name": "Yorkshire Terrier"
    },
    {
        "petTypeId": 1, "id": 87,
        "name": "Catalan Sheepdog"
    },
    {
        "petTypeId": 1, "id": 88,
        "name": "Shetland Sheepdog"
    },
    {
        "petTypeId": 1, "id": 89,
        "name": "Ibizan Podenco"
    },
    {
        "petTypeId": 1, "id": 90,
        "name": "Burgos Pointing Dog"
    },
    {
        "petTypeId": 1, "id": 91,
        "name": "Spanish Mastiff"
    },
    {
        "petTypeId": 1, "id": 92,
        "name": "Pyrenean Mastiff"
    },
    {
        "petTypeId": 1, "id": 93,
        "name": "Portuguese Sheepdog"
    },
    {
        "petTypeId": 1, "id": 94,
        "name": "Portuguese Warren Hound-portuguese Podengo"
    },
    {
        "petTypeId": 1, "id": 95,
        "name": "Brittany Spaniel"
    },
    {
        "petTypeId": 1, "id": 96,
        "name": "Rafeiro Of Alentejo"
    },
    {
        "petTypeId": 1, "id": 97,
        "name": "German Spitz"
    },
    {
        "petTypeId": 1, "id": 98,
        "name": "German Wire- Haired Pointing Dog"
    },
    {
        "petTypeId": 1, "id": 99,
        "name": "Weimaraner"
    },
    {
        "petTypeId": 1, "id": 100,
        "name": "Westphalian Dachsbracke"
    },
    {
        "petTypeId": 1, "id": 101,
        "name": "French Bulldog"
    },
    {
        "petTypeId": 1, "id": 102,
        "name": "Kleiner Münsterländer"
    },
    {
        "petTypeId": 1, "id": 103,
        "name": "German Hunting Terrier"
    },
    {
        "petTypeId": 1, "id": 104,
        "name": "German Spaniel"
    },
    {
        "petTypeId": 1, "id": 105,
        "name": "French Water Dog"
    },
    {
        "petTypeId": 1, "id": 106,
        "name": "Blue Picardy Spaniel"
    },
    {
        "petTypeId": 1, "id": 107,
        "name": "Wire-haired Pointing Griffon Korthals"
    },
    {
        "petTypeId": 1, "id": 108,
        "name": "Picardy Spaniel"
    },
    {
        "petTypeId": 1, "id": 109,
        "name": "Clumber Spaniel"
    },
    {
        "petTypeId": 1, "id": 110,
        "name": "Curly Coated Retriever"
    },
    {
        "petTypeId": 1, "id": 111,
        "name": "Golden Retriever"
    },
    {
        "petTypeId": 1, "id": 113,
        "name": "Briard"
    },
    {
        "petTypeId": 1, "id": 114,
        "name": "Pont-audemer Spaniel"
    },
    {
        "petTypeId": 1, "id": 115,
        "name": "Saint Germain Pointer"
    },
    {
        "petTypeId": 1, "id": 116,
        "name": "Dogue De Bordeaux"
    },
    {
        "petTypeId": 1, "id": 117,
        "name": "Deutsch Langhaar"
    },
    {
        "petTypeId": 1, "id": 118,
        "name": "Large Munsterlander"
    },
    {
        "petTypeId": 1, "id": 119,
        "name": "German Short- Haired Pointing Dog"
    },
    {
        "petTypeId": 1, "id": 120,
        "name": "Irish Red Setter"
    },
    {
        "petTypeId": 1, "id": 121,
        "name": "Flat Coated Retriever"
    },
    {
        "petTypeId": 1, "id": 122,
        "name": "Labrador Retriever"
    },
    {
        "petTypeId": 1, "id": 123,
        "name": "Field Spaniel"
    },
    {
        "petTypeId": 1, "id": 124,
        "name": "Irish Water Spaniel"
    },
    {
        "petTypeId": 1, "id": 125,
        "name": "English Springer Spaniel"
    },
    {
        "petTypeId": 1, "id": 126,
        "name": "Welsh Springer Spaniel"
    },
    {
        "petTypeId": 1, "id": 127,
        "name": "Sussex Spaniel"
    },
    {
        "petTypeId": 1, "id": 128,
        "name": "King Charles Spaniel"
    },
    {
        "petTypeId": 1, "id": 129,
        "name": "Smålandsstövare"
    },
    {
        "petTypeId": 1, "id": 130,
        "name": "Drever"
    },
    {
        "petTypeId": 1, "id": 131,
        "name": "Schillerstövare"
    },
    {
        "petTypeId": 1, "id": 132,
        "name": "Hamiltonstövare"
    },
    {
        "petTypeId": 1, "id": 133,
        "name": "French Pointing Dog - Gascogne Type"
    },
    {
        "petTypeId": 1, "id": 134,
        "name": "French Pointing Dog - Pyrenean Type"
    },
    {
        "petTypeId": 1, "id": 135,
        "name": "Swedish Lapphund"
    },
    {
        "petTypeId": 1, "id": 136,
        "name": "Cavalier King Charles Spaniel"
    },
    {
        "petTypeId": 1, "id": 137,
        "name": "Pyrenean Mountain Dog"
    },
    {
        "petTypeId": 1, "id": 138,
        "name": "Pyrenean Sheepdog - Smooth Faced"
    },
    {
        "petTypeId": 1, "id": 139,
        "name": "Irish Terrier"
    },
    {
        "petTypeId": 1, "id": 140,
        "name": "Boston Terrier"
    },
    {
        "petTypeId": 1, "id": 141,
        "name": "Long-haired Pyrenean Sheepdog"
    },
    {
        "petTypeId": 1, "id": 142,
        "name": "Slovakian Chuvach"
    },
    {
        "petTypeId": 1, "id": 143,
        "name": "Dobermann"
    },
    {
        "petTypeId": 1, "id": 144,
        "name": "Boxer"
    },
    {
        "petTypeId": 1, "id": 145,
        "name": "Leonberger"
    },
    {
        "petTypeId": 1, "id": 146,
        "name": "Rhodesian Ridgeback"
    },
    {
        "petTypeId": 1, "id": 147,
        "name": "Rottweiler"
    },
    {
        "petTypeId": 1, "id": 148,
        "name": "Dachshund"
    },
    {
        "petTypeId": 1, "id": 149,
        "name": "Bulldog"
    },
    {
        "petTypeId": 1, "id": 150,
        "name": "Serbian Hound"
    },
    {
        "petTypeId": 1, "id": 151,
        "name": "Istrian Short-haired Hound"
    },
    {
        "petTypeId": 1, "id": 152,
        "name": "Istrian Wire-haired Hound"
    },
    {
        "petTypeId": 1, "id": 153,
        "name": "Dalmatian"
    },
    {
        "petTypeId": 1, "id": 154,
        "name": "Posavatz Hound"
    },
    {
        "petTypeId": 1, "id": 155,
        "name": "Bosnian Broken-haired Hound - Called Barak"
    },
    {
        "petTypeId": 1, "id": 156,
        "name": "Collie Rough"
    },
    {
        "petTypeId": 1, "id": 157,
        "name": "Bullmastiff"
    },
    {
        "petTypeId": 1, "id": 158,
        "name": "Greyhound"
    },
    {
        "petTypeId": 1, "id": 159,
        "name": "English Foxhound"
    },
    {
        "petTypeId": 1, "id": 160,
        "name": "Irish Wolfhound"
    },
    {
        "petTypeId": 1, "id": 161,
        "name": "Beagle"
    },
    {
        "petTypeId": 1, "id": 162,
        "name": "Whippet"
    },
    {
        "petTypeId": 1, "id": 163,
        "name": "Basset Hound"
    },
    {
        "petTypeId": 1, "id": 164,
        "name": "Deerhound"
    },
    {
        "petTypeId": 1, "id": 165,
        "name": "Italian Spinone"
    },
    {
        "petTypeId": 1, "id": 166,
        "name": "German Shepherd Dog"
    },
    {
        "petTypeId": 1, "id": 167,
        "name": "American Cocker Spaniel"
    },
    {
        "petTypeId": 1, "id": 168,
        "name": "Dandie Dinmont Terrier"
    },
    {
        "petTypeId": 1, "id": 169,
        "name": "Fox Terrier (Wire)"
    },
    {
        "petTypeId": 1, "id": 170,
        "name": "Castro Laboreiro Dog"
    },
    {
        "petTypeId": 1, "id": 171,
        "name": "Bouvier Des Ardennes"
    },
    {
        "petTypeId": 1, "id": 172,
        "name": "Poodle"
    },
    {
        "petTypeId": 1, "id": 173,
        "name": "Estrela Mountain Dog"
    },
    {
        "petTypeId": 1, "id": 175,
        "name": "French Spaniel"
    },
    {
        "petTypeId": 1, "id": 176,
        "name": "Picardy Sheepdog"
    },
    {
        "petTypeId": 1, "id": 177,
        "name": "Ariege Pointing Dog"
    },
    {
        "petTypeId": 1, "id": 179,
        "name": "Bourbonnais Pointing Dog"
    },
    {
        "petTypeId": 1, "id": 180,
        "name": "Auvergne Pointer"
    },
    {
        "petTypeId": 1, "id": 181,
        "name": "Giant Schnauzer"
    },
    {
        "petTypeId": 1, "id": 182,
        "name": "Schnauzer"
    },
    {
        "petTypeId": 1, "id": 183,
        "name": "Miniature Schnauzer"
    },
    {
        "petTypeId": 1, "id": 184,
        "name": "German Pinscher"
    },
    {
        "petTypeId": 1, "id": 185,
        "name": "Miniature Pinscher"
    },
    {
        "petTypeId": 1, "id": 186,
        "name": "Affenpinscher"
    },
    {
        "petTypeId": 1, "id": 187,
        "name": "Portuguese Pointing Dog"
    },
    {
        "petTypeId": 1, "id": 188,
        "name": "Sloughi"
    },
    {
        "petTypeId": 1, "id": 189,
        "name": "Finnish Lapphund"
    },
    {
        "petTypeId": 1, "id": 190,
        "name": "Hovawart"
    },
    {
        "petTypeId": 1, "id": 191,
        "name": "Bouvier Des Flandres"
    },
    {
        "petTypeId": 1, "id": 192,
        "name": "Kromfohrländer"
    },
    {
        "petTypeId": 1, "id": 193,
        "name": "Borzoi - Russian Hunting Sighthound"
    },
    {
        "petTypeId": 1, "id": 194,
        "name": "Bergamasco Shepherd Dog"
    },
    {
        "petTypeId": 1, "id": 195,
        "name": "Italian Volpino"
    },
    {
        "petTypeId": 1, "id": 196,
        "name": "Bolognese"
    },
    {
        "petTypeId": 1, "id": 197,
        "name": "Neapolitan Mastiff"
    },
    {
        "petTypeId": 1, "id": 198,
        "name": "Italian Rough-haired Segugio"
    },
    {
        "petTypeId": 1, "id": 199,
        "name": "Cirneco Dell'etna"
    },
    {
        "petTypeId": 1, "id": 200,
        "name": "Italian Greyhound"
    },
    {
        "petTypeId": 1, "id": 201,
        "name": "Maremma And The Abruzzes Sheepdog"
    },
    {
        "petTypeId": 1, "id": 202,
        "name": "Italian Pointing Dog"
    },
    {
        "petTypeId": 1, "id": 203,
        "name": "Norwegian Hound"
    },
    {
        "petTypeId": 1, "id": 204,
        "name": "Spanish Hound"
    },
    {
        "petTypeId": 1, "id": 205,
        "name": "Chow Chow"
    },
    {
        "petTypeId": 1, "id": 206,
        "name": "Japanese Chin"
    },
    {
        "petTypeId": 1, "id": 207,
        "name": "Pekingese"
    },
    {
        "petTypeId": 1, "id": 208,
        "name": "Shih Tzu"
    },
    {
        "petTypeId": 1, "id": 209,
        "name": "Tibetan Terrier"
    },
    {
        "petTypeId": 1, "id": 212,
        "name": "Samoyed"
    },
    {
        "petTypeId": 1, "id": 213,
        "name": "Hanoverian Scenthound"
    },
    {
        "petTypeId": 1, "id": 214,
        "name": "Hellenic Hound"
    },
    {
        "petTypeId": 1, "id": 215,
        "name": "Bichon Frise"
    },
    {
        "petTypeId": 1, "id": 216,
        "name": "Pudelpointer"
    },
    {
        "petTypeId": 1, "id": 217,
        "name": "Bavarian Mountain Scent Hound"
    },
    {
        "petTypeId": 1, "id": 218,
        "name": "Chihuahua"
    },
    {
        "petTypeId": 1, "id": 219,
        "name": "French Tricolour Hound"
    },
    {
        "petTypeId": 1, "id": 220,
        "name": "French White & Black Hound"
    },
    {
        "petTypeId": 1, "id": 221,
        "name": "Frisian Water Dog"
    },
    {
        "petTypeId": 1, "id": 222,
        "name": "Stabijhoun"
    },
    {
        "petTypeId": 1, "id": 223,
        "name": "Dutch Shepherd Dog"
    },
    {
        "petTypeId": 1, "id": 224,
        "name": "Drentsche Partridge Dog"
    },
    {
        "petTypeId": 1, "id": 225,
        "name": "Fila Brasileiro"
    },
    {
        "petTypeId": 1, "id": 226,
        "name": "Landseer (European Continental Type)"
    },
    {
        "petTypeId": 1, "id": 227,
        "name": "Lhasa Apso"
    },
    {
        "petTypeId": 1, "id": 228,
        "name": "Afghan Hound"
    },
    {
        "petTypeId": 1, "id": 229,
        "name": "Serbian Tricolour Hound"
    },
    {
        "petTypeId": 1, "id": 230,
        "name": "Tibetan Mastiff"
    },
    {
        "petTypeId": 1, "id": 231,
        "name": "Tibetan Spaniel"
    },
    {
        "petTypeId": 1, "id": 232,
        "name": "Deutsch Stichelhaar"
    },
    {
        "petTypeId": 1, "id": 233,
        "name": "Little Lion Dog"
    },
    {
        "petTypeId": 1, "id": 234,
        "name": "Xoloitzcuintle"
    },
    {
        "petTypeId": 1, "id": 235,
        "name": "Great Dane"
    },
    {
        "petTypeId": 1, "id": 236,
        "name": "Australian Silky Terrier"
    },
    {
        "petTypeId": 1, "id": 237,
        "name": "Norwegian Buhund"
    },
    {
        "petTypeId": 1, "id": 238,
        "name": "Mudi"
    },
    {
        "petTypeId": 1, "id": 239,
        "name": "Hungarian Wire-haired Pointer"
    },
    {
        "petTypeId": 1, "id": 240,
        "name": "Hungarian Greyhound"
    },
    {
        "petTypeId": 1, "id": 241,
        "name": "Hungarian Hound - Transylvanian Scent Hound"
    },
    {
        "petTypeId": 1, "id": 242,
        "name": "Norwegian Elkhound Grey"
    },
    {
        "petTypeId": 1, "id": 243,
        "name": "Alaskan Malamute"
    },
    {
        "petTypeId": 1, "id": 244,
        "name": "Slovakian Hound"
    },
    {
        "petTypeId": 1, "id": 245,
        "name": "Bohemian Wire-haired Pointing Griffon"
    },
    {
        "petTypeId": 1, "id": 246,
        "name": "Cesky Terrier"
    },
    {
        "petTypeId": 1, "id": 247,
        "name": "Atlas Mountain Dog (Aidi)"
    },
    {
        "petTypeId": 1, "id": 248,
        "name": "Pharaoh Hound"
    },
    {
        "petTypeId": 1, "id": 249,
        "name": "Majorca Mastiff"
    },
    {
        "petTypeId": 1, "id": 250,
        "name": "Havanese"
    },
    {
        "petTypeId": 1, "id": 251,
        "name": "Polish Lowland Sheepdog"
    },
    {
        "petTypeId": 1, "id": 252,
        "name": "Tatra Shepherd Dog"
    },
    {
        "petTypeId": 1, "id": 253,
        "name": "Pug"
    },
    {
        "petTypeId": 1, "id": 254,
        "name": "Alpine Dachsbracke"
    },
    {
        "petTypeId": 1, "id": 255,
        "name": "Akita"
    },
    {
        "petTypeId": 1, "id": 257,
        "name": "Shiba"
    },
    {
        "petTypeId": 1, "id": 259,
        "name": "Japanese Terrier"
    },
    {
        "petTypeId": 1, "id": 260,
        "name": "Tosa"
    },
    {
        "petTypeId": 1, "id": 261,
        "name": "Hokkaido"
    },
    {
        "petTypeId": 1, "id": 262,
        "name": "Japanese Spitz"
    },
    {
        "petTypeId": 1, "id": 263,
        "name": "Chesapeake Bay Retriever"
    },
    {
        "petTypeId": 1, "id": 264,
        "name": "Mastiff"
    },
    {
        "petTypeId": 1, "id": 265,
        "name": "Norwegian Lundehund"
    },
    {
        "petTypeId": 1, "id": 266,
        "name": "Hygen Hound"
    },
    {
        "petTypeId": 1, "id": 267,
        "name": "Halden Hound"
    },
    {
        "petTypeId": 1, "id": 268,
        "name": "Norwegian Elkhound Black"
    },
    {
        "petTypeId": 1, "id": 269,
        "name": "Saluki"
    },
    {
        "petTypeId": 1, "id": 270,
        "name": "Siberian Husky"
    },
    {
        "petTypeId": 1, "id": 271,
        "name": "Bearded Collie"
    },
    {
        "petTypeId": 1, "id": 272,
        "name": "Norfolk Terrier"
    },
    {
        "petTypeId": 1, "id": 273,
        "name": "Canaan Dog"
    },
    {
        "petTypeId": 1, "id": 274,
        "name": "Greenland Dog"
    },
    {
        "petTypeId": 1, "id": 276,
        "name": "Norrbottenspitz"
    },
    {
        "petTypeId": 1, "id": 277,
        "name": "Croatian Shepherd Dog"
    },
    {
        "petTypeId": 1, "id": 278,
        "name": "Karst Shepherd Dog"
    },
    {
        "petTypeId": 1, "id": 279,
        "name": "Montenegrin Mountain Hound"
    },
    {
        "petTypeId": 1, "id": 281,
        "name": "Old Danish Pointing Dog"
    },
    {
        "petTypeId": 1, "id": 282,
        "name": "Grand Griffon Vendeen"
    },
    {
        "petTypeId": 1, "id": 283,
        "name": "Coton De Tulear"
    },
    {
        "petTypeId": 1, "id": 284,
        "name": "Lapponian Herder"
    },
    {
        "petTypeId": 1, "id": 285,
        "name": "Spanish Greyhound"
    },
    {
        "petTypeId": 1, "id": 286,
        "name": "American Staffordshire Terrier"
    },
    {
        "petTypeId": 1, "id": 287,
        "name": "Australian Cattle Dog"
    },
    {
        "petTypeId": 1, "id": 288,
        "name": "Chinese Crested Dog"
    },
    {
        "petTypeId": 1, "id": 289,
        "name": "Icelandic Sheepdog"
    },
    {
        "petTypeId": 1, "id": 290,
        "name": "Beagle Harrier"
    },
    {
        "petTypeId": 1, "id": 291,
        "name": "Eurasian"
    },
    {
        "petTypeId": 1, "id": 292,
        "name": "Dogo Argentino"
    },
    {
        "petTypeId": 1, "id": 293,
        "name": "Australian Kelpie"
    },
    {
        "petTypeId": 1, "id": 294,
        "name": "Otterhound"
    },
    {
        "petTypeId": 1, "id": 295,
        "name": "Harrier"
    },
    {
        "petTypeId": 1, "id": 296,
        "name": "Collie Smooth"
    },
    {
        "petTypeId": 1, "id": 297,
        "name": "Border Collie"
    },
    {
        "petTypeId": 1, "id": 298,
        "name": "Romagna Water Dog"
    },
    {
        "petTypeId": 1, "id": 299,
        "name": "German Hound"
    },
    {
        "petTypeId": 1, "id": 300,
        "name": "Black And Tan Coonhound"
    },
    {
        "petTypeId": 1, "id": 301,
        "name": "American Water Spaniel"
    },
    {
        "petTypeId": 1, "id": 302,
        "name": "Irish Glen Of Imaal Terrier"
    },
    {
        "petTypeId": 1, "id": 303,
        "name": "American Foxhound"
    },
    {
        "petTypeId": 1, "id": 304,
        "name": "Russian-european Laika"
    },
    {
        "petTypeId": 1, "id": 305,
        "name": "East Siberian Laika"
    },
    {
        "petTypeId": 1, "id": 306,
        "name": "West Siberian Laika"
    },
    {
        "petTypeId": 1, "id": 307,
        "name": "Azawakh"
    },
    {
        "petTypeId": 1, "id": 308,
        "name": "Dutch Smoushond"
    },
    {
        "petTypeId": 1, "id": 309,
        "name": "Shar Pei"
    },
    {
        "petTypeId": 1, "id": 310,
        "name": "Peruvian Hairless Dog"
    },
    {
        "petTypeId": 1, "id": 311,
        "name": "Saarloos Wolfhond"
    },
    {
        "petTypeId": 1, "id": 312,
        "name": "Nova Scotia Duck Tolling Retriever"
    },
    {
        "petTypeId": 1, "id": 313,
        "name": "Dutch Schapendoes"
    },
    {
        "petTypeId": 1, "id": 314,
        "name": "Nederlandse Kooikerhondje"
    },
    {
        "petTypeId": 1, "id": 315,
        "name": "Broholmer"
    },
    {
        "petTypeId": 1, "id": 316,
        "name": "French White And Orange Hound"
    },
    {
        "petTypeId": 1, "id": 317,
        "name": "Kai"
    },
    {
        "petTypeId": 1, "id": 318,
        "name": "Kishu"
    },
    {
        "petTypeId": 1, "id": 319,
        "name": "Shikoku"
    },
    {
        "petTypeId": 1, "id": 320,
        "name": "Wirehaired Slovakian Pointer"
    },
    {
        "petTypeId": 1, "id": 321,
        "name": "Majorca Shepherd Dog"
    },
    {
        "petTypeId": 1, "id": 322,
        "name": "Great Anglo-french Tricolour Hound"
    },
    {
        "petTypeId": 1, "id": 323,
        "name": "Great Anglo-french White And Black Hound"
    },
    {
        "petTypeId": 1, "id": 324,
        "name": "Great Anglo-french White & Orange Hound"
    },
    {
        "petTypeId": 1, "id": 325,
        "name": "Medium-sized Anglo-french Hound"
    },
    {
        "petTypeId": 1, "id": 326,
        "name": "South Russian Shepherd Dog"
    },
    {
        "petTypeId": 1, "id": 327,
        "name": "Russian Black Terrier"
    },
    {
        "petTypeId": 1, "id": 328,
        "name": "Caucasian Shepherd Dog"
    },
    {
        "petTypeId": 1, "id": 329,
        "name": "Canarian Warren Hound"
    },
    {
        "petTypeId": 1, "id": 330,
        "name": "Irish Red And White Setter"
    },
    {
        "petTypeId": 1, "id": 331,
        "name": "Anatolian Shepherd Dog"
    },
    {
        "petTypeId": 1, "id": 332,
        "name": "Czechoslovakian Wolfdog"
    },
    {
        "petTypeId": 1, "id": 333,
        "name": "Polish Greyhound"
    },
    {
        "petTypeId": 1, "id": 334,
        "name": "Korea Jindo Dog"
    },
    {
        "petTypeId": 1, "id": 335,
        "name": "Central Asia Shepherd Dog"
    },
    {
        "petTypeId": 1, "id": 336,
        "name": "Spanish Water Dog"
    },
    {
        "petTypeId": 1, "id": 337,
        "name": "Italian Short-haired Segugio"
    },
    {
        "petTypeId": 1, "id": 338,
        "name": "Thai Ridgeback Dog"
    },
    {
        "petTypeId": 1, "id": 339,
        "name": "Parson Russell Terrier"
    },
    {
        "petTypeId": 1, "id": 340,
        "name": "Saint Miguel Cattle Dog"
    },
    {
        "petTypeId": 1, "id": 341,
        "name": "Brazilian Terrier"
    },
    {
        "petTypeId": 1, "id": 342,
        "name": "Australian Shepherd"
    },
    {
        "petTypeId": 1, "id": 343,
        "name": "Italian Corso Dog"
    },
    {
        "petTypeId": 1, "id": 344,
        "name": "American Akita"
    },
    {
        "petTypeId": 1, "id": 345,
        "name": "Jack Russell Terrier"
    },
    {
        "petTypeId": 1, "id": 346,
        "name": "Dogo Canario"
    },
    {
        "petTypeId": 1, "id": 347,
        "name": "White Swiss Shepherd Dog"
    },
    {
        "petTypeId": 1, "id": 348,
        "name": "Taiwan Dog"
    },
    {
        "petTypeId": 1, "id": 349,
        "name": "Romanian Mioritic Shepherd Dog"
    },
    {
        "petTypeId": 1, "id": 350,
        "name": "Romanian Carpathian Shepherd Dog"
    },
    {
        "petTypeId": 1, "id": 351,
        "name": "Australian Stumpy Tail Cattle Dog"
    },
    {
        "petTypeId": 1, "id": 352,
        "name": "Russian Toy"
    },
    {
        "petTypeId": 1, "id": 353,
        "name": "Cimarrón Uruguayo"
    },
    {
        "petTypeId": 1, "id": 354,
        "name": "Polish Hunting Dog"
    },
    {
        "petTypeId": 1, "id": 355,
        "name": "Bosnian And Herzegovinian - Croatian Shepherd Dog"
    },
    {
        "petTypeId": 1, "id": 356,
        "name": "Danish-swedish Farmdog"
    },
    {
        "petTypeId": 1, "id": 357,
        "name": "Southeastern European Shepherd"
    },
    {
        "petTypeId": 1, "id": 358,
        "name": "Thai Bangkaew Dog"
    },
    {
        "petTypeId": 1, "id": 359,
        "name": "Miniature Bull Terrier"
    },
    {
        "petTypeId": 1, "id": 360,
        "name": "Lancashire Heeler"
    }
];

module.exports = breeds;
