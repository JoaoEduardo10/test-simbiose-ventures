import { PersonDTO } from "../interfaceDTO/person";
import { dateFormatting } from "./date-formatting";

type PersonProps = {
  name: string;
  email: string;
  birth_date: string;
};

const createPerson = async ({ birth_date, email, name }: PersonProps) => {
  const response = await fetch("http://localhost:8000/v1/pessoa", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      birth_date: dateFormatting(birth_date),
      email,
      name,
    }),
  });

  const data: {
    error?: string;
    data: PersonDTO;
  } = await response.json();

  if (response.ok == false) {
    return { error: true, data: data.error };
  }

  return { error: false, data };
};

export { createPerson };
