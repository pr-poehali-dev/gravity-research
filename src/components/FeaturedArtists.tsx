import { Card } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface Panno {
  name: string;
  technique: string;
  material: string;
  portrait: string;
  description: string;
  process: string;
}

const pannos: Panno[] = [
  {
    name: "Лабиринт",
    technique: "Фрезеровка массива",
    material: "Массив берёзы",
    portrait: "https://cdn.poehali.dev/projects/39934131-ac26-4ee8-881e-5f506b2366dc/bucket/13599195-6924-4abc-9532-0d9766c6ce11.jpg",
    description: "Панно выполнено из цельного массива берёзы методом глубокой фрезеровки. Концентрические окружности создают оптическую иллюзию глубины и движения. Поверхность обработана маслом-воском ручного нанесения — это подчёркивает природный рисунок волокон и защищает древесину.",
    process: "Массив, фрезеровка, масло-воск ручного нанесения",
  },
  {
    name: "Геометрия",
    technique: "Объёмная резьба",
    material: "Массив тика",
    portrait: "https://cdn.poehali.dev/projects/39934131-ac26-4ee8-881e-5f506b2366dc/bucket/deb4e302-78f7-4042-a95f-9f184a7fa675.jpg",
    description: "Объёмное панно из массива тика с геометрическим орнаментом, вырезанным вручную. Каждый элемент огранён под определённым углом — благодаря этому рельеф «оживает» при изменении освещения. Тик содержит природные масла, поэтому не требует дополнительной пропитки.",
    process: "Массив, ручная резьба, натуральное масло тика",
  },
  {
    name: "Спираль",
    technique: "Мозаика из шпона",
    material: "Шпон палисандра и тика",
    portrait: "https://cdn.poehali.dev/projects/39934131-ac26-4ee8-881e-5f506b2366dc/bucket/25a00602-239c-4192-8caa-389af129103b.jpg",
    description: "Панно собрано из сотен сегментов шпона палисандра и тика — каждый вырезан под точным углом и уложен вручную. Техника мозаики из шпона позволяет достичь плавных переходов цвета и создать эффект вращающейся спирали. Финишное покрытие — лак на водной основе высокой прозрачности.",
    process: "Шпон, ручная мозаика, лак на водной основе",
  },
  {
    name: "Солнце",
    technique: "Набор из планок",
    material: "Массив кедра",
    portrait: "https://cdn.poehali.dev/projects/39934131-ac26-4ee8-881e-5f506b2366dc/bucket/acb82301-c0de-4e76-a81d-41748ccf17ea.png",
    description: "Панно собрано из индивидуально выточенных планок сибирского кедра, расходящихся из центра — как лучи солнца. Кедр обладает природным ароматом и антибактериальными свойствами. Каждая планка обработана и подогнана вручную, что делает изделие по-настоящему уникальным.",
    process: "Массив кедра, точение, ручная подгонка, масло",
  },
  {
    name: "Рассвет",
    technique: "Фрезеровка и золочение",
    material: "Массив эбони, сусальное золото",
    portrait: "https://cdn.poehali.dev/projects/39934131-ac26-4ee8-881e-5f506b2366dc/bucket/449320da-1958-4127-8dcd-26637608d542.jpg",
    description: "Панно из чёрного эбони с лучами, отфрезерованными до полировки зеркального уровня. Центральный круг покрыт сусальным золотом 24 карата — вручную, листок за листком. Контраст тёмного дерева и золота создаёт эффект присутствия и притягивает взгляд с любого расстояния.",
    process: "Массив эбони, фрезеровка, сусальное золото 24 карата",
  },
];

export function FeaturedArtists() {
  return (
    <section id="artists" className="py-16 lg:py-24 bg-secondary">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mb-12">
          <h2 className="font-serif text-4xl lg:text-5xl font-light mb-4">Коллекция панно</h2>
          <p className="text-muted-foreground text-lg">Из ценных и экзотических пород массива, шпона и фанеры</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {pannos.map((panno) => (
            <Dialog key={panno.name}>
              <DialogTrigger asChild>
                <Card className="group cursor-pointer overflow-hidden border-0 bg-card hover:shadow-lg transition-shadow">
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={panno.portrait}
                      alt={panno.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-serif text-2xl font-light mb-1">{panno.name}</h3>
                    <p className="text-sm text-muted-foreground mb-1">{panno.technique}</p>
                    <p className="text-sm font-medium text-foreground">{panno.material}</p>
                    <p className="text-xs text-muted-foreground mt-3">Нажмите, чтобы узнать больше</p>
                  </div>
                </Card>
              </DialogTrigger>
              <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle className="font-serif text-3xl font-light">{panno.name}</DialogTitle>
                </DialogHeader>
                <div className="grid md:grid-cols-2 gap-6 mt-4">
                  <div className="aspect-square overflow-hidden rounded-lg">
                    <img
                      src={panno.portrait}
                      alt={panno.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">{panno.technique}</p>
                      <p className="text-base font-medium text-foreground mb-4">{panno.material}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">О панно</h4>
                      <p className="text-sm leading-relaxed">{panno.description}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Материал и техника</h4>
                      <p className="text-sm text-muted-foreground">{panno.process}</p>
                    </div>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  );
}
