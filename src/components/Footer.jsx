export default function Footer() {
  return (
    <footer
      className="fixed w-50 text-sm text-key-text-inverse
     bottom-2 bg-key-accent/70 rounded-lg px-2 py-1"
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
