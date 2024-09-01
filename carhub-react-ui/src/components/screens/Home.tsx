import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen w-full">
      <main className="flex-grow">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-black">
          <div className="container mx-auto px-4 md:px-6 max-w-7xl">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white">
                  Welcome to CarHub
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl">
                  Discover, share, and connect with car enthusiasts. Browse
                  through our extensive collection or showcase your own rides.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
              
                {/* <form className="flex space-x-2">
                TODO : Add search functionality
                  <Input
                    className="max-w-lg flex-1"
                    placeholder="Search cars..."
                    type="text"
                  />
                  <Button type="submit" variant="secondary">
                    <SearchIcon className="h-4 w-4" />
                    <span className="sr-only">Search</span>
                  </Button>
                </form> */}
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container mx-auto px-4 md:px-6 max-w-7xl">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-8">
              Explore Cars
            </h2>
            <Tabs defaultValue="all" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="all">All Cars</TabsTrigger>
                <TabsTrigger value="my">My Cars</TabsTrigger>
              </TabsList>
              <TabsContent value="all">
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                    <Card key={i} className="w-full">
                      <CardHeader>
                        <img
                          alt={`Car ${i}`}
                          className="aspect-video overflow-hidden rounded-lg object-cover"
                          height={200}
                          src={`/placeholder.svg?height=200&width=300`}
                          width={300}
                        />
                      </CardHeader>
                      <CardContent>
                        <CardTitle>Car Model {i}</CardTitle>
                        <p className="text-sm text-gray-500">
                          A brief description of the car.
                        </p>
                      </CardContent>
                      <CardFooter>
                        <Button variant="outline">View Details</Button>
                      </CardFooter>
                    </Card>
                  ))}                </div>
              </TabsContent>
              <TabsContent value="my">
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {[1, 2, 3].map((i) => (
                    <Card key={i}>
                      <CardHeader>
                        <img
                          alt={`My Car ${i}`}
                          className="aspect-video overflow-hidden rounded-lg object-cover"
                          height={200}
                          src={`/placeholder.svg?height=200&width=300`}
                          width={300}
                        />
                      </CardHeader>
                      <CardContent>
                        <CardTitle>My Car {i}</CardTitle>
                        <p className="text-sm text-gray-500">
                          Details about your personal car.
                        </p>
                      </CardContent>
                      <CardFooter>
                        <Button variant="outline">Edit Details</Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500">
          © 2024 CarHub. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link to={'/#'} className="text-xs hover:underline underline-offset-4" >
            Terms of Service
          </Link>
          <Link to={'/#'} className="text-xs hover:underline underline-offset-4" >
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  );
};

export default Home;
