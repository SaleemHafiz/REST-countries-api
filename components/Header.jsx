export default function Header() {
  
const isDark = localStorage.getItem("isDark") === "true";

if(isDark){
  document.body.classList.add('dark');
}


function applyDarkMode() {
  const isDark = document.body.classList.toggle('dark');
  console.log(isDark);
  localStorage.setItem("isDark", isDark);
  
}

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
