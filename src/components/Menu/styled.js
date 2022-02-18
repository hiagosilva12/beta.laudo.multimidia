import styled from "styled-components/macro";

export const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 20rem;
  width: 100%;
  height: 100%;
  background-color: #ededed;
`;

export const ProfileContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 8rem;
`;

export const ProfileContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 16.4rem;
  height: 100%;
  border-bottom: 2px #fff solid;
`;

export const Icon = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 3.75rem;
  height: 3.75rem;
  background-color: #fff;
  border-radius: 50%;
  margin-right: 1rem;
  h2 {
    font-size: 24px;
  }
`;

export const Dates = styled.span`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const Name = styled.h2``;

export const Email = styled.p`
  color: #4d4d4d;
`;

export const ButtonLogout = styled.button`
  padding-top: 1rem;
  height: 20px;
  border: 0;
`;

export const ImgLogout = styled.img`
  width: 35px;
`;
