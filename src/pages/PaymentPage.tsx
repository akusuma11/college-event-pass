import { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { ArrowLeft, CreditCard, Smartphone, Building2, CheckCircle, Clock, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const PaymentPage = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [bookingData, setBookingData] = useState<any>(null);
  const [paymentMethod, setPaymentMethod] = useState('credit-card');
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState<'pending' | 'processing' | 'success' | 'failed'>('pending');

  const [cardData, setCardData] = useState({
    number: '',
    expiry: '',
    cvv: '',
    name: ''
  });

  useEffect(() => {
    const dataParam = searchParams.get('data');
    if (dataParam) {
      try {
        const data = JSON.parse(decodeURIComponent(dataParam));
        setBookingData(data);
      } catch (error) {
        console.error('Error parsing booking data:', error);
        navigate('/events');
      }
    } else {
      navigate('/events');
    }
  }, [searchParams, navigate]);

  const handlePayment = async () => {
    if (!bookingData) return;

    setIsProcessing(true);
    setPaymentStatus('processing');

    // Simulate payment processing
    setTimeout(() => {
      // For demo purposes, always succeed
      setPaymentStatus('success');
      setIsProcessing(false);
    }, 3000);
  };

  const handleInputChange = (field: string, value: string) => {
    setCardData(prev => ({ ...prev, [field]: value }));
  };

  const formatCardNumber = (value: string) => {
    return value.replace(/\s/g, '').replace(/(.{4})/g, '$1 ').trim();
  };

  const formatExpiry = (value: string) => {
    return value.replace(/\D/g, '').replace(/(\d{2})(\d)/, '$1/$2');
  };

  if (!bookingData) {
    return <div>Loading...</div>;
  }

  if (paymentStatus === 'success') {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-md mx-auto text-center">
            <Card>
              <CardContent className="pt-6">
                <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                <h1 className="text-2xl font-bold text-foreground mb-2">Pembayaran Berhasil!</h1>
                <p className="text-muted-foreground mb-6">
                  Terima kasih atas pembelian tiket Anda. E-ticket telah dikirim ke email yang terdaftar.
                </p>
                
                <div className="bg-accent/50 rounded-lg p-4 mb-6 text-left">
                  <h3 className="font-semibold mb-2">Detail Pesanan:</h3>
                  <div className="space-y-1 text-sm">
                    <div className="flex justify-between">
                      <span>Order ID:</span>
                      <span className="font-mono">#UNI{Date.now().toString().slice(-6)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Tiket:</span>
                      <span>{bookingData.quantity}x {bookingData.ticket === 'general' ? 'General Access' : 'VIP Access'}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Total:</span>
                      <span className="font-semibold">Rp {bookingData.total.toLocaleString('id-ID')}</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <Button className="w-full" onClick={() => navigate('/events')}>
                    Kembali ke Events
                  </Button>
                  <Button variant="outline" className="w-full">
                    Download E-Ticket
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <Button 
            variant="ghost" 
            onClick={() => navigate(-1)}
            className="mb-4"
            disabled={isProcessing}
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Kembali ke Pemesanan
          </Button>
          
          <h1 className="text-3xl font-heading font-bold text-foreground mb-2">
            Pembayaran
          </h1>
          <p className="text-muted-foreground">
            Pilih metode pembayaran dan selesaikan transaksi Anda
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Payment Form */}
          <div className="lg:col-span-2">
            {paymentStatus === 'processing' ? (
              <Card>
                <CardContent className="py-16 text-center">
                  <Clock className="h-12 w-12 text-primary mx-auto mb-4 animate-spin" />
                  <h3 className="text-xl font-semibold mb-2">Memproses Pembayaran...</h3>
                  <p className="text-muted-foreground">
                    Mohon tunggu, jangan tutup halaman ini.
                  </p>
                </CardContent>
              </Card>
            ) : (
              <Card>
                <CardHeader>
                  <CardTitle>Metode Pembayaran</CardTitle>
                </CardHeader>
                <CardContent>
                  <Tabs value={paymentMethod} onValueChange={setPaymentMethod}>
                    <TabsList className="grid w-full grid-cols-3">
                      <TabsTrigger value="credit-card">Kartu Kredit</TabsTrigger>
                      <TabsTrigger value="virtual-account">Virtual Account</TabsTrigger>
                      <TabsTrigger value="e-wallet">E-Wallet</TabsTrigger>
                    </TabsList>

                    <TabsContent value="credit-card" className="space-y-4">
                      <div className="grid gap-4">
                        <div>
                          <Label htmlFor="cardNumber">Nomor Kartu</Label>
                          <Input
                            id="cardNumber"
                            placeholder="1234 5678 9012 3456"
                            value={cardData.number}
                            onChange={(e) => handleInputChange('number', formatCardNumber(e.target.value))}
                            maxLength={19}
                          />
                        </div>
                        
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="expiry">Tanggal Kedaluwarsa</Label>
                            <Input
                              id="expiry"
                              placeholder="MM/YY"
                              value={cardData.expiry}
                              onChange={(e) => handleInputChange('expiry', formatExpiry(e.target.value))}
                              maxLength={5}
                            />
                          </div>
                          <div>
                            <Label htmlFor="cvv">CVV</Label>
                            <Input
                              id="cvv"
                              placeholder="123"
                              value={cardData.cvv}
                              onChange={(e) => handleInputChange('cvv', e.target.value.replace(/\D/g, ''))}
                              maxLength={4}
                            />
                          </div>
                        </div>

                        <div>
                          <Label htmlFor="cardName">Nama Pemegang Kartu</Label>
                          <Input
                            id="cardName"
                            placeholder="JOHN DOE"
                            value={cardData.name}
                            onChange={(e) => handleInputChange('name', e.target.value.toUpperCase())}
                          />
                        </div>
                      </div>

                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CreditCard className="h-4 w-4" />
                        <span>Visa, Mastercard, JCB diterima</span>
                      </div>
                    </TabsContent>

                    <TabsContent value="virtual-account" className="space-y-4">
                      <RadioGroup defaultValue="bca">
                        <div className="space-y-3">
                          <div className="flex items-center space-x-2 p-3 border rounded-lg">
                            <RadioGroupItem value="bca" id="bca" />
                            <Label htmlFor="bca" className="flex items-center gap-3 cursor-pointer flex-1">
                              <Building2 className="h-5 w-5" />
                              <div>
                                <div className="font-medium">BCA Virtual Account</div>
                                <div className="text-sm text-muted-foreground">Gratis biaya admin</div>
                              </div>
                            </Label>
                          </div>
                          
                          <div className="flex items-center space-x-2 p-3 border rounded-lg">
                            <RadioGroupItem value="mandiri" id="mandiri" />
                            <Label htmlFor="mandiri" className="flex items-center gap-3 cursor-pointer flex-1">
                              <Building2 className="h-5 w-5" />
                              <div>
                                <div className="font-medium">Mandiri Virtual Account</div>
                                <div className="text-sm text-muted-foreground">Gratis biaya admin</div>
                              </div>
                            </Label>
                          </div>

                          <div className="flex items-center space-x-2 p-3 border rounded-lg">
                            <RadioGroupItem value="bni" id="bni" />
                            <Label htmlFor="bni" className="flex items-center gap-3 cursor-pointer flex-1">
                              <Building2 className="h-5 w-5" />
                              <div>
                                <div className="font-medium">BNI Virtual Account</div>
                                <div className="text-sm text-muted-foreground">Gratis biaya admin</div>
                              </div>
                            </Label>
                          </div>
                        </div>
                      </RadioGroup>
                    </TabsContent>

                    <TabsContent value="e-wallet" className="space-y-4">
                      <RadioGroup defaultValue="gopay">
                        <div className="space-y-3">
                          <div className="flex items-center space-x-2 p-3 border rounded-lg">
                            <RadioGroupItem value="gopay" id="gopay" />
                            <Label htmlFor="gopay" className="flex items-center gap-3 cursor-pointer flex-1">
                              <Smartphone className="h-5 w-5" />
                              <div>
                                <div className="font-medium">GoPay</div>
                                <div className="text-sm text-muted-foreground">Bayar dengan saldo GoPay</div>
                              </div>
                            </Label>
                          </div>
                          
                          <div className="flex items-center space-x-2 p-3 border rounded-lg">
                            <RadioGroupItem value="ovo" id="ovo" />
                            <Label htmlFor="ovo" className="flex items-center gap-3 cursor-pointer flex-1">
                              <Smartphone className="h-5 w-5" />
                              <div>
                                <div className="font-medium">OVO</div>
                                <div className="text-sm text-muted-foreground">Bayar dengan saldo OVO</div>
                              </div>
                            </Label>
                          </div>

                          <div className="flex items-center space-x-2 p-3 border rounded-lg">
                            <RadioGroupItem value="dana" id="dana" />
                            <Label htmlFor="dana" className="flex items-center gap-3 cursor-pointer flex-1">
                              <Smartphone className="h-5 w-5" />
                              <div>
                                <div className="font-medium">DANA</div>
                                <div className="text-sm text-muted-foreground">Bayar dengan saldo DANA</div>
                              </div>
                            </Label>
                          </div>
                        </div>
                      </RadioGroup>
                    </TabsContent>
                  </Tabs>

                  <div className="mt-6 p-4 bg-accent/50 rounded-lg">
                    <div className="flex items-start gap-3">
                      <AlertCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <div className="text-sm">
                        <div className="font-medium mb-1">Informasi Penting:</div>
                        <ul className="text-muted-foreground space-y-1">
                          <li>• Pembayaran akan diproses secara otomatis</li>
                          <li>• E-ticket akan dikirim ke email yang terdaftar</li>
                          <li>• Simpan e-ticket untuk check-in di lokasi event</li>
                          <li>• Hubungi customer service jika ada kendala</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle>Ringkasan Pembayaran</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div>
                    <h4 className="font-medium">Data Peserta</h4>
                    <div className="text-sm text-muted-foreground">
                      <p>{bookingData.attendee.fullName}</p>
                      <p>{bookingData.attendee.email}</p>
                      <p>{bookingData.attendee.phone}</p>
                    </div>
                  </div>

                  <Separator />

                  <div>
                    <h4 className="font-medium mb-2">Detail Tiket</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>{bookingData.ticket === 'general' ? 'General Access' : 'VIP Access'}</span>
                        <span>×{bookingData.quantity}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Subtotal</span>
                        <span>Rp {bookingData.subtotal.toLocaleString('id-ID')}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Biaya layanan</span>
                        <span>Rp {bookingData.serviceFee.toLocaleString('id-ID')}</span>
                      </div>
                    </div>
                  </div>

                  <Separator />

                  <div className="flex justify-between items-center font-semibold text-lg">
                    <span>Total Pembayaran</span>
                    <span className="text-primary">Rp {bookingData.total.toLocaleString('id-ID')}</span>
                  </div>
                </div>

                <Button 
                  className="w-full bg-gradient-primary hover:opacity-90 text-white font-semibold py-3"
                  onClick={handlePayment}
                  disabled={isProcessing || paymentStatus === 'processing'}
                >
                  {isProcessing ? 'Memproses...' : 'Bayar Sekarang'}
                </Button>

                <div className="text-center text-xs text-muted-foreground space-y-1">
                  <p>🔒 Transaksi dienkripsi dengan SSL 256-bit</p>
                  <p>💳 Data kartu tidak disimpan di server kami</p>
                  <p>⚡ Konfirmasi pembayaran real-time</p>
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

export default PaymentPage;