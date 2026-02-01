import Header from "./components/Header";
import About from "./components/About";
import LinkContainer from "./components/LinkContainer";

function App() {

  return (
    <>
      <Header/>
      <main className="mt-10 flex flex-col gap-12">
        <About/>
        <LinkContainer/>
      </main>
    </>
  )
}

export default App
