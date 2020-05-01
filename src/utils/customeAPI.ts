import * as Models from "../models/models";

const personsData: Models.Person[] =
  [{
    id: "1",
    name: "Paa",
    birthDate: "8 Dec 1991",
    birthPlace: "Basna, India",
    living: true,
    gender: "Male",
    spouses: [
      {
        id: "2",
        name: "Shikha",
        current: true,
        gender: "Female"
      }
    ],
    children: [
      {
        id: "3",
        name: "Prashu",
        gender: "Male"
      },
      {
        id: "4",
        name: "Prashi",
        gender: "Female"
      }
    ],
    parents: [
      {
        id: "5",
        name: "Prabhu",
        gender: "Male"
      },
      {
        id: "6",
        name: "Anita",
        gender: "Female"
      }
    ]
  },
  {
    id: "2",
    name: "Shikha",
    birthDate: "28 Oct 1995",
    birthPlace: "Kunra, India",
    living: true,
    gender: "Female",
    spouses: [
      {
        id: "1",
        name: "Paa",
        current: true,
        gender: "Male"
      }
    ],
    children: [
      {
        id: "3",
        name: "Prashu",
        gender: "Male"
      },
      {
        id: "4",
        name: "Shipra",
        gender: "Female"
      }
    ],
    parents: [
      {
        id: "7",
        name: "Shyam",
        gender: "Male"
      },
      {
        id: "8",
        name: "Seema",
        gender: "Female"
      }
    ]
  }
  ];

export const getContact = async (): Promise<Object> => {
  const data: Models.Contact =
  {
    phoneNumber: "9999900000",
    emailAddress: "p@a.com"
  };

  return { data, response: new Response() };
};


export const getPerson = (name: string): Models.Person => {
  let personTemp: Models.Person = {};
  personsData.forEach((person) => {
    if (person.name === name) {
      personTemp = person;
    }
  });
  return personTemp;
};
