import React, { useContext } from "react";
import { Auth } from "../Login/Auth";
import ImgLogout from "../../img/logout.png";

import * as S from "./styled";

export function Profile() {
  const { logout } = useContext(Auth);

  const handleLogout = () => {
    logout();
  };
  return (
    <S.ProfileContainer>
      <S.ProfileContent>
        <S.Icon>
          <h2>Dr.</h2>
        </S.Icon>
        <S.Dates>
          <S.Name>Dr. Juan Cevasco</S.Name>
          <S.Email>juam.cevasco@gmail.com</S.Email>
        </S.Dates>
      </S.ProfileContent>
      <S.ButtonLogout onClick={handleLogout}>
        <S.ImgLogout src={ImgLogout} />
      </S.ButtonLogout>
    </S.ProfileContainer>
  );
}
