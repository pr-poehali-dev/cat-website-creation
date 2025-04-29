import { Paw } from "lucide-react";

const Header = () => {
  return (
    <header className="py-6 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cat-cream to-cat-orange/20 border-b">
      <div className="container flex justify-between items-center mx-auto">
        <div className="flex items-center gap-2">
          <Paw className="h-8 w-8 text-cat-orange animate-paw" />
          <h1 className="text-2xl font-bold text-cat-orange">КотоМир</h1>
        </div>
        <nav>
          <ul className="flex space-x-6">
            <li><a href="#" className="text-foreground hover:text-cat-orange transition-colors">Главная</a></li>
            <li><a href="#" className="text-foreground hover:text-cat-orange transition-colors">Породы</a></li>
            <li><a href="#" className="text-foreground hover:text-cat-orange transition-colors">Галерея</a></li>
            <li><a href="#" className="text-foreground hover:text-cat-orange transition-colors">О нас</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
