import { useState } from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
// import { ScrollArea } from "@/components/ui/scroll-area";
import { CarFront, Calendar, Fuel, Gauge } from "lucide-react";
import { Cars } from "@/types";
import { Car } from "@/types";

// Mock data for cars TODO: replace with actual data when BE is ready
const cars: Cars = [
  {
    id: 1,
    make: "Toyota",
    model: "Camry",
    year: 2020,
    color: "Silver",
    fuelType: "Gasoline",
    mileage: 15000,
  },
  {
    id: 2,
    make: "Honda",
    model: "Civic",
    year: 2019,
    color: "Blue",
    fuelType: "Gasoline",
    mileage: 22000,
  },
  {
    id: 3,
    make: "Tesla",
    model: "Model 3",
    year: 2021,
    color: "Red",
    fuelType: "Electric",
    mileage: 8000,
  },
  {
    id: 4,
    make: "Ford",
    model: "F-150",
    year: 2018,
    color: "Black",
    fuelType: "Diesel",
    mileage: 35000,
  },
];

function CarCard({ car, onClick }: { car: Car; onClick: (car: Car) => void }) {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>
          {car.make} {car.model}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
          <Calendar className="h-4 w-4" />
          <span>{car.year}</span>
        </div>
      </CardContent>
      <CardFooter>
        <Button onClick={() => onClick(car)}>View Details</Button>
      </CardFooter>
    </Card>
  );
}
function CarDetailsModal({
  car,
  isOpen,
  onClose,
}: {
  car: Car;
  isOpen: boolean;
  onClose: () => void;
}) {
  if (!car) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>
            {car.make} {car.model}
          </DialogTitle>
          <DialogDescription>Year: {car.year}</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="flex items-center space-x-2">
            <Calendar className="h-4 w-4 text-muted-foreground" />
            <span>Year: {car.year}</span>
          </div>
          <div className="flex items-center space-x-2">
            <CarFront className="h-4 w-4 text-muted-foreground" />
            <span>Color: {car.color}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Fuel className="h-4 w-4 text-muted-foreground" />
            <span>Fuel Type: {car.fuelType}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Gauge className="h-4 w-4 text-muted-foreground" />
            <span>Mileage: {car.mileage} miles</span>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default function MyCars() {
  const [selectedCar, setSelectedCar] = useState<Car | null>(null);

  const handleCarClick = (car: Car) => {
    setSelectedCar(car);
  };

  const handleCloseModal = () => {
    setSelectedCar(null);
  };

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">My Cars</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cars.map((car) => (
          <CarCard key={car.id} car={car} onClick={handleCarClick} />
        ))}
      </div>
      {selectedCar && (
        <CarDetailsModal
          car={selectedCar}
          isOpen={!!selectedCar}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
}
