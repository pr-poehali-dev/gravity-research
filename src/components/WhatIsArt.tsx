export function WhatIsArt() {
  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="aspect-[3/4] overflow-hidden rounded-sm">
              <img
                src="https://cdn.poehali.dev/projects/39934131-ac26-4ee8-881e-5f506b2366dc/files/c671727a-1c4c-4036-9d84-291ef0eded9b.jpg"
                alt="Текстура редкой породы дерева"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="space-y-6">
              <h2 className="font-serif text-4xl lg:text-5xl xl:text-6xl font-light text-balance">
                Что такое ценная порода?
              </h2>

              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p className="text-lg">
                  Ценные и экзотические породы дерева — это материалы с уникальными свойствами:
                  редкой текстурой, природным рисунком, особой твёрдостью и долговечностью.
                  Каждое полено хранит в себе десятки, а порой и сотни лет роста.
                </p>

                <p>
                  Зебрано с его контрастными полосами, бубинга с переливающейся поверхностью,
                  мербау с золотистыми прожилками — природа создаёт узоры, которые невозможно
                  повторить искусственно. Именно поэтому изделия из таких пород уникальны.
                </p>

                <p>
                  В умелых руках мастера редкая порода превращается в произведение, которое
                  украшает интерьер, сохраняет ценность и передаётся следующим поколениям.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto mt-16">
          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p>
              Дерево — единственный материал, который живёт вместе с домом: реагирует на влажность,
              приобретает благородную патину с годами, пахнет лесом даже спустя десятилетия.
              Ни один синтетический аналог не способен передать эту теплоту и живую энергию натурального дерева.
            </p>

            <div className="pt-8 border-t border-border mt-8">
              <h3 className="font-serif text-2xl font-light mb-4 text-foreground">О мастерской ArtWood</h3>
              <p>
                ArtWood — это производство, основанное на глубоком уважении к материалу. Мы работаем
                исключительно с сертифицированной древесиной легального происхождения, используем
                экологичные масла и лаки, а каждый проект разрабатываем совместно с заказчиком.
                От первого эскиза до монтажа последней панели — мы рядом на каждом этапе.
                Наша цель — чтобы ваш интерьер стал произведением, которым гордятся годами.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}