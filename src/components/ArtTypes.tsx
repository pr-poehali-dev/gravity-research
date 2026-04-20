import { Card, CardContent } from "@/components/ui/card";

interface ProductType {
  name: string;
  description: string;
  image: string;
  examples: string;
}

const productTypes: ProductType[] = [
  {
    name: "Стеновые панели",
    description:
      "Декоративные панели из ценных пород дерева для облицовки стен. Создают уникальную фактуру и тепло живого материала в любом интерьере.",
    image: "/oil-painting-canvas-classical-style.jpg",
    examples: "Тик, Зебрано, Венге, Мербау",
  },
  {
    name: "Напольные панели",
    description:
      "Массивные и шпонированные напольные покрытия с авторской обработкой. Устойчивы к нагрузкам, сохраняют природную красоту на десятилетия.",
    image: "/marble-sculpture-classical-statue.jpg",
    examples: "Дуб, Ясень, Палисандр, Венге",
  },
  {
    name: "Потолочные панели",
    description:
      "Рейки, кессоны и сплошные панели для потолка. Придают пространству глубину, формируют атмосферу и выгодно подчёркивают высоту помещения.",
    image: "/fine-art-black-white-photography.jpg",
    examples: "Кедр, Лиственница, Тик, Ироко",
  },
  {
    name: "Авторские панно",
    description:
      "Художественные объекты из экзотических пород с интарсией, маркетри или рельефной резьбой. Каждое панно — уникальное произведение, созданное вручную.",
    image: "/digital-art-abstract-colorful-design.jpg",
    examples: "Зебрано, Амарант, Лимба, Бубинга",
  },
  {
    name: "Мебель из массива",
    description:
      "Столы, комоды, шкафы и полки из цельных массивных заготовок. Монолитная конструкция без МДФ и фанеры — только натуральное дерево.",
    image: "https://cdn.poehali.dev/projects/39934131-ac26-4ee8-881e-5f506b2366dc/bucket/f8015512-a3bd-49d6-ae6e-a19a59ee406d.png",
    examples: "Орех, Дуб, Палисандр, Тик",
  },
  {
    name: "Мебель из шпона",
    description:
      "Изделия с облицовкой из тонкого среза ценных пород. Позволяет воссоздать редкие текстуры при сохранении функциональности и доступной стоимости.",
    image: "/charcoal-drawing-portrait-sketch.jpg",
    examples: "Макасарское эбеновое, Розовое дерево, Тулипвуд",
  },
  {
    name: "Интегрированные системы",
    description:
      "Комплексная отделка интерьера: стены, пол и потолок из единой коллекции пород создают цельный, гармоничный образ пространства.",
    image: "/ceramic-pottery-handmade-vase.jpg",
    examples: "Единая концепция под проект",
  },
  {
    name: "Индивидуальный заказ",
    description:
      "Разработка уникального изделия с нуля под ваш интерьер и технические требования. От эскиза до монтажа — полный производственный цикл.",
    image: "/mixed-media-collage-contemporary-art.jpg",
    examples: "Любые породы, форматы и техники",
  },
  {
    name: "Реставрация и отделка",
    description:
      "Восстановление и обновление изделий из ценного дерева: шлифовка, тонировка, масление и лакировка с сохранением первоначальной текстуры.",
    image: "/textile-art-woven-tapestry.jpg",
    examples: "Масло, Воск, Лак, Морилка",
  },
];

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
            <Card key={type.name} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-64 w-full">
                <img
                  src={type.image}
                  alt={type.name}
                  className="w-full h-full object-cover"
                />
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
          ))}
        </div>
      </div>
    </section>
  );
}