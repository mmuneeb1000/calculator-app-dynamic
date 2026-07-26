export default function Header({ children }) {
  return (
    <header className="mb-8 flex items-end justify-between">
      <h1 className="text-3xl font-bold text-text">calc</h1>

      {children}
    </header>
  );
}
