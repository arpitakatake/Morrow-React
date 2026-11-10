
function Header() {
  const currentDate = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  });

  return (
    <header className="header">
      <a href="#" className="logo">
        <span className="logo-mark">m.</span>
        <span>morrow</span>
      </a>

      <div className="header-date">
        <span className="date-dot"></span>
        <span>{currentDate}</span>
      </div>
    </header>
  );
}

export default Header;
