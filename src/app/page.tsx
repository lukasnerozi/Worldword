"use client";

import { ArrowsClockwise, Leaf } from "phosphor-react";
import Container from "../../components/Container";
import styled from "styled-components";
import styles from "./page.module.css";
import { FormEvent, useMemo, useState } from "react";
import Link from "next/link";
import Modal from "../../components/Modal";

const LogoDiv = styled.div`
  display: flex;
  align-items: center;
  max-width: fit-content;
  gap: 8px;
`;

const ContentGame = styled.div`
  outline: 1px solid #cccccc;
  max-width: fit-content;
  padding: 30px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  box-shadow: 0px 16px 20px rgba(30, 186, 71, 0.2);
`;

const Button = styled.button`
  background: #1eba47;
  font-size: 16px;
  width: 100%;
  border: none;
  border-radius: 8px;
  padding: 20px 8px 20px 8px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  font-weight: 600;
  &:hover {
    transform: scale(1.05);
    box-shadow: 0px 16px 20px rgba(30, 186, 71, 0.2);
  }
`;

const Span = styled.span`
  color: #cc2f2f;
  font-weight: 600;
`;

const Title = styled.p`
  font-size: 32px;
  color: green;
  font-weight: 700;
`;

export default function Home() {
  function getRandomNumber(maxNumber: number): number {
    return Math.floor(Math.random() * (maxNumber - 0 + 1) + 0);
  }

  function capitalizeWord(word: string) {
    const charLetter = word.charAt(0);
    return charLetter.toLocaleUpperCase() + word.substring(1);
  }
  const list = useMemo(
    () => [
      {
        palavra: "Piscina",
        dica: "Água",
      },
      {
        palavra: "Notebook",
        dica: "Computador",
      },
      {
        palavra: "Calor",
        dica: "Frio",
      },
      {
        palavra: "Pizza",
        dica: "Ítalia",
      },
      {
        palavra: "Montanhas",
        dica: "Natureza",
      },
      {
        palavra: "Passaro",
        dica: "Animal",
      },
      {
        palavra: "Moeda",
        dica: "Dinheiro",
      },
    ],
    []
  );

  const [showModal, setShowModal] = useState<boolean>(false);

  const [typeList, setType] = useState<string[]>([]);

  const [word, setWord] = useState<string>("");

  const [msg, setMsg] = useState("");

  const palavraVez = useMemo(() => list[getRandomNumber(list.length)], [list]);

  const handlerSend = (event: FormEvent) => {
    event.preventDefault();

    if (!word) {
      return;
    }
    if (word.match(/\d/)) {
      setMsg("Não pode haver números!");
      setWord("");
      return;
    }
    if (word.match(/[^\w\sÀ-ÖØ-öø-ÿ]/gi)) {
      setMsg("Não poder haver caracter especial");
      setWord("");
      return;
    }
    if (!typeList.includes(capitalizeWord(word))) {
      setType([capitalizeWord(word), ...typeList]);
      setMsg(``);
    } else setMsg(`${capitalizeWord(word)} Já foi inserida!`);

    if (capitalizeWord(word) == palavraVez.palavra) {
      setMsg("Parabéns, você acertou!");
      setShowModal(true);
    }
    setWord("");
  };
  console.log(palavraVez);

  return (
    <>
      <Container isAlign flexDir>
        <Link href="/">
          <LogoDiv>
            <Leaf size={48} weight="fill" color="#1eba47" />
            <h1>WorldWord</h1>
          </LogoDiv>
        </Link>
      </Container>
      <Container flexDir isAlign>
        <form onSubmit={handlerSend}>
          <ContentGame>
            <h2>Dica: {palavraVez?.dica}</h2>
            <input
              onChange={(event) => setWord(event.target.value)}
              value={word}
              className={styles.inputText}
              placeholder="Type"
            />
            <Button type="submit">ENVIAR</Button>
            <Span>{msg}</Span>
            {typeList.map((type) => (
              <h4 key={type}>{type}</h4>
            ))}
          </ContentGame>
        </form>
      </Container>
      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <Title>{msg}</Title>
        <h3>Palavra: {palavraVez?.palavra}</h3>
        <ArrowsClockwise
          onClick={() => window.location.reload()}
          size={32}
          weight="fill"
        />
      </Modal>
    </>
  );
}
