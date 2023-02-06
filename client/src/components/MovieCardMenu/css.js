import styled from "@emotion/styled";
import { Pending } from "@mui/icons-material";

export const BoxContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  z-index: 10;
`;
export const IconMenu = styled(Pending)`
  fill: ${(props) => props.type === "vt" ? "white" : "grey"};
  opacity: 0.5;
  width: 40px;
  height: auto;
`;