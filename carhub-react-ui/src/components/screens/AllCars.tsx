import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { CarIcon, SearchIcon, FilterIcon } from "lucide-react";

// Placeholder data for cars TODO: Replace with actual data
const cars = [
  {
    id: 1,
    name: "Tesla Model 3",
    price: 41990,
    type: "Electric",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 2,
    name: "Toyota Camry",
    price: 25295,
    type: "Gasoline",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 3,
    name: "Ford Mustang",
    price: 27470,
    type: "Gasoline",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 4,
    name: "Honda CR-V",
    price: 26400,
    type: "Hybrid",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 5,
    name: "Chevrolet Bolt",
    price: 31995,
    type: "Electric",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 6,
    name: "BMW 3 Series",
    price: 41450,
    type: "Gasoline",
    image: "/placeholder.svg?height=200&width=300",
  },
  // Add more cars as needed
];

export default function AllCars() {
  const [searchTerm, setSearchTerm] = useState("");
  const [priceRange, setPriceRange] = useState([0, 100000]);
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);

  const filteredCars = cars.filter(
    (car) =>
      car.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      car.price >= priceRange[0] &&
      car.price <= priceRange[1] &&
      (selectedTypes.length === 0 || selectedTypes.includes(car.type))
  );

  return (
    <div className="container mx-auto p-4">
      <header className="mb-8">
        <h1 className="text-3xl font-bold mb-4">All Cars</h1>
        <div className="flex items-center">
          <Input
            type="text"
            placeholder="Search cars..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="mr-2"
          />
          <Button variant="outline" size="icon">
            <SearchIcon className="h-4 w-4" />
          </Button>
        </div>
      </header>

      <div className="flex flex-col md:flex-row gap-8">
        <aside className="w-full md:w-64">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <FilterIcon className="mr-2" />
                Filters
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="mb-4">
                <h3 className="font-semibold mb-2">Price Range</h3>
                <Slider
                  min={0}
                  max={100000}
                  step={1000}
                  value={priceRange}
                  onValueChange={setPriceRange}
                />
                <div className="flex justify-between mt-2">
                  <span>${priceRange[0]}</span>
                  <span>${priceRange[1]}</span>
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Car Type</h3>
                {["Electric", "Gasoline", "Hybrid"].map((type) => (
                  <div key={type} className="flex items-center space-x-2 mb-2">
                    <Checkbox
                      id={type}
                      checked={selectedTypes.includes(type)}
                      onCheckedChange={(checked) => {
                        setSelectedTypes(
                          checked
                            ? [...selectedTypes, type]
                            : selectedTypes.filter((t) => t !== type)
                        );
                      }}
                    />
                    <label htmlFor={type}>{type}</label>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </aside>

        <main className="flex-1">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredCars.map((car) => (
              <Card key={car.id}>
                <CardHeader>
                  <CardTitle>{car.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <img
                    src={car.image}
                    alt={car.name}
                    className="w-full h-40 object-cover mb-4"
                  />
                  <p className="text-2xl font-bold">
                    ${car.price.toLocaleString()}
                  </p>
                  <p className="text-muted-foreground">{car.type}</p>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">
                    <CarIcon className="mr-2 h-4 w-4" /> View Details
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </main>
      </div>

      <footer className="mt-8 flex justify-center">
        <Button variant="outline" className="mx-1">
          Previous
        </Button>
        <Button variant="outline" className="mx-1">
          1
        </Button>
        <Button variant="outline" className="mx-1">
          2
        </Button>
        <Button variant="outline" className="mx-1">
          3
        </Button>
        <Button variant="outline" className="mx-1">
          Next
        </Button>
      </footer>
    </div>
  );
}
