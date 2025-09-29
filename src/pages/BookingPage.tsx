import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Calendar, MapPin, Users, Clock, ArrowLeft, Plus, Minus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const BookingPage = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const ticketType = searchParams.get('ticket') || 'general';
  
  const [ticketQuantity, setTicketQuantity] = useState(1);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    university: '',
    faculty: '',
    studentId: '',
    emergencyContact: '',
    emergencyPhone: '',
    dietaryRestrictions: ''
  });

  const event = {
    title: "UGM Integrated Career Days - Career, Scholarship, and Internship Expo",
    university: "Universitas Gadjah Mada",
    date: "3-4 November 2024",
    time: "08:00 - 17:00 WIB",
    location: "Balairung UGM, Yogyakarta",
    category: "Career Fair",
    tickets: {
      general: {
        name: "General Access",
        price: 20000,
        description: "Akses ke semua area event",
        benefits: [
          "Akses job fair & workshop",
          "Welcome kit & sertifikat",
          "Lunch & coffee break"
        ]
      },
      vip: {
        name: "VIP Access", 
        price: 100000,
        description: "Akses premium + exclusive session",
        benefits: [
          "Semua benefit General Access",
          "VIP networking session",
          "Meet & greet with speakers",
          "Priority interview access",
          "Exclusive goodie bag"
        ]
      }
    }
  };

  const selectedTicket = event.tickets[ticketType as keyof typeof event.tickets];
  const subtotal = selectedTicket.price * ticketQuantity;
  const serviceFee = 5000;
  const total = subtotal + serviceFee;

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleQuantityChange = (change: number) => {
    const newQuantity = ticketQuantity + change;
    if (newQuantity >= 1 && newQuantity <= 5) {
      setTicketQuantity(newQuantity);
    }
  };

  const handleContinueToPayment = () => {
    // Validate required fields
    const requiredFields = ['fullName', 'email', 'phone'];
    const missingFields = requiredFields.filter(field => !formData[field as keyof typeof formData]);
    
    if (missingFields.length > 0) {
      alert('Mohon lengkapi data yang diperlukan');
      return;
    }

    // Navigate to payment with booking data
    const bookingData = {
      ticket: ticketType,
      quantity: ticketQuantity,
      subtotal,
      serviceFee,
      total,
      attendee: formData
    };
    
    navigate(`/payment?data=${encodeURIComponent(JSON.stringify(bookingData))}`);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <Button 
            variant="ghost" 
            onClick={() => navigate(-1)}
            className="mb-4"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Kembali ke Detail Event
          </Button>
          
          <h1 className="text-3xl font-heading font-bold text-foreground mb-2">
            Pemesanan Tiket
          </h1>
          <p className="text-muted-foreground">
            Lengkapi data berikut untuk melanjutkan pemesanan
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content - Booking Form */}
          <div className="lg:col-span-2 space-y-6">
            {/* Event Summary */}
            <Card>
              <CardHeader>
                <CardTitle>Detail Event</CardTitle>
              </CardHeader>
              <CardContent>
                <h3 className="font-semibold text-lg mb-4">{event.title}</h3>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-primary" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-primary" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-primary" />
                    <span>{event.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary">{event.category}</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Ticket Selection */}
            <Card>
              <CardHeader>
                <CardTitle>Pilihan Tiket</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="border rounded-lg p-4 bg-accent/50">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h4 className="font-semibold">{selectedTicket.name}</h4>
                      <p className="text-sm text-muted-foreground">{selectedTicket.description}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-primary">
                        Rp {selectedTicket.price.toLocaleString('id-ID')}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 mb-3">
                    <Label htmlFor="quantity">Jumlah tiket:</Label>
                    <div className="flex items-center gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleQuantityChange(-1)}
                        disabled={ticketQuantity <= 1}
                      >
                        <Minus className="h-4 w-4" />
                      </Button>
                      <span className="w-8 text-center">{ticketQuantity}</span>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleQuantityChange(1)}
                        disabled={ticketQuantity >= 5}
                      >
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>

                  <ul className="text-sm text-muted-foreground space-y-1">
                    {selectedTicket.benefits.map((benefit, index) => (
                      <li key={index}>• {benefit}</li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Personal Information */}
            <Card>
              <CardHeader>
                <CardTitle>Data Peserta</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="fullName">Nama Lengkap *</Label>
                    <Input
                      id="fullName"
                      value={formData.fullName}
                      onChange={(e) => handleInputChange('fullName', e.target.value)}
                      placeholder="Masukkan nama lengkap"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      placeholder="email@example.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="phone">Nomor Telepon *</Label>
                    <Input
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      placeholder="08xxxxxxxxx"
                    />
                  </div>
                  <div>
                    <Label htmlFor="university">Universitas</Label>
                    <Input
                      id="university"
                      value={formData.university}
                      onChange={(e) => handleInputChange('university', e.target.value)}
                      placeholder="Nama universitas"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="faculty">Fakultas</Label>
                    <Input
                      id="faculty"
                      value={formData.faculty}
                      onChange={(e) => handleInputChange('faculty', e.target.value)}
                      placeholder="Nama fakultas"
                    />
                  </div>
                  <div>
                    <Label htmlFor="studentId">NIM/NRP</Label>
                    <Input
                      id="studentId"
                      value={formData.studentId}
                      onChange={(e) => handleInputChange('studentId', e.target.value)}
                      placeholder="Nomor induk mahasiswa"
                    />
                  </div>
                </div>

                <Separator />

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="emergencyContact">Kontak Darurat</Label>
                    <Input
                      id="emergencyContact"
                      value={formData.emergencyContact}
                      onChange={(e) => handleInputChange('emergencyContact', e.target.value)}
                      placeholder="Nama kontak darurat"
                    />
                  </div>
                  <div>
                    <Label htmlFor="emergencyPhone">Nomor Kontak Darurat</Label>
                    <Input
                      id="emergencyPhone"
                      value={formData.emergencyPhone}
                      onChange={(e) => handleInputChange('emergencyPhone', e.target.value)}
                      placeholder="08xxxxxxxxx"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="dietaryRestrictions">Pantangan Makanan (Opsional)</Label>
                  <Input
                    id="dietaryRestrictions"
                    value={formData.dietaryRestrictions}
                    onChange={(e) => handleInputChange('dietaryRestrictions', e.target.value)}
                    placeholder="Vegetarian, halal, alergi, dll"
                  />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar - Order Summary */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle>Ringkasan Pesanan</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">{selectedTicket.name}</span>
                    <span className="text-sm">×{ticketQuantity}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Harga tiket</span>
                    <span className="text-sm">Rp {subtotal.toLocaleString('id-ID')}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Biaya layanan</span>
                    <span className="text-sm">Rp {serviceFee.toLocaleString('id-ID')}</span>
                  </div>
                  
                  <Separator />
                  
                  <div className="flex justify-between items-center font-semibold">
                    <span>Total Pembayaran</span>
                    <span className="text-primary text-lg">Rp {total.toLocaleString('id-ID')}</span>
                  </div>
                </div>

                <Button 
                  className="w-full bg-gradient-primary hover:opacity-90 text-white font-semibold py-3"
                  onClick={handleContinueToPayment}
                >
                  Lanjut ke Pembayaran
                </Button>

                <div className="text-center text-xs text-muted-foreground space-y-1">
                  <p>💳 Pembayaran aman dengan enkripsi SSL</p>
                  <p>🎫 E-ticket dikirim langsung ke email</p>
                  <p>🔄 Kebijakan refund berlaku</p>
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

export default BookingPage;