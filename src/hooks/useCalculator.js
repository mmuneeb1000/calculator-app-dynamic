import { useCallback, useEffect, useState } from "react";
import {
  appendDecimal,
  appendValue,
  clearExpression,
  deleteLast,
  evaluateExpression,
} from "../utils/calculator";

export default function useCalculator() {
  const [display, setDisplay] = useState("");

  const press = useCallback((value) => {
    if (value === ".") {
      setDisplay((prev) => appendDecimal(prev));
      return;
    }

    setDisplay((prev) => appendValue(prev, value));
  }, []);

  const del = useCallback(() => {
    setDisplay((prev) => deleteLast(prev));
  }, []);

  const reset = useCallback(() => {
    setDisplay(clearExpression());
  }, []);

  const equals = useCallback(() => {
    setDisplay((prev) => evaluateExpression(prev));
  }, []);

  useEffect(() => {
    function handleKeyDown(event) {
      const { key } = event;

      if (/^[0-9]$/.test(key)) {
        press(key);
        return;
      }

      switch (key) {
        case "+":
        case "-":
        case "/":
          press(key);
          break;

        case "*":
          press("×");
          break;

        case ".":
          press(".");
          break;

        case "=":
        case "Enter":
          event.preventDefault();
          equals();
          break;

        case "Backspace":
          event.preventDefault();
          del();
          break;

        case "Delete":
        case "Escape":
          event.preventDefault();
          reset();
          break;

        default:
          break;
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [press, del, reset, equals]);

  return {
    display,
    press,
    del,
    reset,
    equals,
  };
}
