"use client";

import { Leaf } from "phosphor-react";
import Container from "../../components/Container";
import styled from "styled-components";
import Link from "next/link";
import styles from "./page.module.css"
import { useState } from "react";

const LogoDiv = styled.div`
  display:flex;
  align-items:center;
  max-width: fit-content;
  gap:8px;
`;

const Divider = styled.div`
  width: 100%;
  height:1px;
  background: #cccccc;
`;

const [word, setWord] = useState<string>('');



const ContentGame = styled.div`
  outline: 1px solid #cccccc;
  max-width: fit-content;
  padding: 30px;
  border-radius: 20px;
  display:flex;
  flex-direction: column;
  align-items:center;
  gap:20px;
  box-shadow:0px 16px 20px rgba(30, 186, 71, .2);
`;

const Button = styled.button`
  background:#1eba47;
  font-size:16px;
  width:100%;
  border:none;
  border-radius:8px;
  padding:20px 8px 20px 8px;
  cursor: pointer;
  transition: all .3s ease-in-out;
  font-weight: 600;
  &:hover{
    transform: scale(1.05);
    box-shadow:0px 16px 20px rgba(30, 186, 71, .2);
  }
`;
export default function Home() {
  return <>
    <Container isAlign flexDir >
      <Link href="/">
        <LogoDiv>
          <Leaf size={48} weight="fill" color="#1eba47"/>
          <h1>WorldWord</h1>
        </LogoDiv>
      </Link>
    </Container>

    <Container flexDir isAlign>
      <ContentGame>
        <h2>Find word</h2>
        <input value={word} onChange={(e)=>setWord(e.target.value)} className={styles.inputText}
        placeholder="type"></input>
          <Button  type="submit">ENVIAR</Button>
      </ContentGame>
    </Container>
  </>
}
