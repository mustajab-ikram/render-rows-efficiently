import { useRef, useState } from "react";
import { createUsers } from "./user";
import UserCard from "./UserCard";
import { TableVirtuoso, VirtuosoHandle } from "react-virtuoso";

function App() {
  const [users, setUsers] = useState(() => createUsers(0, 20));
  const [isLoaded, setIsLoaded] = useState(false);

  const virtuosoRef = useRef<VirtuosoHandle>(null);

  async function fetchNextPage() {
    const newUsers = createUsers(users.length, users.length + 20);
    setIsLoaded(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsLoaded(false);
    setUsers((prev) => [...prev, ...newUsers]);
  }

  return (
    <div>
      <TableVirtuoso
        fixedHeaderContent={() => (
          <tr>
            <th
              style={{
                border: "1px solid black",
                width: "75px",
                borderRadius: "5px",
                backgroundColor: "#633ea5",
                color: "white",
              }}
            >
              ID
            </th>
            <th
              style={{
                border: "1px solid black",
                width: "75px",
                borderRadius: "5px",
                backgroundColor: "#633ea5",
                color: "white",
              }}
            >
              Name
            </th>
          </tr>
        )}
        fixedFooterContent={isLoaded ? () => <div>Loading...</div> : undefined}
        endReached={fetchNextPage}
        ref={virtuosoRef}
        style={{ height: "200px" }}
        data={users}
        itemContent={(_, user) => <UserCard user={user} />}
      />
      <button
        style={{
          padding: "10px",
          borderRadius: "5px",
          backgroundColor: "#633ea5",
          color: "white",
          border: "none",
          cursor: "pointer",
          marginBottom: "10px",
        }}
        onClick={() => {
          virtuosoRef.current?.scrollToIndex({
            index: Math.random() * users.length,
            behavior: "smooth",
            align: "start",
          });
        }}
      >
        Scroll
      </button>
    </div>
  );
}

export default App;
