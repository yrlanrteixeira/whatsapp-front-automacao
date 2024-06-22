import styled from "styled-components";
import { Layout, Menu as MenuAntd } from "antd";

const { Sider } = Layout;

export const StyledSider = styled(Sider)`
  height: 100vh;
  position: fixed !important;
  z-index: 999;
  left: 0;
  top: 0;
  bottom: 0;
  transition: all 0.2s;
  background-color: ${({ theme }) => theme.COLORS.MAIN_COLORS.PRIMARY_DARK};

  -ms-overflow-style: none;
  scrollbar-width: none;
  ::-webkit-scrollbar {
    display: none;
  }
  .ant-layout-sider-children {
    width: 100%;
    height: fit-content;
  }

  .anticon {
    display: none;
  }
`;

export const MenuStyled = styled(MenuAntd)`
  &&& {
    background-color: ${({ theme }) => theme.COLORS.MAIN_COLORS.PRIMARY_DARK};
    border: none;
    color: #fff !important;
    font-size: 16px;
  }
  &.ant-menu .ant-menu-item,
  &.ant-menu .ant-menu-submenu,
  &.ant-menu .ant-menu-submenu-title {
    margin-top: 20px;
    border-radius: 25rem;
    color: #fff;
  }
  .ant-menu-submenu-title {
    color: #fff !important;
  }
  .ant-menu-submenu-title span:hover,
  .ant-menu-submenu-title i:hover {
    color: #fff;
  }
  li {
    :active {
      background-color: ${({ theme }) =>
        theme.COLORS.MAIN_COLORS.PRIMARY_LIGHT};
    }
    :hover {
      color: #fff !important;
    }
    ::after {
      border: none !important;
    }
  }
  .ant-menu-item-selected {
    background-color: ${({ theme }) => theme.COLORS.MAIN_COLORS.PRIMARY_LIGHT};
  }
  .ant-menu-item {
    display: flex;
    align-items: center;
  }
  .ant-menu-item .anticon {
    font-size: 18px;
  }
`;

export const BtnMenuOption = styled.span`
  background-color: #333;
  color: #d3d3d3;
  position: absolute;
  bottom: 0;
  right: 0;
  border-radius: 50%;
  padding: 1px;
  font-size: 0.8em;
  font-weight: bolder;
`;
