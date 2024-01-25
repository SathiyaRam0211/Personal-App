import React from "react";
import {
  FlexAlignedBlock,
  LogoText,
  SidebarWrapper,
} from "../../utils/utils_styled";

const Sidebar = () => {
  return (
    <SidebarWrapper>
      <FlexAlignedBlock>
        <LogoText>MyNE</LogoText>
      </FlexAlignedBlock>
    </SidebarWrapper>
  );
};

export default Sidebar;
