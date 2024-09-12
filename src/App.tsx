import { useQuery } from "@tanstack/react-query";

import "./App.css";
import { getUsers } from "./api/user";
import { useUserStore } from "./store/userStore";

function App() {
  const { filters } = useUserStore();
  const { data } = useQuery({
    queryKey: ["users", filters],
    queryFn: () => getUsers(filters),
  });

  return (
    <div>
      {data?.map((user) => {
        return <div key={user.id}>{user.name}</div>;
      })}
    </div>
  );
}

export default App;
