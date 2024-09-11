import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Car } from "@/types";
import { Calendar } from "lucide-react";
import { Button } from "../ui/button";

export function CarCard({
  car,
  onClick,
}: {
  car: Car;
  onClick: (car: Car) => void;
}) {
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
