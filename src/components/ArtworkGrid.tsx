interface Artwork {
  title: string;
  artist: string;
  year: string;
  image: string;
}

const artworks: Artwork[] = [
  {
    title: "Панно «Амазония»",
    artist: "Порода: Зебрано",
    year: "Стеновая панель",
    image: "/abstract-colorful-painting-modern-art.jpg",
  },
  {
    title: "Инсталляция «Саванна»",
    artist: "Порода: Венге",
    year: "Потолочная панель",
    image: "/contemporary-sculpture-installation.jpg",
  },
  {
    title: "Столешница «Таига»",
    artist: "Порода: Кедр сибирский",
    year: "Мебель из массива",
    image: "/mixed-media-collage-art.jpg",
  },
  {
    title: "Панно «Экватор»",
    artist: "Порода: Тик бирманский",
    year: "Стеновая панель",
    image: "/fine-art-portrait-photography.jpg",
  },
  {
    title: "Пол «Терра»",
    artist: "Порода: Мербау",
    year: "Напольная панель",
    image: "/abstract-minimalist-painting.jpg",
  },
  {
    title: "Комод «Аруша»",
    artist: "Порода: Палисандр",
    year: "Мебель из шпона",
    image: "/digital-art-nature-inspired.jpg",
  },
];

export function ArtworkGrid() {
  return (
    <section id="works" className="py-16 lg:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mb-12">
          <h2 className="font-serif text-4xl lg:text-5xl font-light mb-4">Избранные работы</h2>
          <p className="text-muted-foreground text-lg">Проекты из нашего производственного портфолио</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {artworks.map((artwork, index) => (
            <div key={index} className="group cursor-pointer overflow-hidden bg-card">
              <div className="aspect-square overflow-hidden">
                <img
                  src={artwork.image}
                  alt={artwork.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="font-serif text-xl font-light mb-1">{artwork.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {artwork.artist} · {artwork.year}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
