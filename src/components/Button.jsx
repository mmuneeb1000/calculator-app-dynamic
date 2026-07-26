const styles = {
  number: "bg-key text-key-text shadow-[0_4px_0_var(--color-key-shadow)]",

  operator: "bg-key text-key-text shadow-[0_4px_0_var(--color-key-shadow)]",

  delete:
    "bg-key-primary text-key-text-inverse shadow-[0_4px_0_var(--color-key-primary-shadow)]",

  reset:
    "bg-key-primary text-key-text-inverse shadow-[0_4px_0_var(--color-key-primary-shadow)]",

  equals:
    "bg-key-accent text-inverse shadow-[0_4px_0_var(--color-key-accent-shadow)]",
};

export default function Button({ label, type = "number", onClick }) {
  return (
    <button
      onClick={onClick}
      className={`
        w-full
        rounded-lg
        py-3
        text-2xl
        font-bold
        transition
        active:translate-y-[2px]
        active:shadow-none
        ${styles[type]}
      `}
    >
      {label}
    </button>
  );
}
