export default function Footer() {
  return (
    <footer
      className="text-sm text-key-text-inverse
     bg-key-accent/70 rounded-lg mt-12 px-2 py-1 hidden md:block"
    >
      Challenge by
      <a
        className="hover:text-text hover:underline ml-1"
        href="https://www.frontendmentor.io?ref=challenge"
      >
        Frontend Mentor
      </a>
      . Coded by
      <a className="hover:text-text hover:underline ml-1" href="#">
        M.Muneeb
      </a>
      .
    </footer>
  );
}
