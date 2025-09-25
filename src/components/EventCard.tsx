import { Calendar, MapPin, Users, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface EventCardProps {
  id: string;
  title: string;
  university: string;
  date: string;
  location: string;
  category: string;
  price: string;
  image: string;
  rating?: number;
  attendees?: number;
  isPopular?: boolean;
}

const EventCard = ({
  title,
  university,
  date,
  location,
  category,
  price,
  image,
  rating = 4.8,
  attendees = 120,
  isPopular = false,
}: EventCardProps) => {
  return (
    <Card className="group cursor-pointer overflow-hidden transition-all duration-300 hover:shadow-card hover:-translate-y-1 bg-gradient-card border-0">
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute top-3 left-3 flex gap-2">
          <Badge variant="secondary" className="bg-background/90 text-foreground">
            {category}
          </Badge>
          {isPopular && (
            <Badge className="bg-gradient-primary text-white">
              <Star className="h-3 w-3 mr-1" />
              Popular
            </Badge>
          )}
        </div>
        <div className="absolute top-3 right-3">
          <div className="bg-background/90 backdrop-blur-sm rounded-md px-2 py-1 text-sm font-semibold text-primary">
            {price}
          </div>
        </div>
      </div>

      <CardContent className="p-4">
        <div className="space-y-3">
          <div>
            <h3 className="font-semibold text-lg line-clamp-2 group-hover:text-primary transition-colors">
              {title}
            </h3>
            <p className="text-sm text-muted-foreground font-medium">{university}</p>
          </div>

          <div className="space-y-2 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4 text-primary" />
              <span>{date}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-primary" />
              <span className="line-clamp-1">{location}</span>
            </div>
          </div>

          <div className="flex items-center justify-between pt-2">
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Star className="h-4 w-4 text-yellow-400 fill-current" />
                <span>{rating}</span>
              </div>
              <div className="flex items-center gap-1">
                <Users className="h-4 w-4" />
                <span>{attendees}+</span>
              </div>
            </div>
            <Button size="sm" className="bg-gradient-primary hover:opacity-90">
              Lihat Detail
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default EventCard;