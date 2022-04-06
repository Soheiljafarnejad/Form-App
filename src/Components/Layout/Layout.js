import "./Layout.css";
const Layout = ({ children }) => {
  return (
    <main className="app">
      <section className="pages">{children}</section>
      <section className="cover"></section>
    </main>
  );
};

export default Layout;
