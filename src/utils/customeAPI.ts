import { Contact } from "../models/models";

export const getContact = async (): Promise<Object> => {
  const data: Contact =
  {
    phoneNumber: "9999900000",
    emailAddress: "p@a.com"
  };

  return { data, response: new Response() };
};
