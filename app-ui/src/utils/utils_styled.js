import styled from "styled-components";

const primaryLight = "#E1F0DA";
const primaryDark = "#5F8670";

const textPrimary = "#212121";
const textSecondary = "#626262";
const textTernary = "#939393";

export const FlexAlignedBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SidebarWrapper = styled.div`
  width: 180px;
  height: 100vh;
  position: fixed;
  left: 0;
  background: black;
  padding: 24px 16px;
`;

export const LogoText = styled.span`
  font-family: "Libre Barcode 128 Text", system-ui;
  color: white;
  font-size: 40px;
  font-weight: 400;
  line-height: 40px;
`;

export const StepperContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  background: ${primaryDark};
`;

export const StepContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 250px;
  min-width: 320px;
  background: white;
  border-radius: 12px;
  padding: 16px;
`;

export const IconWrapper = styled.div`
  padding: 12px 0;
`;

export const AnswerBtn = styled.div`
  cursor: pointer;
  border: 1px solid ${textTernary};
  margin: 8px 0;
  padding: 4px 8px;
  min-width: 200px;
  border-radius: 8px;
  &:hover {
    background: ${primaryLight};
  }
`;

export const MainText = styled.span`
  font-size: 16px;
  color: ${textPrimary};
  font-weight: 500;
  line-height: 24px;
  display: inline-block;
  width: 300px;
`;

export const SubText = styled.span`
  font-size: 12px;
  color: ${textSecondary};
  font-weight: 400;
  line-height: 24px;
`;

export const EnterBtn = styled.div`
  margin: 0 8px;
  cursor: pointer;
  color: #939393;
  transition: color 0.3s;

  &:hover {
    color: black;
  }
`;
