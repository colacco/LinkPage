import { useTranslation } from "react-i18next"

function App() {
  const { t, i18n } = useTranslation();

  return (
    <>
      <p>{ t("home") }</p>
      <button onClick={() => i18n.changeLanguage(i18n.language === "en" ? "pt" : "en")}></button>
    </>
  )
}

export default App
