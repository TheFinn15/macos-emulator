import AppBar from './components/AppBar/AppBar.tsx';
import Dock from './components/Dock/Dock.tsx';
import { stores, StoresProvider } from './components/stores.ts';

function App() {
  function applyBackground() {
    document.body.style.backgroundImage = 'url("./src/assets/background.jpg")';
    document.body.style.backgroundSize = 'cover';
  }

  applyBackground();

  return (
    <StoresProvider value={stores}>
      <AppBar />
      <Dock />
    </StoresProvider>
  );
}

export default App;
