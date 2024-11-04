import * as S from "./styled";

export const Logo = ({ logo }) => {
  return (
    <S.LogoContainer>
      <img src={logo} alt="누구로고" />
      <S.title>다함께 만들어가는 트렌디한 자기소개,누구</S.title>
    </S.LogoContainer>
  );
};