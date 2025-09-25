import { 
  GraduationCap, 
  Music, 
  Users, 
  Trophy, 
  Presentation, 
  Monitor, 
  Calendar,
  Gamepad2 
} from "lucide-react";

const categories = [
  {
    id: "seminar",
    name: "Seminar",
    icon: Presentation,
    count: "120+ Event",
    color: "bg-blue-100 text-blue-600",
  },
  {
    id: "webinar",
    name: "Webinar",
    icon: Monitor,
    count: "85+ Event",
    color: "bg-green-100 text-green-600",
  },
  {
    id: "workshop",
    name: "Workshop",
    icon: Users,
    count: "95+ Event",
    color: "bg-purple-100 text-purple-600",
  },
  {
    id: "kompetisi",
    name: "Kompetisi",
    icon: Trophy,
    count: "60+ Event",
    color: "bg-orange-100 text-orange-600",
  },
  {
    id: "musik",
    name: "Event Musik",
    icon: Music,
    count: "45+ Event",
    color: "bg-pink-100 text-pink-600",
  },
  {
    id: "konferensi",
    name: "Konferensi",
    icon: GraduationCap,
    count: "75+ Event",
    color: "bg-indigo-100 text-indigo-600",
  },
  {
    id: "celebration",
    name: "Annual Celebration",
    icon: Calendar,
    count: "30+ Event",
    color: "bg-yellow-100 text-yellow-600",
  },
  {
    id: "games",
    name: "Games & E-Sport",
    icon: Gamepad2,
    count: "25+ Event",
    color: "bg-red-100 text-red-600",
  },
];

const CategoryGrid = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-accent/30 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Jelajahi Berdasarkan{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Kategori
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Temukan event yang sesuai dengan minat dan kebutuhan Anda dari berbagai kategori acara kampus
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <div
                key={category.id}
                className="group cursor-pointer"
              >
                <div className="bg-card rounded-xl p-6 text-center transition-all duration-300 hover:shadow-card hover:-translate-y-2 border hover:border-primary/20">
                  <div className={`mx-auto w-16 h-16 rounded-full flex items-center justify-center mb-4 ${category.color} group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="h-8 w-8" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {category.count}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CategoryGrid;