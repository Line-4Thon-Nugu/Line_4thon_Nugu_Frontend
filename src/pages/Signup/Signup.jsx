import * as S from "./styled";
import { useNavigate } from "react-router-dom";
import NuguLogo from "../../assets/Nugu_logo.svg";
import Cloud from "../../assets/Cloud.svg";
import StarNugu from "../../assets/nugu-star.svg";
import { Logo } from "../../components/common/Logo/Logo";
import { Button } from "../../components/common/button/button";

export const SignupPage = () => {
  const navigate = useNavigate();
  const handleSignup = () => {
    console.log("회원가입 페이지 이동");
  };

  const handleLogin = () => {
    navigate("/login");
  };
  return (
    <S.Wrapper>
      <S.LogoContainer>
        <img src={Cloud} alt="구름" />
        <Logo logo={NuguLogo} />
        <img src={StarNugu} alt="starnugu" />
      </S.LogoContainer>
      <S.BtnContainer>
        <Button disabled={false} onClick={handleSignup}>
          누구 생성하기
        </Button>
        <button id="loginBtn" onClick={handleLogin}>
          로그인
        </button>
      </S.BtnContainer>
    </S.Wrapper>
  );
};