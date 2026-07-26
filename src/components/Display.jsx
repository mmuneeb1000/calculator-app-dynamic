export default function Display({ value }) {
  return (
    <div className="mb-6 rounded-xl bg-bg-screen p-6 text-right">
      <p className="overflow-x-auto text-5xl font-bold text-text">
        {value || "\u00A0"}
      </p>
    </div>
  );
}
