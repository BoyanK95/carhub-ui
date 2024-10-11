import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { user } from "@/dummyData/user";
import { Button } from "../ui/button";
import { LockIcon, UserIcon } from "lucide-react";

const AccountSettings = () => {
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);

  return (
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
                <input type="checkbox" id="newCars" className="form-checkbox" />
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
                <label htmlFor="priceDrops">Price drops on saved cars</label>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="security">
            <div className="space-y-4">
                {/* TODO implement change passowrd */}
              <Button variant="outline">
                <LockIcon className="mr-2 h-4 w-4" /> Change Password
              </Button>
              <Button variant="outline">
                <UserIcon className="mr-2 h-4 w-4" /> Two-Factor Authentication
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default AccountSettings;
