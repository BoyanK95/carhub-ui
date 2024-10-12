import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Textarea } from "@/components/ui/textarea";
import { user } from "@/dummyData/user";
import { Button } from "../ui/button";

const UserInfo = () => {
  const [bio, setBio] = useState(user.bio);

  const changeProfilePicture = () => {
    // TODO: Implement profile picture change logic when API is ready
    console.log("Change profile picture clicked");
  };

  return (
    <Card className="md:col-span-2">
      <CardHeader>
        <CardTitle>User Information</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center space-x-4">
          <Avatar className="w-20 h-20 cursor-pointer" onClick={changeProfilePicture}>
            <AvatarImage src={user.imageUrl} alt={user.name} />
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
  );
};

export default UserInfo;
