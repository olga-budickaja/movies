import { TelegramIcon, TwitterIcon, FacebookIcon, ViberIcon } from "react-share";
import styled from "@emotion/styled";

export const ContainerButton = styled.div`
  text-align: right;
`;
export const IconContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
`;

export const TelegramShare = styled(TelegramIcon)`
  width: 30px;
  height: 30px;
  border-radius: 100%;
`;

export const TwitterShare = styled(TwitterIcon)`
  width: 30px;
  height: 30px;
  border-radius: 100%;
`;
export const ViberShare = styled(ViberIcon)`
  width: 30px;
  height: 30px;
  border-radius: 100%;
`;
export const FacebookShare = styled(FacebookIcon)`
  width: 30px;
  height: 30px;
  border-radius: 100%;
`;