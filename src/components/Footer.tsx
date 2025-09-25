import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  return (
    <footer className="bg-foreground text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand & About */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-6">
              <div className="h-10 w-10 rounded-lg bg-gradient-primary flex items-center justify-center">
                <span className="text-white font-bold text-xl">U</span>
              </div>
              <span className="font-heading font-bold text-2xl text-white">
                UniEvents
              </span>
            </Link>
            <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
              Platform terpercaya untuk membeli tiket event kampus di seluruh Indonesia. 
              Temukan seminar, workshop, konser, dan acara akademik lainnya dengan mudah dan aman.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-300">
                <Mail className="h-5 w-5 text-primary" />
                <span>info@unievents.co.id</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <Phone className="h-5 w-5 text-primary" />
                <span>+62 21 1234 5678</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <MapPin className="h-5 w-5 text-primary" />
                <span>Jakarta, Indonesia</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-6 text-white">Tautan Cepat</h3>
            <div className="space-y-4">
              <Link to="/events" className="block text-gray-300 hover:text-primary transition-colors">
                Jelajahi Event
              </Link>
              <Link to="/categories" className="block text-gray-300 hover:text-primary transition-colors">
                Kategori
              </Link>
              <Link to="/universities" className="block text-gray-300 hover:text-primary transition-colors">
                Universitas
              </Link>
              <Link to="/organizer" className="block text-gray-300 hover:text-primary transition-colors">
                Untuk Penyelenggara
              </Link>
              <Link to="/help" className="block text-gray-300 hover:text-primary transition-colors">
                Pusat Bantuan
              </Link>
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-lg mb-6 text-white">Perusahaan</h3>
            <div className="space-y-4">
              <Link to="/about" className="block text-gray-300 hover:text-primary transition-colors">
                Tentang Kami
              </Link>
              <Link to="/careers" className="block text-gray-300 hover:text-primary transition-colors">
                Karir
              </Link>
              <Link to="/press" className="block text-gray-300 hover:text-primary transition-colors">
                Press Kit
              </Link>
              <Link to="/blog" className="block text-gray-300 hover:text-primary transition-colors">
                Blog
              </Link>
              <Link to="/contact" className="block text-gray-300 hover:text-primary transition-colors">
                Kontak
              </Link>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="max-w-md">
            <h3 className="font-semibold text-lg mb-4 text-white">
              Berlangganan Newsletter
            </h3>
            <p className="text-gray-300 mb-4">
              Dapatkan info event terbaru dan promo menarik langsung di inbox Anda
            </p>
            <div className="flex gap-2">
              <Input
                placeholder="Masukkan email Anda"
                className="bg-gray-800 border-gray-600 text-white placeholder:text-gray-400"
              />
              <Button className="bg-gradient-primary hover:opacity-90">
                Daftar
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-300 text-sm mb-4 md:mb-0">
            © 2024 UniEvents. Semua hak dilindungi.
          </div>
          
          <div className="flex items-center gap-6">
            <div className="flex gap-4">
              <Link to="/privacy" className="text-gray-300 hover:text-primary text-sm transition-colors">
                Kebijakan Privasi
              </Link>
              <Link to="/terms" className="text-gray-300 hover:text-primary text-sm transition-colors">
                Syarat & Ketentuan
              </Link>
            </div>
            
            <div className="flex gap-4">
              <Button variant="ghost" size="sm" className="text-gray-300 hover:text-primary p-2">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-300 hover:text-primary p-2">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-300 hover:text-primary p-2">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-300 hover:text-primary p-2">
                <Linkedin className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;