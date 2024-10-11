import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { CarIcon, BellIcon, LockIcon, UserIcon, StarIcon } from "lucide-react";

// Placeholder data
const user = {
  name: "John Doe",
  email: "john.doe@example.com",
  avatar: "/placeholder.svg?height=100&width=100",
  bio: "Car enthusiast and weekend racer. Always on the lookout for my next dream ride!",
};

const savedCars = [
  {
    id: 1,
    name: "Tesla Model S",
    image: "/placeholder.svg?height=100&width=150",
  },
  {
    id: 2,
    name: "Porsche 911",
    image: "/placeholder.svg?height=100&width=150",
  },
  {
    id: 3,
    name: "Ford Mustang GT",
    image: "/placeholder.svg?height=100&width=150",
  },
];

const activities = [
  { id: 1, action: "Viewed", car: "BMW M3", time: "2 hours ago" },
  { id: 2, action: "Saved", car: "Audi RS6 Avant", time: "1 day ago" },
  { id: 3, action: "Commented on", car: "Mercedes-AMG GT", time: "3 days ago" },
];

export default function Profile() {
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [bio, setBio] = useState(user.bio);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-8">My Profile</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>User Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center space-x-4">
              <Avatar className="w-20 h-20">
                <AvatarImage src={user.avatar} alt={user.name} />
                <AvatarFallback>
                  {user.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <div>
                <h2 className="text-2xl font-bold">{user.name}</h2>
                <p className="text-muted-foreground">{user.email}</p>
              </div>
            </div>
            <Textarea
              placeholder="Tell us about yourself"
              value={bio}
              onChange={(e) => setBio(e.target.value)}
            />
          </CardContent>
          <CardFooter>
            <Button>Update Profile</Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Saved Cars</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              {savedCars.map((car) => (
                <li key={car.id} className="flex items-center space-x-4">
                  <img
                    src={car.image}
                    alt={car.name}
                    className="w-16 h-12 object-cover rounded"
                  />
                  <span>{car.name}</span>
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

        <Card className="md:col-span-3">
          <CardHeader>
            <CardTitle>Account Settings</CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="general" className="w-full">
              <TabsList>
                <TabsTrigger value="general">General</TabsTrigger>
                <TabsTrigger value="notifications">Notifications</TabsTrigger>
                <TabsTrigger value="security">Security</TabsTrigger>
              </TabsList>
              <TabsContent value="general">
                <div className="space-y-4">
                  <div className="grid w-full items-center gap-1.5">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      type="text"
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="grid w-full items-center gap-1.5">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="notifications">
                <div className="space-y-4">
                  <h3 className="font-medium">Email Notifications</h3>
                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id="newCars"
                      className="form-checkbox"
                    />
                    <label htmlFor="newCars">
                      New cars matching your preferences
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id="priceDrops"
                      className="form-checkbox"
                    />
                    <label htmlFor="priceDrops">
                      Price drops on saved cars
                    </label>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="security">
                <div className="space-y-4">
                  <Button variant="outline">
                    <LockIcon className="mr-2 h-4 w-4" /> Change Password
                  </Button>
                  <Button variant="outline">
                    <UserIcon className="mr-2 h-4 w-4" /> Two-Factor
                    Authentication
                  </Button>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        <Card className="md:col-span-3">
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              {activities.map((activity) => (
                <li key={activity.id} className="flex items-center space-x-4">
                  <StarIcon className="h-5 w-5 text-yellow-500" />
                  <span>
                    <strong>{activity.action}</strong> {activity.car}
                  </span>
                  <span className="text-muted-foreground">{activity.time}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
