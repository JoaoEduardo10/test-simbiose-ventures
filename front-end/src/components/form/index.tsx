import { useEffect, useState } from "react";
import { InputComponent } from "../input";
import { FormConteiner } from "./styles";
import { Button } from "../button";
import { Message } from "../message";
import { createPerson } from "../../helpers/fetchs";
import { Loading } from "../loading";

export const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [message, setMessage] = useState("");
  const [show, setShow] = useState(false);
  const [messageType, setMessageType] = useState<"ok" | "error">("ok");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let time: NodeJS.Timeout;
    if (show) {
      time = setTimeout(() => {
        setShow(false);
      }, 3000);
    }

    return () => clearTimeout(time);
  }, [show]);

  const getName = (valueName: string) => {
    setName(valueName);
  };

  const getEmail = (valueEmail: string) => {
    setEmail(valueEmail);
  };

  const getDate = (valueDate: string) => {
    setDate(valueDate);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);

    if (!name) {
      setLoading(false);
      setShow(true);
      setMessage("adicione um nome");
      setMessageType("error");
      return;
    }

    if (!email) {
      setLoading(false);
      setShow(true);
      setMessage("adicione um email");
      setMessageType("error");
      return;
    }

    if (!date) {
      setLoading(false);
      setShow(true);
      setMessage("adicione a sua data de nacimento");
      setMessageType("error");
      return;
    }

    const { data, error } = await createPerson({
      birth_date: date,
      email,
      name,
    });

    if (error) {
      setLoading(false);
      setShow(true);
      setMessage(data as string);
      setMessageType("error");
      return;
    }

    setLoading(false);
    setShow(true);
    setMessage("pessoa criada com sucesso!");
    setMessageType("ok");
  };

  return (
    <FormConteiner onSubmit={handleSubmit}>
      {loading && <Loading />}
      <Message state={show} title={message} type={messageType} />
      <InputComponent
        text="nome"
        type="text"
        handleValue={getName}
        value={name}
      />
      <InputComponent
        text="email"
        type="email"
        handleValue={getEmail}
        value={email}
      />
      <InputComponent
        text="data de nacimento"
        type="date"
        handleValue={getDate}
        value={date}
      />
      <Button text="enviar" type="submit" />
    </FormConteiner>
  );
};
