export function isOperator(value) {
  return ["+", "-", "×", "/", "*"].includes(value);
}

export function appendValue(expression, value) {
  if (!expression) {
    if (isOperator(value)) return "";
    return value;
  }

  const last = expression.at(-1);

  if (isOperator(last) && isOperator(value)) {
    return expression.slice(0, -1) + value;
  }

  return expression + value;
}

export function appendDecimal(expression) {
  const parts = expression.split(/[+\-×/*/]/);
  const current = parts.at(-1);

  if (current.includes(".")) {
    return expression;
  }

  if (!current) {
    return expression + "0.";
  }

  return expression + ".";
}

export function deleteLast(expression) {
  return expression.slice(0, -1);
}

export function clearExpression() {
  return "";
}

export function evaluateExpression(expression) {
  if (!expression) return "0";

  try {
    const formatted = expression.replace(/×/g, "*");

    const result = Function(`"use strict"; return (${formatted})`)();

    if (!Number.isFinite(result)) {
      return "Error";
    }

    return String(result);
  } catch {
    return "Error";
  }
}
