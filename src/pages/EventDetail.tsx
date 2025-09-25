import { Calendar, MapPin, Users, Clock, Star, Share2, Heart, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import heroEvent from "@/assets/hero-event.jpg";

const EventDetail = () => {
  const event = {
    title: "UGM Integrated Career Days - Career, Scholarship, and Internship Expo",
    university: "Universitas Gadjah Mada",
    date: "3-4 November 2024",
    time: "08:00 - 17:00 WIB",
    location: "Balairung UGM, Yogyakarta",
    category: "Career Fair",
    image: heroEvent,
    rating: 4.9,
    attendees: 850,
    price: {
      general: 20000,
      vip: 100000
    },
    description: "Event terbesar UGM untuk menghubungkan mahasiswa dengan perusahaan terkemuka di Indonesia. Dapatkan kesempatan emas untuk menemukan karir impian, beasiswa, dan program magang yang sesuai dengan passion Anda.",
    highlights: [
      "150+ perusahaan ternama berpartisipasi",
      "Workshop CV dan interview skills gratis",
      "Session talk dengan CEO & industry leaders",
      "On-spot interview dengan HR manager",
      "Networking session dengan alumni sukses",
      "Doorprize menarik senilai jutaan rupiah"
    ],
    agenda: [
      {
        time: "08:00 - 09:00",
        activity: "Registrasi & Welcome Coffee",
        location: "Lobby Balairung"
      },
      {
        time: "09:00 - 10:30",
        activity: "Opening Ceremony & Keynote Speech",
        location: "Main Hall",
        speaker: "Nadiem Makarim - Menteri Pendidikan"
      },
      {
        time: "10:30 - 12:00",
        activity: "Job Fair & Company Booths",
        location: "Exhibition Area"
      },
      {
        time: "13:00 - 14:30",
        activity: "Workshop: CV Writing & Interview Skills",
        location: "Workshop Room A & B"
      },
      {
        time: "14:30 - 16:00",
        activity: "Panel Discussion: Future of Work",
        location: "Main Hall"
      },
      {
        time: "16:00 - 17:00",
        activity: "Networking Session & Closing",
        location: "Networking Lounge"
      }
    ],
    speakers: [
      {
        name: "Nadiem Makarim",
        title: "Menteri Pendidikan, Kebudayaan, Riset dan Teknologi",
        company: "Kemendikbudristek",
        image: "/api/placeholder/100/100"
      },
      {
        name: "William Tanuwijaya",
        title: "CEO & Co-founder",
        company: "Tokopedia",
        image: "/api/placeholder/100/100"
      },
      {
        name: "Shinta Kamdani",
        title: "CEO",
        company: "Sintesa Group",
        image: "/api/placeholder/100/100"
      }
    ],
    organizer: {
      name: "BEM KM UGM",
      contact: "bem@ugm.ac.id",
      phone: "+62 274 555 123"
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Image */}
      <section className="relative h-96 overflow-hidden">
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute top-4 left-4">
          <Badge className="bg-primary text-white">
            {event.category}
          </Badge>
        </div>
        <div className="absolute top-4 right-4 flex gap-2">
          <Button variant="ghost" size="sm" className="bg-white/20 text-white hover:bg-white/30">
            <Share2 className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="sm" className="bg-white/20 text-white hover:bg-white/30">
            <Heart className="h-4 w-4" />
          </Button>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h1 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
                {event.title}
              </h1>
              
              <div className="flex flex-wrap items-center gap-4 text-muted-foreground mb-4">
                <div className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-primary" />
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-primary" />
                  <span>{event.time}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span>{event.location}</span>
                </div>
              </div>

              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center gap-2">
                  <Star className="h-5 w-5 text-yellow-400 fill-current" />
                  <span className="font-semibold">{event.rating}</span>
                  <span className="text-muted-foreground">(128 reviews)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-primary" />
                  <span className="font-semibold">{event.attendees}+ attending</span>
                </div>
              </div>

              <p className="text-lg text-foreground leading-relaxed mb-8">
                {event.description}
              </p>
            </div>

            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="agenda">Agenda</TabsTrigger>
                <TabsTrigger value="speakers">Speakers</TabsTrigger>
                <TabsTrigger value="location">Lokasi</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Highlight Event</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {event.highlights.map((highlight, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Penyelenggara</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <p className="font-semibold">{event.organizer.name}</p>
                      <p className="text-muted-foreground">{event.university}</p>
                      <p className="text-sm text-muted-foreground">
                        Email: {event.organizer.contact}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Phone: {event.organizer.phone}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="agenda">
                <Card>
                  <CardHeader>
                    <CardTitle>Rundown Acara</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {event.agenda.map((item, index) => (
                        <div key={index} className="border-l-2 border-primary/20 pl-4 pb-4">
                          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                            <span className="font-semibold text-primary">{item.time}</span>
                            <span className="text-sm text-muted-foreground">{item.location}</span>
                          </div>
                          <h4 className="font-medium text-foreground mb-1">{item.activity}</h4>
                          {item.speaker && (
                            <p className="text-sm text-muted-foreground">{item.speaker}</p>
                          )}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="speakers">
                <div className="grid md:grid-cols-2 gap-6">
                  {event.speakers.map((speaker, index) => (
                    <Card key={index}>
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold text-xl">
                            {speaker.name.charAt(0)}
                          </div>
                          <div>
                            <h3 className="font-semibold text-lg">{speaker.name}</h3>
                            <p className="text-primary font-medium">{speaker.title}</p>
                            <p className="text-muted-foreground">{speaker.company}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="location">
                <Card>
                  <CardHeader>
                    <CardTitle>Lokasi & Akses</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-2">Alamat Lengkap</h4>
                        <p className="text-muted-foreground">
                          Balairung Universitas Gadjah Mada<br />
                          Jl. Sosio Yustisia, Bulaksumur, Caturtunggal<br />
                          Kec. Depok, Kabupaten Sleman<br />
                          Daerah Istimewa Yogyakarta 55281
                        </p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold mb-2">Akses Transportasi</h4>
                        <ul className="space-y-1 text-muted-foreground">
                          <li>• Bus Trans Jogja: Halte UGM (Jalur 1A, 1B)</li>
                          <li>• Ojek Online: Tersedia Gojek & Grab</li>
                          <li>• Parkir: Area parkir luas tersedia</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar - Ticket Purchase */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle>Pilih Tiket</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* General Ticket */}
                <div className="border rounded-lg p-4 hover:border-primary transition-colors cursor-pointer">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h4 className="font-semibold">General Access</h4>
                      <p className="text-sm text-muted-foreground">Akses ke semua area event</p>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-primary">
                        Rp {event.price.general.toLocaleString('id-ID')}
                      </div>
                    </div>
                  </div>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Akses job fair & workshop</li>
                    <li>• Welcome kit & sertifikat</li>
                    <li>• Lunch & coffee break</li>
                  </ul>
                </div>

                {/* VIP Ticket */}
                <div className="border-2 border-primary rounded-lg p-4 relative">
                  <Badge className="absolute -top-2 left-4 bg-primary text-white">
                    RECOMMENDED
                  </Badge>
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h4 className="font-semibold">VIP Access</h4>
                      <p className="text-sm text-muted-foreground">Akses premium + exclusive session</p>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-primary">
                        Rp {event.price.vip.toLocaleString('id-ID')}
                      </div>
                    </div>
                  </div>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Semua benefit General Access</li>
                    <li>• VIP networking session</li>
                    <li>• Meet & greet with speakers</li>
                    <li>• Priority interview access</li>
                    <li>• Exclusive goodie bag</li>
                  </ul>
                </div>

                <Separator />

                <div className="space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <span>Subtotal</span>
                    <span>Rp 100.000</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span>Service fee</span>
                    <span>Rp 5.000</span>
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between font-semibold">
                    <span>Total</span>
                    <span className="text-primary">Rp 105.000</span>
                  </div>
                </div>

                <Button className="w-full bg-gradient-primary hover:opacity-90 text-white font-semibold py-3">
                  Beli Tiket Sekarang
                </Button>

                <div className="text-center text-sm text-muted-foreground">
                  <p>💳 Pembayaran aman dengan SSL</p>
                  <p>🎫 E-ticket dikirim via email</p>
                  <p>🔄 Refund policy berlaku</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default EventDetail;