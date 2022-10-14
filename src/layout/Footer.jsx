function Footer() {
  return (
    <>
      <footer className="page-footer #efebe9 brown lighten-4">
        <div className="footer-copyright">
          <div className="container" style={{ textAlign: "center" }}>
            © {new Date().getFullYear()} Copyright Text
          </div>
        </div>
      </footer>
    </>
  );
}
export { Footer };
