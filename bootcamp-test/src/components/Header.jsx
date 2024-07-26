import logoImg from '../assets/logo.jpg';

export default function Header() {
  return (
    <header>
      <img src={logoImg} alt="A form and a pencil" />
      <h1>Buah Segar Shop</h1>
    </header>
  );
}
