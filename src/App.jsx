import Calculator from "./components/Calculator";
import Header from "./components/Header";
import Display from "./components/Display";
import Keypad from "./components/Keypad";
import Toggle from "./components/Toggle";
import useCalculator from "./hooks/useCalculator";
import Footer from "./components/Footer";

export default function App() {
  const { display, press, del, reset, equals } = useCalculator();

  return (
    <main className="flex flex-col min-h-screen items-center justify-center bg-bg p-6 transition-colors">
      <Calculator>
        <Header>
          <Toggle />
        </Header>

        <Display value={display} />

        <Keypad
          onPress={press}
          onDelete={del}
          onReset={reset}
          onEquals={equals}
        />
      </Calculator>
      <Footer />
    </main>
  );
}
