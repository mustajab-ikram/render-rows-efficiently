import { User } from "./user";

export default function UserCard({ user }: { user: User }) {
  return (
    <>
      <td
        style={{
          border: "1px solid black",
          borderRadius: "5px",
          width: "75px",
        }}
      >
        {user.id}
      </td>
      <td
        style={{
          border: "1px solid black",
          borderRadius: "5px",
          width: "75px",
        }}
      >
        {user.name}
      </td>
    </>
  );
}
