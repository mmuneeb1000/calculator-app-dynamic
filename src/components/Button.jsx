const styles = {
  number: "bg-key text-key-text shadow-[0_4px_0_var(--color-key-shadow)]",
  operator: "bg-key text-key-text shadow-[0_4px_0_var(--color-key-shadow)]",
  delete:
    "bg-key-primary text-key-text-inverse shadow-[0_4px_0_var(--color-key-primary-shadow)]",
  reset:
    "bg-key-primary text-key-text-inverse shadow-[0_4px_0_var(--color-key-primary-shadow)]",
  equals:
    "bg-key-accent text-key-text-inverse shadow-[0_4px_0_var(--color-key-accent-shadow)]",
};
const textStyles = {
  number: "text-[2rem]",
  operator: "text-[2rem]",
  delete: "text-[1.25rem] md:text-[1.5rem] tracking-wider",
  reset: "text-[1.25rem] md:text-[1.5rem] tracking-wider",
  equals: "text-[2rem]",
};

export default function Button({ label, type = "number", onClick }) {
  return (
    <button
      onClick={onClick}
      className={`
        flex
        h-16
        w-full
        items-center
        justify-center
        rounded-lg
        font-bold
        leading-none
        transition
        active:translate-y-[2px]
        active:shadow-none
        ${styles[type]}
        ${textStyles[type]}
      `}
    >
      {label}
    </button>
  );
}
