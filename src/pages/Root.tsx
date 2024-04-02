import { Outlet } from "react-router-dom";

import { Footer, Header } from "../components";

export const Root = () => {
  return (
    <>
      <Header />
      <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
        <Outlet />
      </div>
      <Footer />
    </>
  );
};
