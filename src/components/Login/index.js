import React, { useState, useContext } from "react";
import { Auth } from "./Auth";

import * as S from "./styled";
import "./style.css";

export default function Login() {
  const { login } = useContext(Auth);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("submit", { email, password });
    login(email, password);
  };

  return (
    <S.Container>
      <S.BackgroundLateral></S.BackgroundLateral>
      <S.BoxLogin>
        <S.Login>
          <S.TitleBemVindo>Bem vindo!</S.TitleBemVindo>
        </S.Login>
        <S.LoginRight>
          <S.TitleLogin>Login</S.TitleLogin>
          <form className="form" onSubmit={handleSubmit}>
            <S.LoginInputEmail>
              <S.InputEmail
                type="email"
                placeholder="Email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
            </S.LoginInputEmail>
            <S.LoginInputSenha>
              <S.InputSenha
                type="password"
                placeholder="Senha"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
            </S.LoginInputSenha>
            <S.BoxBtn>
              <S.ButtonEntrar type="submit">Entrar</S.ButtonEntrar>
            </S.BoxBtn>
          </form>
        </S.LoginRight>
      </S.BoxLogin>
    </S.Container>
  );
}
