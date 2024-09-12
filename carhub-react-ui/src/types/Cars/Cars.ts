export interface Car {
  id: string | number;
  make: string;
  model: string;
  color: string;
  year: number;
  fuelType: string;
  mileage: number;
  imageUrl?: string;
}

export type Cars = Car[];
  