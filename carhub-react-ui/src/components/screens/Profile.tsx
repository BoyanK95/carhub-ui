import UserInfo from "../Profile/UserInfo";
import SavedCars from "../Profile/SavedCars";
import AccountSettings from "../Profile/AccountSettings";
import RecentActivity from "../Profile/RecentActivity";

export default function Profile() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-8">My Profile</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <UserInfo />
        <SavedCars />
        <AccountSettings />
        <RecentActivity />
      </div>
    </div>
  );
}
