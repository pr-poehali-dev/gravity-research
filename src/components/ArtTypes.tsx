import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

interface ProductType {
  name: string;
  description: string;
  images: string[];
  examples: string;
}

const productTypes: ProductType[] = [
  {
    name: "Стеновые панели",
    description:
      "Декоративные панели из ценных пород дерева для облицовки стен. Создают уникальную фактуру и тепло живого материала в любом интерьере.",
    images: ["/oil-painting-canvas-classical-style.jpg"],
    examples: "Тик, Зебрано, Венге, Мербау",
  },
  {
    name: "Напольные панели",
    description:
      "Массивные и шпонированные напольные покрытия с авторской обработкой. Устойчивы к нагрузкам, сохраняют природную красоту на десятилетия.",
    images: ["/marble-sculpture-classical-statue.jpg"],
    examples: "Дуб, Ясень, Палисандр, Венге",
  },
  {
    name: "Потолочные панели",
    description:
      "Рейки, кессоны и сплошные панели для потолка. Придают пространству глубину, формируют атмосферу и выгодно подчёркивают высоту помещения.",
    images: ["/fine-art-black-white-photography.jpg"],
    examples: "Кедр, Лиственница, Тик, Ироко",
  },
  {
    name: "Авторские панно",
    description:
      "Художественные объекты из экзотических пород с интарсией, маркетри или рельефной резьбой. Каждое панно — уникальное произведение, созданное вручную.",
    images: ["/digital-art-abstract-colorful-design.jpg"],
    examples: "Зебрано, Амарант, Лимба, Бубинга",
  },
  {
    name: "Мебель из массива",
    description:
      "Столы, комоды, шкафы и полки из цельных массивных заготовок. Монолитная конструкция без МДФ и фанеры — только натуральное дерево.",
    images: [
      "https://cdn.poehali.dev/projects/39934131-ac26-4ee8-881e-5f506b2366dc/bucket/f8015512-a3bd-49d6-ae6e-a19a59ee406d.png",
      "https://cdn.poehali.dev/projects/39934131-ac26-4ee8-881e-5f506b2366dc/bucket/8d4faa17-f26e-4f28-bf8e-74a179e24cd2.png",
    ],
    examples: "Орех, Дуб, Палисандр, Тик",
  },
  {
    name: "Мебель из шпона",
    description:
      "Изделия с облицовкой из тонкого среза ценных пород. Позволяет воссоздать редкие текстуры при сохранении функциональности и доступной стоимости.",
    images: ["/charcoal-drawing-portrait-sketch.jpg"],
    examples: "Макасарское эбеновое, Розовое дерево, Тулипвуд",
  },
  {
    name: "Интегрированные системы",
    description:
      "Комплексная отделка интерьера: стены, пол и потолок из единой коллекции пород создают цельный, гармоничный образ пространства.",
    images: ["/ceramic-pottery-handmade-vase.jpg"],
    examples: "Единая концепция под проект",
  },
  {
    name: "Индивидуальный заказ",
    description:
      "Разработка уникального изделия с нуля под ваш интерьер и технические требования. От эскиза до монтажа — полный производственный цикл.",
    images: ["/mixed-media-collage-contemporary-art.jpg"],
    examples: "Любые породы, форматы и техники",
  },
  {
    name: "Реставрация и отделка",
    description:
      "Восстановление и обновление изделий из ценного дерева: шлифовка, тонировка, масление и лакировка с сохранением первоначальной текстуры.",
    images: ["/textile-art-woven-tapestry.jpg"],
    examples: "Масло, Воск, Лак, Морилка",
  },
];

function ProductCard({ type }: { type: ProductType }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const hasMultiple = type.images.length > 1;

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative h-64 w-full">
        <img
          src={type.images[activeIndex]}
          alt={type.name}
          className="w-full h-full object-cover transition-opacity duration-300"
        />
        {hasMultiple && (
          <>
            <button
              onClick={() => setActiveIndex((i) => (i - 1 + type.images.length) % type.images.length)}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-background/70 hover:bg-background/90 rounded-full p-1.5 transition-colors"
            >
              <Icon name="ChevronLeft" size={16} />
            </button>
            <button
              onClick={() => setActiveIndex((i) => (i + 1) % type.images.length)}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-background/70 hover:bg-background/90 rounded-full p-1.5 transition-colors"
            >
              <Icon name="ChevronRight" size={16} />
            </button>
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
              {type.images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className={`w-1.5 h-1.5 rounded-full transition-colors ${i === activeIndex ? "bg-white" : "bg-white/50"}`}
                />
              ))}
            </div>
          </>
        )}
      </div>
      <CardContent className="p-6">
        <h3 className="font-serif text-2xl mb-3">{type.name}</h3>
        <p className="text-muted-foreground mb-4 leading-relaxed">{type.description}</p>
        <div className="pt-4 border-t">
          <p className="text-sm font-medium mb-1">Используемые породы:</p>
          <p className="text-sm text-muted-foreground">{type.examples}</p>
        </div>
      </CardContent>
    </Card>
  );
}

export function ArtTypes() {
  return (
    <section className="py-24 px-6 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl mb-4 text-balance">Что мы производим</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Полный спектр изделий из ценных и экзотических пород дерева — от декоративных панно до комплексной отделки интерьера
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {productTypes.map((type) => (
            <ProductCard key={type.name} type={type} />
          ))}
        </div>
      </div>
    </section>
  );
}
