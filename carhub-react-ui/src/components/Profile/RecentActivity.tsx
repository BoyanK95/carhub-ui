import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { StarIcon } from "lucide-react";
import { activities } from "@/dummyData/activities";

const RecentActivity = () => {
  return (
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
  );
};

export default RecentActivity;
