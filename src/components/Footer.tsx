import { FC, useContext } from 'react';
// import { useTheme } from '../context/ThemeContext';

const Footer: FC = () => {
  // const { isLightTheme } = useTheme();

  return (
    <footer className={`p-4 mt-4 `}>
      <p>&copy; 2024 Portofolio Saya. Semua hak cipta dilindungi.</p>
    </footer>
  );
};

export default Footer;