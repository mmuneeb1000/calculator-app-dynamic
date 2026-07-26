import Button from "./Button";

const buttons = [
  { label: "7", type: "number" },
  { label: "8", type: "number" },
  { label: "9", type: "number" },
  { label: "DEL", type: "delete" },

  { label: "4", type: "number" },
  { label: "5", type: "number" },
  { label: "6", type: "number" },
  { label: "+", type: "operator" },

  { label: "1", type: "number" },
  { label: "2", type: "number" },
  { label: "3", type: "number" },
  { label: "-", type: "operator" },

  { label: ".", type: "number" },
  { label: "0", type: "number" },
  { label: "/", type: "operator" },
  { label: "×", type: "operator" },

  { label: "RESET", type: "reset", span: 2 },
  { label: "=", type: "equals", span: 2 },
];

export default function Keypad({ onPress, onDelete, onReset, onEquals }) {
  function handleClick(button) {
    switch (button.type) {
      case "delete":
        onDelete();
        break;

      case "reset":
        onReset();
        break;

      case "equals":
        onEquals();
        break;

      default:
        onPress(button.label);
    }
  }

  return (
    <div className="grid grid-cols-4 gap-3 md:gap-5 rounded-xl bg-bg-secondary p-4 md:p-6">
      {buttons.map((button) => (
        <div
          key={button.label}
          className={button.span === 2 ? "col-span-2" : ""}
        >
          <Button
            label={button.label}
            type={button.type}
            onClick={() => handleClick(button)}
          />
        </div>
      ))}
    </div>
  );
}
