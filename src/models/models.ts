export interface Contact {
  emailAddress?: string;
  phoneNumber?: string;
}
export interface Spouse {
  id?: string;
  name?: string;
  current?: boolean;
  gender?: string;
}

export interface Child {
  id?: string;
  name?: string;
  gender?: string;
}

export interface Parent {
  id?: string;
  name?: string;
  gender?: string;
}

export interface Person {
  id?: string;
  name?: string;
  birthDate?: string;
  birthPlace?: string;
  living?: boolean;
  gender?: string;
  spouses?: Spouse[];
  children?: Child[];
  parents?: Parent[];
  Contact?: Contact;
}

export interface PersonToShow {
  id?: string;
  name?: string;
  birthDate?: string;
  birthPlace?: string;
  living?: boolean;
  gender?: string;
  spouseName?: string;
  children?: Child[];
  parents?: Parent[];
  Contact?: Contact;
}
