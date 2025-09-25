import { useState } from "react";
import { Filter, Search, SlidersHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import EventCard from "@/components/EventCard";
import heroEvent from "@/assets/hero-event.jpg";
import musicEvent from "@/assets/music-event.jpg";
import workshopEvent from "@/assets/workshop-event.jpg";
import competitionEvent from "@/assets/competition-event.jpg";

const allEvents = [
  {
    id: "1",
    title: "UGM Integrated Career Days - Career, Scholarship, and Internship Expo",
    university: "Universitas Gadjah Mada",
    date: "3-4 November 2024",
    location: "Balairung UGM, Yogyakarta",
    category: "Career Fair",
    price: "Mulai Rp 20.000",
    image: heroEvent,
    rating: 4.9,
    attendees: 850,
    isPopular: true,
  },
  {
    id: "2",
    title: "ITB Tech Summit 2024: Future of AI and Machine Learning",
    university: "Institut Teknologi Bandung",
    date: "15 November 2024",
    location: "Aula Barat ITB, Bandung",
    category: "Seminar",
    price: "Rp 50.000",
    image: workshopEvent,
    rating: 4.8,
    attendees: 650,
  },
  {
    id: "3",
    title: "UI Music Festival 2024: Harmonizing Campus Culture",
    university: "Universitas Indonesia",
    date: "20-21 November 2024",
    location: "Lapangan UI, Depok",
    category: "Event Musik",
    price: "Rp 150.000",
    image: musicEvent,
    rating: 4.7,
    attendees: 1200,
    isPopular: true,
  },
  {
    id: "4",
    title: "ITS Innovation Challenge: Smart City Solutions Hackathon",
    university: "Institut Teknologi Sepuluh Nopember",
    date: "25-27 November 2024",
    location: "ITS Surabaya",
    category: "Kompetisi",
    price: "Rp 100.000",
    image: competitionEvent,
    rating: 4.8,
    attendees: 320,
  },
  {
    id: "5",
    title: "Unpad International Conference on Sustainable Development",
    university: "Universitas Padjadjaran",
    date: "1-2 Desember 2024",
    location: "Jatinangor Campus",
    category: "Konferensi",
    price: "Rp 200.000",
    image: heroEvent,
    rating: 4.9,
    attendees: 480,
  },
  {
    id: "6",
    title: "UNS Entrepreneurship Workshop: Building Digital Startups",
    university: "Universitas Sebelas Maret",
    date: "5 Desember 2024",
    location: "UNS Solo",
    category: "Workshop",
    price: "Rp 75.000",
    image: workshopEvent,
    rating: 4.6,
    attendees: 150,
  },
  // Add more events...
];

const Events = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [priceRange, setPriceRange] = useState("");

  const categories = ["Seminar", "Workshop", "Kompetisi", "Event Musik", "Konferensi", "Career Fair"];
  const cities = ["Jakarta", "Bandung", "Yogyakarta", "Surabaya", "Solo", "Depok"];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-primary py-16">
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Jelajahi Event Kampus
          </h1>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Temukan dan ikuti event-event menarik dari universitas terbaik di seluruh Indonesia
          </p>
          
          {/* Enhanced Search */}
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 max-w-5xl mx-auto">
            <div className="grid md:grid-cols-5 gap-4">
              <div className="relative md:col-span-2">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
                <Input
                  placeholder="Cari event, universitas..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 h-12 border-0 bg-background/50"
                />
              </div>
              
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="h-12 border-0 bg-background/50">
                  <SelectValue placeholder="Kategori" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              
              <Select value={selectedCity} onValueChange={setSelectedCity}>
                <SelectTrigger className="h-12 border-0 bg-background/50">
                  <SelectValue placeholder="Kota" />
                </SelectTrigger>
                <SelectContent>
                  {cities.map((city) => (
                    <SelectItem key={city} value={city}>
                      {city}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              
              <Button className="h-12 bg-gradient-primary hover:opacity-90">
                <Filter className="h-4 w-4 mr-2" />
                Filter
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Filters & Results */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          {/* Active Filters */}
          <div className="flex flex-wrap gap-2 mb-6">
            {selectedCategory && (
              <Badge variant="secondary" className="px-3 py-1">
                {selectedCategory}
                <button
                  onClick={() => setSelectedCategory("")}
                  className="ml-2 text-muted-foreground hover:text-foreground"
                >
                  ×
                </button>
              </Badge>
            )}
            {selectedCity && (
              <Badge variant="secondary" className="px-3 py-1">
                {selectedCity}
                <button
                  onClick={() => setSelectedCity("")}
                  className="ml-2 text-muted-foreground hover:text-foreground"
                >
                  ×
                </button>
              </Badge>
            )}
          </div>

          {/* Sort & View Options */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
            <div>
              <h2 className="text-2xl font-semibold text-foreground">
                Menampilkan {allEvents.length} event
              </h2>
              <p className="text-muted-foreground">Event kampus terbaik untuk Anda</p>
            </div>
            
            <div className="flex gap-4">
              <Select defaultValue="relevant">
                <SelectTrigger className="w-48">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="relevant">Paling Relevan</SelectItem>
                  <SelectItem value="date">Tanggal Terdekat</SelectItem>
                  <SelectItem value="price-low">Harga Terendah</SelectItem>
                  <SelectItem value="price-high">Harga Tertinggi</SelectItem>
                  <SelectItem value="popular">Paling Popular</SelectItem>
                </SelectContent>
              </Select>
              
              <Button variant="outline" size="sm">
                <SlidersHorizontal className="h-4 w-4 mr-2" />
                More Filters
              </Button>
            </div>
          </div>

          {/* Event Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allEvents.map((event) => (
              <EventCard key={event.id} {...event} />
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <Button variant="outline" size="lg" className="px-8">
              Muat Lebih Banyak Event
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Events;