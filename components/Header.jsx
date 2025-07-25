export default function Header({applyDarkMode}) {

  console.log(applyDarkMode);

  return (
    <header className="header-container">
    <div className="header-content">
      <h2 className="title">
        <a href="/">Where in the world?</a>
      </h2>
      <p className="theme-changer" onClick={()=>applyDarkMode()}>
        <i className="fa-regular fa-moon" />
        &nbsp;&nbsp;Dark Mode
      </p>
    </div>
  </header>
  )
}
