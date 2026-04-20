export function ArtSpaces() {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="font-serif text-4xl lg:text-5xl font-light mb-4">Где живёт наше дерево</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Изделия ArtWood органично вписываются в интерьеры любого масштаба и назначения
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          <div className="group overflow-hidden rounded-lg">
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src="/modern-contemporary-art-gallery-white-walls.jpg"
                alt="Частные резиденции"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="mt-4">
              <h3 className="font-serif text-2xl font-light mb-2">Частные резиденции</h3>
              <p className="text-muted-foreground leading-relaxed">
                Панели и мебель из массива создают неповторимую атмосферу загородных домов и городских квартир
              </p>
            </div>
          </div>

          <div className="group overflow-hidden rounded-lg">
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src="/classical-museum-grand-architecture-paintings.jpg"
                alt="Офисные пространства"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="mt-4">
              <h3 className="font-serif text-2xl font-light mb-2">Офисные пространства</h3>
              <p className="text-muted-foreground leading-relaxed">
                Деревянные акценты в переговорных, лобби и кабинетах подчёркивают статус и вкус владельца
              </p>
            </div>
          </div>

          <div className="group overflow-hidden rounded-lg">
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src="https://cdn.poehali.dev/projects/39934131-ac26-4ee8-881e-5f506b2366dc/files/d9238376-608c-46b2-a0d6-617b00da8812.jpg"
                alt="Производственная мастерская"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="mt-4">
              <h3 className="font-serif text-2xl font-light mb-2">Наша мастерская</h3>
              <p className="text-muted-foreground leading-relaxed">
                Современное производство полного цикла — от распиловки заготовок до финишной полировки готового изделия
              </p>
            </div>
          </div>

          <div className="group overflow-hidden rounded-lg">
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src="/outdoor-sculpture-garden-with-modern-art.jpg"
                alt="Рестораны и отели"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="mt-4">
              <h3 className="font-serif text-2xl font-light mb-2">Рестораны и отели</h3>
              <p className="text-muted-foreground leading-relaxed">
                Тематические деревянные инсталляции и отделка создают запоминающийся образ заведения
              </p>
            </div>
          </div>

          <div className="group overflow-hidden rounded-lg">
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src="/luxury-private-art-collection-room.jpg"
                alt="Премиальные апартаменты"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="mt-4">
              <h3 className="font-serif text-2xl font-light mb-2">Премиальные апартаменты</h3>
              <p className="text-muted-foreground leading-relaxed">
                Интегрированные деревянные системы — эталон роскоши в элитных жилых комплексах
              </p>
            </div>
          </div>

          <div className="group overflow-hidden rounded-lg">
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src="/contemporary-exhibition-space-art-show.jpg"
                alt="Общественные объекты"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="mt-4">
              <h3 className="font-serif text-2xl font-light mb-2">Общественные объекты</h3>
              <p className="text-muted-foreground leading-relaxed">
                Декоративные панно и облицовка в культурных, медицинских и образовательных учреждениях
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}