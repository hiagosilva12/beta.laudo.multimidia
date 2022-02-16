import React from 'react'
import * as S from './styled'

export function Profile() {
  return (
    <S.ProfileContainer>
      <S.ProfileContent>
        <S.Icon><h2>Dr.</h2></S.Icon>
        <S.Dates>
          <S.Name>Dr. Juan Cevasco</S.Name>
          <S.Email>juam.cevasco@gmail.com</S.Email>
        </S.Dates>
      </S.ProfileContent>
    </S.ProfileContainer>
  )
}