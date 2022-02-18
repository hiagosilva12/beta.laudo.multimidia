import styled from "styled-components";
import "./style.css";

export const Container = styled.div`
  display: flex;
  height: 100vh;
`;

export const BackgroundLateral = styled.div`
  display: flex;
  max-width: 35rem;
  width: 100%;
  height: 100%;
  background-color: #d2d2d2;
`;

export const BoxLogin = styled.div`
  display: block;
`;

export const Login = styled.div`
  display: flex;
  margin-top: 8vh;
  margin-left: 3vh;
`;

export const TitleBemVindo = styled.h1`
  font-size: 35px;
  font-family: "Segoe UI", Regular;
`;

export const LoginRight = styled.div`
  display: block;
  width: 100%;
  padding-top: 10rem;
  padding-left: 3rem;
`;

export const TitleLogin = styled.h2`
  font-size: 35px;
  font-family: "Segoe UI", Regular;
`;

export const LoginInputEmail = styled.div`
  padding-top: 1rem;
`;

export const InputEmail = styled.input`
  padding: 1rem;
  width: 300px;
  font-weight: bold;
`;

export const LoginInputSenha = styled.div`
  padding-top: 2rem;
`;

export const InputSenha = styled.input`
  padding: 1rem;
  width: 300px;
  font-weight: bold;
`;

export const BoxBtn = styled.div`
  padding-top: 1rem;
`;

export const ButtonEntrar = styled.button`
  width: 300px;
  height: 45px;
  border: 0;
  cursor: pointer;
  color: #fff;
  background-color: #a7a5a5;
`;
