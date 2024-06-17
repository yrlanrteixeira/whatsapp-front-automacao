import { Outlet } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { THEME_DEFAULT } from "../styles/THEME";
import { Skeleton } from "antd";

export const PrivateRoute = () => {
  return (
    <ThemeProvider theme={THEME_DEFAULT}>
      <Skeleton paragraph={{ rows: 10, style: { padding: 50 } }}>
        <Outlet />
      </Skeleton>
    </ThemeProvider>
  );
};

export const PublicRoute = () => {
  return (
    <ThemeProvider theme={THEME_DEFAULT}>
      <Skeleton paragraph={{ rows: 10, style: { padding: 50 } }}>
        <Outlet />
      </Skeleton>
    </ThemeProvider>
  );
};
