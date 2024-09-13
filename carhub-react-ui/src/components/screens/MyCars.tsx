import { useState } from "react";
import { Car } from "@/types";
import { CarCard } from "../CarCard/CarCard";
import { cars } from "@/dummyData/cars";
import { CarDetailsModal } from "../CardDetailsModal/CarDetailsModal";

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
