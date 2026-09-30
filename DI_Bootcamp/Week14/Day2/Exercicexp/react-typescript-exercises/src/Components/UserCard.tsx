interface UserCardProps {
  name?: string;
  age?: number;
  role?: string;
}

function UserCard({
  name = "Unknown User",
  age = 0,
  role = "Guest"
}: UserCardProps) {
  return (
    <div>
      <h2>Exercise 4 - User Card</h2>

      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>Role: {role}</p>
    </div>
  );
}

export default UserCard;