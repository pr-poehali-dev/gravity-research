import { useState } from "react";
import Icon from "@/components/ui/icon";

const photos = [
  {
    url: "https://cdn.poehali.dev/projects/39934131-ac26-4ee8-881e-5f506b2366dc/bucket/82c2e70e-4211-41dc-a0e2-1ca24beb4ca9.png",
    title: "Панно «Крылья»",
    desc: "Лобби бизнес-центра. Резное панно с подсветкой на фоне вертикальных стеновых панелей из ореха",
  },
  {
    url: "https://cdn.poehali.dev/projects/39934131-ac26-4ee8-881e-5f506b2366dc/bucket/c207b080-0118-4107-a96c-a168dcb1ba85.jpg",
    title: "3D-панели «Геометрия»",
    desc: "Гостиная премиального апартамента. Объёмные треугольные модули из палисандра и ореха",
  },
  {
    url: "https://cdn.poehali.dev/projects/39934131-ac26-4ee8-881e-5f506b2366dc/bucket/f3967ba0-3af0-423f-8928-3c92a0e1b364.png",
    title: "Панели с тонировкой «Индиго»",
    desc: "Спальня в классическом стиле. Стеновые вставки из шпона с авторской синей тонировкой",
  },
  {
    url: "https://cdn.poehali.dev/projects/39934131-ac26-4ee8-881e-5f506b2366dc/bucket/3c854fef-e5b3-461a-8479-71f821b1b82c.jpeg",
    title: "Акцентная стена «Изумруд»",
    desc: "Ресторан. Крупноформатное панно из тонированного шпона в деревянной раме из тика",
  },
  {
    url: "https://cdn.poehali.dev/projects/39934131-ac26-4ee8-881e-5f506b2366dc/bucket/aa0ff505-6053-445e-9129-f641ee26217d.jpg",
    title: "Панели «Сапфир»",
    desc: "Номер отеля. Геометрическая акцентная стена из крашеного дуба с вертикальными рейками",
  },
];

export function WallPanelsGallery() {
  const [active, setActive] = useState(0);

  return (
    <section id="wall-panels" className="py-16 lg:py-24 bg-secondary">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mb-12">
          <h2 className="font-serif text-4xl lg:text-5xl font-light mb-4">Стеновые панели</h2>
          <p className="text-muted-foreground text-lg">Реализованные проекты — от лобби до частных резиденций</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Главное фото */}
          <div className="relative overflow-hidden rounded-sm aspect-square lg:aspect-[4/3]">
            <img
              key={active}
              src={photos[active].url}
              alt={photos[active].title}
              className="w-full h-full object-cover transition-opacity duration-500"
            />
            {/* Стрелки */}
            <button
              onClick={() => setActive((prev) => (prev - 1 + photos.length) % photos.length)}
              className="absolute left-3 top-1/2 -translate-y-1/2 bg-background/70 hover:bg-background/90 rounded-full p-2 transition-colors"
            >
              <Icon name="ChevronLeft" size={20} />
            </button>
            <button
              onClick={() => setActive((prev) => (prev + 1) % photos.length)}
              className="absolute right-3 top-1/2 -translate-y-1/2 bg-background/70 hover:bg-background/90 rounded-full p-2 transition-colors"
            >
              <Icon name="ChevronRight" size={20} />
            </button>
            {/* Счётчик */}
            <div className="absolute bottom-3 right-4 text-xs text-white bg-black/40 px-2 py-1 rounded">
              {active + 1} / {photos.length}
            </div>
          </div>

          {/* Описание + миниатюры */}
          <div className="flex flex-col gap-6">
            <div>
              <h3 className="font-serif text-2xl lg:text-3xl font-light mb-3">{photos[active].title}</h3>
              <p className="text-muted-foreground leading-relaxed">{photos[active].desc}</p>
            </div>

            {/* Миниатюры */}
            <div className="grid grid-cols-5 gap-2">
              {photos.map((photo, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`aspect-square overflow-hidden rounded-sm border-2 transition-all ${
                    i === active ? "border-foreground" : "border-transparent opacity-60 hover:opacity-90"
                  }`}
                >
                  <img src={photo.url} alt={photo.title} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
