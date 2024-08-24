import AppBar from './components/AppBar/AppBar.tsx';

function App() {
  function applyBackground() {
    document.body.style.backgroundImage = 'url("./src/assets/background.jpg")';
    document.body.style.backgroundSize = 'cover';
  }

  applyBackground();

  return (
    <>
      <AppBar />
    </>
  );
}

export default App;
