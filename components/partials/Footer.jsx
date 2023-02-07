const Year = new Date().getFullYear();
function Footer() {
  return (
    <footer className="site-footer">
      <p>Copyright &copy; {Year} Dave Hill</p>
      <p>created using Next.js</p>
    </footer>
    );
}

export default Footer;