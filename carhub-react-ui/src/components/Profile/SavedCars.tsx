import React from "react";
import {
  Card,
  CardContent,
  //   CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";
import { CarIcon } from "lucide-react";
import { cars } from "@/dummyData/cars";

const SavedCars = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Saved Cars</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-4">
          {cars.map((car) => (
            <li key={car.id} className="flex items-center space-x-4">
              <img
                src={car.imageUrl}
                alt={car.make}
                className="w-16 h-12 object-cover rounded"
              />
              <span>{car.make}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button variant="outline" className="w-full">
          <CarIcon className="mr-2 h-4 w-4" /> View All Saved Cars
        </Button>
      </CardFooter>
    </Card>
  );
};

export default SavedCars;
