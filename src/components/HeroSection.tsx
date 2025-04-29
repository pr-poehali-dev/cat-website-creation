const HeroSection = () => {
  return (
    <section className="py-12 md:py-24 bg-gradient-to-b from-background to-secondary/30">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="space-y-4">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Добро пожаловать в мир удивительных котов!
            </h1>
            <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Откройте для себя разнообразие пород, темпераментов и историй наших пушистых друзей. Каждый кот уникален и достоин вашего внимания!
            </p>
          </div>
          <div className="mx-auto lg:mr-0 flex items-center justify-center">
            <img 
              src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Милый кот" 
              className="aspect-video rounded-xl object-cover w-full max-w-md shadow-xl" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
