import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import CatCard from "@/components/CatCard";

const catData = [
  {
    id: 1,
    name: "Мурзик",
    breed: "Британская короткошёрстная",
    age: "3 года",
    imageUrl: "https://images.unsplash.com/photo-1573865526739-10659fec78a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Солидный и независимый кот с мягкой плюшевой шерстью. Обожает нежиться на солнышке и играть с пушистыми игрушками."
  },
  {
    id: 2,
    name: "Василиса",
    breed: "Сибирская",
    age: "4 года",
    imageUrl: "https://images.unsplash.com/photo-1533743983669-94fa5c4338ec?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Роскошная пушистая красавица с дружелюбным характером. Любит исследовать окрестности и мурлыкать на коленях у хозяина."
  },
  {
    id: 3,
    name: "Симба",
    breed: "Мейн-кун",
    age: "2 года",
    imageUrl: "https://images.unsplash.com/photo-1592194996308-7b43878e84a6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Крупный и величественный кот с кисточками на ушах. Несмотря на внушительные размеры, очень ласковый и игривый."
  }
];

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <HeroSection />
      
      <section className="py-12 bg-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center mb-8">
            <h2 className="text-3xl font-bold tracking-tight">Наши замечательные коты</h2>
            <p className="text-muted-foreground md:text-xl max-w-[700px]">
              Познакомьтесь с нашими пушистыми друзьями, каждый из которых обладает уникальным характером и очарованием
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {catData.map((cat) => (
              <CatCard 
                key={cat.id}
                name={cat.name}
                breed={cat.breed}
                age={cat.age}
                imageUrl={cat.imageUrl}
                description={cat.description}
              />
            ))}
          </div>
        </div>
      </section>
      
      <footer className="bg-muted py-6 border-t">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <p className="text-sm text-muted-foreground">© 2025 КотоМир. Все права защищены.</p>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-foreground">Политика конфиденциальности</a>
              <a href="#" className="text-muted-foreground hover:text-foreground">Условия использования</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
