import * as React from "react";
import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  background-color: var(--Backgrounds-Surface, #fff);
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.14);
  padding: 12px 16px;
  gap: 20px;

  @media (max-width: 991px) {
    flex-wrap: wrap;
  }
`;

export const HeaderContent = styled.div`
  display: flex;
  gap: 16px;
  margin: auto 0;
  flex-grow: 1;
`;

export const LogoContainer = styled.div`
  display: flex;
  gap: 16px;
  margin: auto 0;
  flex: 1;
`;

export const Logo = styled.img`
  width: 24px;
  aspect-ratio: 1;
  object-fit: cover;
  object-position: center;
`;

export const Title = styled.img`
  width: 108px;
  max-width: 100%;
  aspect-ratio: 7.69;
  object-fit: contain;
  object-position: center;
  margin: auto 0;
`;

export const AvatarContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: var(--Text-Light-Text-Light, #fff);
  font-size: 14px;
  font-weight: 400;
  text-align: center;
  letter-spacing: 0.07px;
  line-height: 150%;
  white-space: nowrap;

  @media (max-width: 991px) {
    white-space: initial;
  }
`;

export const Avatar = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  border-radius: 100px;
  background-color: var(--primary-green-primary-main, #003f2d);
  font-family: Calibre-R, sans-serif;
  font-size: 14px;

  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const data = [
  {
    logo: "https://cdn.builder.io/api/v1/image/assets/TEMP/2a1a4579e2d1f2846cd2f383467814239e216cd4e5bb1c9f2ee7da69acd2abfe?apiKey=a9b93fe44e0741148c7d9f968e073a29&width=24",
    title:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/704e6db8b42a29b3977ce7f6eba9f17383d950358676d5a390025824a947338d?apiKey=a9b93fe44e0741148c7d9f968e073a29&width=108",
    avatar: "BS",
  },
];

function HeaderComponent() {
  return (
    <Header>
      {data.map((item, index) => (
        <HeaderContent key={index}>
          <LogoContainer>
            <Logo src={item.logo} alt="Logo" />
            <Title src={item.title} alt="Title" />
          </LogoContainer>
          <AvatarContainer>
            <Avatar>{item.avatar}</Avatar>
          </AvatarContainer>
        </HeaderContent>
      ))}
    </Header>
  );
}

export default HeaderComponent;
