const { initializeApp } = require("firebase/app");
const { getFirestore, doc, setDoc } = require("firebase/firestore");
//const { guestsList } = require("../utils/guests");

const guestsList = [
    {
        full_name: "José Duarte",
        phone_number: "584120880770",
        nick_name: "Paitooo",
        dependents: [
            {name: "Carlota Marquez "}
        ],
        outside_country: false,
    },
    {
        full_name: "Carlota Marquez",
        phone_number: "584121196182",
        nick_name: "Mamiiii",
        dependents: [
            {name: "José Duarte"}
        ],
        outside_country: false,
    },
    {
        full_name: "Génova Duarte",
        phone_number: "584127611044",
        nick_name: "Ovita",
        dependents: [
            {name: "Manuel Silva"},
            {name: "Patricia Silva"},
            {name: "Carlos Figueredo"}
        ],
        outside_country: false,
    },
    {
        full_name: "Carlos Figueredo",
        phone_number: "584148463232",
        nick_name: "Cailos",
        dependents: [
            {name: "Manuel Silva"},
            {name: "Patricia Silva"},
            {name: "Génova Duarte"}
        ],
        outside_country: false,
    },
    {
        full_name: "Génesis Riff",
        phone_number: "4915161000273",
        nick_name: "Gena",
        dependents: [
            {name: "Eva Riff"},
        ],
        outside_country: false,
    },
    {
        full_name: "Eva Riff",
        phone_number: "491742146723",
        nick_name: "Evii",
        dependents: [
            {name: "Genésis Riff"},
        ],
        outside_country: false,
    },
    {
        full_name: "Daniel Duarte",
        phone_number: "584121756861",
        nick_name: "Danielito",
        dependents: [
            {name: "Nancy Arcia"},
        ],
        outside_country: false,
    },
    {
        full_name: "Nancy Arcia",
        phone_number: "584248577629",
        nick_name: "Tia Nancy",
        dependents: [
            {name: "Daniel Duarte"},
        ],
        outside_country: false,
    },
    {
        full_name: "Domingo Luis Duarte",
        phone_number: "584148139709",
        nick_name: "Minguito",
        dependents: [
            {name: "Daniel Enrique Duarte"},
            {name: "Maria Daniela Duarte"},
            {name: "Marianellys Bermudez"},
        ],
        outside_country: false,
    },
    {
        full_name: "Ana Maria Duarte",
        phone_number: "584248476937",
        nick_name: "Anitica",
        dependents: [
            {name: "Beride Macuma"}
        ],
        outside_country: false,
    },
    {
        full_name: "Benilde Duarte",
        phone_number: "584248340845",
        nick_name: "Tatico",
        dependents: [
            {name: "Carla Spangenberg"}
        ],
        outside_country: false,
    },
    {
        full_name: "Carla Spangenberg",
        phone_number: "5491173619408",
        nick_name: "Carlita",
        dependents: [
            {name: "Benilde Duarte"}
        ],
        outside_country: false,
    },
    {
        full_name: "Beride Macuma",
        phone_number: "584248783286",
        nick_name: "Mimi",
        dependents: [],
        outside_country: false,
    },
    {
        full_name: "Adolfo Ruiz",
        phone_number: "584248595000",
        nick_name: "Papito",
        dependents: [
            {name: "Linda Scope"}
        ],
        outside_country: false,
    },
    {
        full_name: "Linda Scope",
        phone_number: "584148252366",
        nick_name: "Linda Linda",
        dependents: [
            {name: "Adolfo Ruiz"}
        ],
        outside_country: false,
    },
    {
        full_name: "Andrea Ruiz",
        phone_number: "584120948960",
        nick_name: "Andreita",
        dependents: [],
        outside_country: false,
    },
    {
        full_name: "Amanda Ruiz",
        phone_number: "584121840534",
        nick_name: "Mandy",
        dependents: [
            {name: "Alejandro Morales"}
        ],
        outside_country: false,
    },
    {
        full_name: "Alejandro Morales",
        phone_number: "584248804152",
        nick_name: "Alejo",
        dependents: [
            {name: "Amanda Ruiz"}
        ],
        outside_country: false,
    },
    {
        full_name: "Alicia Hernandez",
        phone_number: "584248663753",
        nick_name: "Abuela",
        dependents: [],
        outside_country: false,
    },
    {
        full_name: "Dora Ruiz",
        phone_number: "584148121503",
        nick_name: "Tia Dora",
        dependents: [
            {name: "Oswar Arias"}
        ],
        outside_country: false,
    },
    {
        full_name: "Oswar Arias",
        phone_number: "584148064702",
        nick_name: "Tio Oswar",
        dependents: [
            {name: "Dora Ruiz"}
        ],
        outside_country: false,
    },
    {
        full_name: "Hector Arias",
        phone_number: "584248593783",
        nick_name: "Hector Arias",
        dependents: [
            {name: "Rubeccis Gamboa"},
            {name: "Hector Arias Gamboa"}
        ],
        outside_country: false,
    },
    {
        full_name: "Jesús García",
        phone_number: "584147697115",
        nick_name: "Chuo",
        dependents: [
            {name: "Omira Millan"},
            {name: "Jesús García Millan"},
            {name: "Amira García Millan"}
        ],
        outside_country: false,
    },
    {
        full_name: "Doris Ruiz",
        phone_number: "584248564866",
        nick_name: "Tia Doris",
        dependents: [
            {name: "Alexander Malave"},
            {name: "Dorialis Malave"},
            {name: "Alexandra Malave"}
        ],
        outside_country: false,
    },
    {
        full_name: "Alexander Malave",
        phone_number: "584148436177",
        nick_name: "Alexander",
        dependents: [
            {name: "Doris Ruiz"},
            {name: "Dorialis Malave"},
            {name: "Alexandra Malave"}
        ],
        outside_country: false,
    },
    {
        full_name: "Williams Ruiz",
        phone_number: "584148789497",
        nick_name: "Tio Wiliams",
        dependents: [
            {name: "Carmen Rodriguez"},
            {name: "Hugo Ruiz"},
            {name: "Victor Ruiz"}
        ],
        outside_country: false,
    },
    {
        full_name: "Carmen Rodriguez",
        phone_number: "584140883019",
        nick_name: "Tio Carmen",
        dependents: [
            {name: "Williams Ruiz"},
            {name: "Hugo Ruiz"},
            {name: "Victor Ruiz"}
        ],
        outside_country: false,
    },
    {
        full_name: "Carlyle Scope",
        phone_number: "584144662075",
        nick_name: "Abuelo",
        dependents: [],
        outside_country: false,
    },
    {
        full_name: "Lyncar Scope",
        phone_number: "584164837654",
        nick_name: "Tia Lyncar",
        dependents: [
            {name: "Luis Sandoval"},
            {name: "Lizzie Sandoval"},
            {name: "Lynda Sandoval"},
            {name: "Carlyle Scope"}
        ],
        outside_country: false,
    },
    {
        full_name: "Liza Sandoval",
        phone_number: "584265510749",
        nick_name: "Pri",
        dependents: [],
        outside_country: false,
    },
    {
        full_name: "Valentina Scope",
        phone_number: "584148708583",
        nick_name: "Pri",
        dependents: [
            {name: "Charles Scope"},
            {name: "Valeria Scope"},
            {name: "Christofer Scope"}
        ],
        outside_country: false,
    },
    {
        full_name: "Gabriel Ruiz",
        phone_number: "584148641459",
        nick_name: "Gabriel",
        dependents: [
            {name: "Roxana Sanchez"},
            {name: "Abraham Ruiz"},
            {name: "Liliana Lucchesse"},
            {name: "Carlos Ruiz"}
        ],
        outside_country: false,
    },
    {
        full_name: "Roxana Sanchez",
        phone_number: "584248475015",
        nick_name: "Roxana",
        dependents: [
            {name: "Gabriel Ruiz"},
            {name: "Abraham Ruiz"}
        ],
        outside_country: false,
    },
    {
        full_name: "Liliana Lucchesse",
        phone_number: "584249150770",
        nick_name: "Tia Liliana",
        dependents: [],
        outside_country: false,
    },
    {
        full_name: "Jesús Mictil",
        phone_number: "584248646412",
        nick_name: "Pachus",
        dependents: [],
        outside_country: false,
    },
    {
        full_name: "Amanda Sanchez",
        phone_number: "584148201549",
        nick_name: "Mandy",
        dependents: [],
        outside_country: false,
    },
    {
        full_name: "Arlette Gomez",
        phone_number: "584148078175",
        nick_name: "Arlette",
        dependents: [
            {name: "Jesús Perez"},
            {name: "Georgette Perez"}
        ],
        outside_country: false,
    },
    {
        full_name: "Luis Felipe Malaver",
        phone_number: "584148495504",
        nick_name: "Lucho",
        dependents: [],
        outside_country: false,
    },
    {
        full_name: "Maria Velasquez",
        phone_number: "584120831055",
        nick_name: "Marivi",
        dependents: [
            {name: "Camila Hernandez"},
            {name: "Leomary Mesa"},
            {name: "Angel Indaburo"},
            {name: "Leonor Indaburo"},
            {name: "Berta Gonzalez"},
            {name: "Ibelice Mesa"},
            {name: "Chiquinquira Gonzalez"},
            {name: "Yvett Mesa"},
            {name: "Airem Gonzalez"}
        ],
        outside_country: false,
    },
    {
        full_name: "Leomary Mesa",
        phone_number: "584248428318",
        nick_name: "Leo",
        dependents: [
            {name: "Maria Velasquez"},
            {name: "Camila Hernandez"},
            {name: "Ibelice Mesa"},
        ],
        outside_country: false,
    },
    {
        full_name: "Leonor Indaburo",
        phone_number: "584141887927",
        nick_name: "Leo",
        dependents: [
            {name: "Angel Indaburo"},
            {name: "Berta Gonzalez"},
        ],
        outside_country: false,
    },
    {
        full_name: "Berta Gonzalez",
        phone_number: "584166840202",
        nick_name: "Berta",
        dependents: [
            {name: "Angel Indaburo"},
            {name: "Leonor Indaburo"},
        ],
        outside_country: false,
    },
    {
        full_name: "Chiquinquira Gonzalez",
        phone_number: "584128587936",
        nick_name: "Chiqui",
        dependents: [
            {name: "Yvett Mesa"},
            {name: "Airam Gonzalez"},
        ],
        outside_country: false,
    },
    {
        full_name: "Yvett Mesa",
        phone_number: "584148956265",
        nick_name: "Yvett",
        dependents: [
            {name: "Chiquinquira Gonzalez"},
            {name: "Airam Gonzalez"},
        ],
        outside_country: false,
    },
    {
        full_name: "Mariela Rojas",
        phone_number: "584144555606",
        nick_name: "Mariela",
        dependents: [],
        outside_country: false,
    },
    {
        full_name: "Mairelys Vera",
        phone_number: "584143168527",
        nick_name: "Mai",
        dependents: [
            {name: "Arturo Pinto"}
        ],
        outside_country: false,
    },
    {
        full_name: "Arturo Pinto",
        phone_number: "584243503366",
        nick_name: "Mai",
        dependents: [
            {name: "Mairelys Vera"}
        ],
        outside_country: false,
    },
    {
        full_name: "Vanesa Gonzalez",
        phone_number: "584122582758",
        nick_name: "Vane",
        dependents: [
            {name: "Viviana Makarem"}
        ],
        outside_country: false,
    },
    {
        full_name: "Maria Koury",
        phone_number: "584148148118",
        nick_name: "Friend",
        dependents: [
            {name: "Manuel Curi"}
        ],
        outside_country: false,
    },
    {
        full_name: "Marilena Rodriguez",
        phone_number: "584166806368",
        nick_name: "Marilena",
        dependents: [
            {name: "Luis Indriago"},
            {name: "Luis Indriago Jr"}
        ],
        outside_country: false,
    },
    {
        full_name: "Luis Indriago",
        phone_number: "584166842322",
        nick_name: "Luis",
        dependents: [
            {name: "Marilena Rodriguez"},
            {name: "Luis Indriago Jr"}
        ],
        outside_country: false,
    },
    {
        full_name: "Ofelia Ruiz",
        phone_number: "584141993535",
        nick_name: "Ofelia",
        dependents: [
            {name: "Victor Ruiz"}
        ],
        outside_country: false,
    },
    {
        full_name: "Fernando Romero",
        phone_number: "584147796723",
        nick_name: "Fer",
        dependents: [
            {name: "Gabriela Bravo"},
            {name: "Christopher Romero"}
        ],
        outside_country: false,
    },
    {
        full_name: "Gabriela Bravo",
        phone_number: "584126079486",
        nick_name: "Gaby",
        dependents: [
            {name: "Fernando Romero"},
            {name: "Christopher Romero"}
        ],
        outside_country: false,
    },
    {
        full_name: "Anny Rodriguez",
        phone_number: "584248914248",
        nick_name: "Anny",
        dependents: [
            {name: "Carli Lezama"}
        ],
        outside_country: false,
    },
    {
        full_name: "Dalila Perez",
        phone_number: "584121829457",
        nick_name: "Dalila",
        dependents: [
            {name: "River Fajardo"}
        ],
        outside_country: false,
    },
    {
        full_name: "Dinora Rodriguez",
        phone_number: "584124992011",
        nick_name: "Dino",
        dependents: [
            {name: "Miguel Hermoso"}
        ],
        outside_country: false,
    },
    {
        full_name: "Jesus Portillo",
        phone_number: "584129467436",
        nick_name: "Porti",
        dependents: [
            {name: "Victor Salazar"}
        ],
        outside_country: false,
    },
    {
        full_name: "Jaseri Matute",
        phone_number: "584245011977",
        nick_name: "Jase",
        dependents: [],
        outside_country: false,
    },
    {
        full_name: "Eliezer Sanfiel",
        phone_number: "584241312546",
        nick_name: "Eliezer",
        dependents: [],
        outside_country: false,
    },
    {
        full_name: "Eduardo Gonzalez",
        phone_number: "584148104129",
        nick_name: "Eduardo",
        dependents: [],
        outside_country: false,
    },
    {
        full_name: "Luis Sanchez",
        phone_number: "584127679315",
        nick_name: "Luis",
        dependents: [
            {name: "Mariagel Borges"}
        ],
        outside_country: false,
    },
    {
        full_name: "Oriana Spangenberg",
        phone_number: "34693292634",
        nick_name: "Ori",
        dependents: [
            {name: "Roberto Sano"},
            {name: "Flavia Sano"}
        ],
        outside_country: false,
    },
    {
        full_name: "Roberto Sano",
        phone_number: "584243208271",
        nick_name: "Beto",
        dependents: [
            {name: "Oriana Spangenberg"},
            {name: "Flavia Sano"}
        ],
        outside_country: false,
    }
]

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDAzqybVhg6a-UyzlRdFRIyGuj2tL9L-RI",
  authDomain: "boda-duarte-ruiz.firebaseapp.com",
  projectId: "boda-duarte-ruiz",
  storageBucket: "boda-duarte-ruiz.appspot.com",
  messagingSenderId: "2555323531",
  appId: "1:2555323531:web:52b1383f0434baeac6e08e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

(async () => {
  guestsList.map(async (guest) => {
    console.log("guardando: ", guest.full_name)
    await setDoc(doc(db, "guests", guest.phone_number), guest);
  });
})();
