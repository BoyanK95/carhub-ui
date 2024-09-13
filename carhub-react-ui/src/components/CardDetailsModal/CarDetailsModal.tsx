import { Car } from "@/types";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "../ui/dialog";
import { Calendar, CarFront, Fuel, Gauge } from "lucide-react";

interface CarDetailsModalProps {
  car: Car;
  isOpen: boolean;
  onClose: () => void;
}

export function CarDetailsModal({
  car,
  isOpen,
  onClose,
}: CarDetailsModalProps) {
  if (!car)
    return <h1 className="font-bold text-lg">You don't have any cars!</h1>;

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
