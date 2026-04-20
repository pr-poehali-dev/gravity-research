import { Card } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface Wood {
  name: string;
  origin: string;
  hardness: string;
  region: string;
  portrait: string;
  image: string;
  description: string;
  usedFor: string;
}

const woods: Wood[] = [
  {
    name: "Зебрано",
    origin: "Экзотическая порода",
    hardness: "Твёрдость: высокая",
    region: "Западная Африка",
    portrait: "/portrait-of-leonardo-da-vinci-renaissance-artist.jpg",
    image: "/leonardo-da-vinci-renaissance-painting-style.jpg",
    description: "Зебрано — одна из самых эффектных экзотических пород с контрастными чёрно-золотыми полосами. Каждый срез уникален и неповторим, как отпечаток пальца. Древесина плотная, хорошо поддаётся полировке и сохраняет насыщенный рисунок на протяжении десятилетий.",
    usedFor: "Стеновые панно, столешницы, фасады мебели, декоративные вставки",
  },
  {
    name: "Венге",
    origin: "Экзотическая порода",
    hardness: "Твёрдость: очень высокая",
    region: "Центральная Африка",
    portrait: "/portrait-of-vincent-van-gogh-with-red-beard.jpg",
    image: "/vincent-van-gogh-starry-night-style-painting.jpg",
    description: "Венге — порода с глубоким тёмно-коричневым цветом и выразительной прямолинейной текстурой. Исключительно твёрдое и стабильное дерево, которое практически не деформируется при перепадах влажности. Ценится в премиальных интерьерах за аристократичный облик.",
    usedFor: "Напольные панели, стеновая облицовка, мебель, потолочные рейки",
  },
  {
    name: "Тик бирманский",
    origin: "Экзотическая порода",
    hardness: "Твёрдость: высокая",
    region: "Юго-Восточная Азия",
    portrait: "/portrait-of-pablo-picasso-spanish-artist.jpg",
    image: "/pablo-picasso-cubist-portrait-style.jpg",
    description: "Бирманский тик — легендарная порода, тысячелетиями используемая в кораблестроении и дворцовых интерьерах. Содержит природные масла, которые защищают древесину от влаги и насекомых. Золотисто-коричневый цвет с возрастом приобретает благородную патину.",
    usedFor: "Напольные покрытия, стеновые панели, садовая мебель, отделка ванных комнат",
  },
  {
    name: "Мербау",
    origin: "Экзотическая порода",
    hardness: "Твёрдость: очень высокая",
    region: "Малайзия, Папуа",
    portrait: "/portrait-of-frida-kahlo-with-flowers-in-hair.jpg",
    image: "/frida-kahlo-self-portrait-mexican-folk-art.jpg",
    description: "Мербау — тропический гигант с золотисто-красными прожилками на тёмно-коричневом фоне. Одна из наиболее стабильных пород: устойчива к нагрузкам, влаге и термитам. Прекрасно поддаётся обработке и долгие годы сохраняет первоначальный вид.",
    usedFor: "Напольные панели, террасная доска, лестницы, мебельные каркасы",
  },
  {
    name: "Палисандр",
    origin: "Ценная порода",
    hardness: "Твёрдость: очень высокая",
    region: "Южная Америка, Индия",
    portrait: "/portrait-of-claude-monet-with-white-beard-impressi.jpg",
    image: "/claude-monet-water-lilies-impressionist-painting.jpg",
    description: "Палисандр — королевская порода с насыщенным фиолетово-коричневым цветом и тонким ароматом. Используется для изготовления музыкальных инструментов высшего класса и предметов роскоши. Редкость и красота делают его символом подлинного качества.",
    usedFor: "Авторские панно, фасады мебели, музыкальные инструменты, декоративные объекты",
  },
  {
    name: "Бубинга",
    origin: "Экзотическая порода",
    hardness: "Твёрдость: высокая",
    region: "Экваториальная Африка",
    portrait: "/portrait-of-michelangelo-renaissance-sculptor.jpg",
    image: "/michelangelo-david-sculpture-renaissance.jpg",
    description: "Бубинга удивляет переливчатым муаровым рисунком, который меняется в зависимости от угла освещения. Розово-красный фон с тёмными прожилками создаёт живописный эффект. Порода исключительно твёрдая и устойчивая — идеал для крупных панно и столешниц.",
    usedFor: "Декоративные панно, столешницы, барные стойки, облицовка колонн",
  },
  {
    name: "Орех американский",
    origin: "Ценная порода",
    hardness: "Твёрдость: средняя",
    region: "Северная Америка",
    portrait: "/portrait-of-rembrandt-van-rijn-dutch-baroque-paint.jpg",
    image: "/rembrandt-portrait-painting-baroque-style.jpg",
    description: "Американский орех — порода с шоколадно-коричневым цветом и мягкой, выразительной текстурой. Сочетает в себе красоту и функциональность: легко обрабатывается, хорошо держит форму. Один из любимых материалов мастеров-мебельщиков по всему миру.",
    usedFor: "Корпусная мебель, стеновые панели, двери, лестницы",
  },
  {
    name: "Амарант",
    origin: "Экзотическая порода",
    hardness: "Твёрдость: очень высокая",
    region: "Южная Америка",
    portrait: "/portrait-of-salvador-dali-with-iconic-mustache.jpg",
    image: "/salvador-dali-surrealist-melting-clocks-painting.jpg",
    description: "Амарант — порода с пурпурным оттенком, который под воздействием света превращается в глубокий фиолетово-коричневый тон. Уникальная по цвету в мире древесины — не требует окраски, чтобы быть эффектным. Используется в самых изысканных дизайнерских проектах.",
    usedFor: "Авторские панно, инкрустации, декоративные вставки, украшения мебели",
  },
  {
    name: "Кедр сибирский",
    origin: "Ценная порода",
    hardness: "Твёрдость: средняя",
    region: "Сибирь, Россия",
    portrait: "/portrait-of-georgia-o-keeffe-american-modernist-pa.jpg",
    image: "/georgia-o-keeffe-flower-painting-modernist.jpg",
    description: "Сибирский кедр — материал с тонким хвойным ароматом, природными антибактериальными свойствами и тёплой янтарной текстурой. Идеален для жилых пространств: создаёт ощущение живого леса в доме. Особенно ценится в отделке спален, бань и детских комнат.",
    usedFor: "Стеновые и потолочные панели, вагонка, мебель для спальни, бани",
  },
];

export function FeaturedArtists() {
  return (
    <section id="artists" className="py-16 lg:py-24 bg-secondary">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mb-12">
          <h2 className="font-serif text-4xl lg:text-5xl font-light mb-4">Коллекция пород</h2>
          <p className="text-muted-foreground text-lg">Ценные и экзотические породы, с которыми мы работаем</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {woods.map((wood) => (
            <Dialog key={wood.name}>
              <DialogTrigger asChild>
                <Card className="group cursor-pointer overflow-hidden border-0 bg-card hover:shadow-lg transition-shadow">
                  <div className="aspect-[4/5] overflow-hidden">
                    <img
                      src={wood.portrait}
                      alt={`Текстура ${wood.name}`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-serif text-2xl font-light mb-1">{wood.name}</h3>
                    <p className="text-sm text-muted-foreground mb-1">
                      {wood.hardness} &bull; {wood.region}
                    </p>
                    <p className="text-sm font-medium text-foreground">{wood.origin}</p>
                    <p className="text-xs text-muted-foreground mt-3">Нажмите, чтобы узнать больше</p>
                  </div>
                </Card>
              </DialogTrigger>
              <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle className="font-serif text-3xl font-light">{wood.name}</DialogTitle>
                </DialogHeader>
                <div className="grid md:grid-cols-2 gap-6 mt-4">
                  <div className="aspect-[4/5] overflow-hidden rounded-lg">
                    <img
                      src={wood.portrait}
                      alt={`Текстура ${wood.name}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">
                        {wood.hardness} &bull; {wood.region}
                      </p>
                      <p className="text-base font-medium text-foreground mb-4">{wood.origin}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">О породе</h4>
                      <p className="text-sm leading-relaxed">{wood.description}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Применение</h4>
                      <p className="text-sm text-muted-foreground">{wood.usedFor}</p>
                    </div>
                  </div>
                </div>
                <div className="mt-6">
                  <img
                    src={wood.image}
                    alt={`Изделие из ${wood.name}`}
                    className="w-full aspect-[16/9] object-cover rounded-lg"
                  />
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  );
}
