import EventCard from "./EventCard";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroEvent from "@/assets/hero-event.jpg";
import musicEvent from "@/assets/music-event.jpg";
import workshopEvent from "@/assets/workshop-event.jpg";
import competitionEvent from "@/assets/competition-event.jpg";

const featuredEvents = [
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
];

const FeaturedEvents = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Event{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Unggulan
              </span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl">
              Jangan lewatkan event-event terpopuler dan paling diminati dari universitas terbaik Indonesia
            </p>
          </div>
          <Button variant="outline" className="mt-4 md:mt-0 hover:bg-primary hover:text-white">
            Lihat Semua Event
            <ArrowRight className="h-4 w-4 ml-2" />
          </Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredEvents.map((event) => (
            <EventCard key={event.id} {...event} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" className="bg-gradient-primary hover:opacity-90 text-white px-8">
            Jelajahi Lebih Banyak Event
            <ArrowRight className="h-5 w-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedEvents;