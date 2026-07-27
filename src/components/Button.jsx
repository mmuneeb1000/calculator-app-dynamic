const styles = {
  number: `
    bg-key
    text-key-text
    shadow-[0_4px_0_var(--color-key-shadow)]
    hover:brightness-120
    active:translate-y-[2px]
    active:shadow-none
  `,

  operator: `
    bg-key
    text-key-text
    shadow-[0_4px_0_var(--color-key-shadow)]
    hover:brightness-120
    active:translate-y-[2px]
    active:shadow-none
  `,

  delete: `
    bg-key-primary
    text-key-text-inverse
    shadow-[0_4px_0_var(--color-key-primary-shadow)]
    hover:brightness-120
    active:translate-y-[2px]
    active:shadow-none
  `,

  reset: `
    bg-key-primary
    text-key-text-inverse
    shadow-[0_4px_0_var(--color-key-primary-shadow)]
    hover:brightness-110
    active:translate-y-[2px]
    active:shadow-none
  `,

  equals: `
    bg-key-accent
    text-key-text-inverse
    shadow-[0_4px_0_var(--color-key-accent-shadow)]
    hover:brightness-110
    active:translate-y-[2px]
    active:shadow-none
  `,
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
        transition-all
        duration-150
        ${styles[type]}
        ${textStyles[type]}
      `}
    >
      {label}
    </button>
  );
}
