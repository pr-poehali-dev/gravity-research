export function AboutSection() {
  return (
    <section id="about" className="py-16 lg:py-24 bg-secondary">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <h2 className="font-serif text-4xl lg:text-5xl font-light mb-6">
              Производство, в котором живёт душа дерева
            </h2>
            <div className="space-y-4 text-lg leading-relaxed">
              <p>
                ArtWood — это производственная мастерская полного цикла. Мы работаем с ценными
                и экзотическими породами: тиком, венге, зебрано, мербау, палисандром и десятками
                других видов, привезённых из разных уголков мира.
              </p>
              <p>
                Наши изделия органично вписываются в архитектуру пространства: авторские панно
                становятся акцентом стены, массивные панели формируют облик комнаты, а мебель
                из цельного дерева служит поколениям.
              </p>
              <p className="text-muted-foreground">
                Каждый проект мы разрабатываем индивидуально — от выбора породы и текстуры
                до финишной обработки и монтажа. Никаких массовых решений — только ручная работа
                и внимание к каждой детали.
              </p>
            </div>
          </div>
          <div className="aspect-[4/3] overflow-hidden">
            <img
              src="https://cdn.poehali.dev/projects/39934131-ac26-4ee8-881e-5f506b2366dc/files/9a23c54d-652b-43b6-877c-2477bd3806c8.jpg"
              alt="Интерьер с деревянными панелями"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}