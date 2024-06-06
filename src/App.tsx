import { VirtualScroll } from "./VirtualScroll";
import { User, UserCard } from "./UserCard";
import { generateUsers } from "./Utils";

const App: React.FC = () => {
  const itemHeight: number = 47;
  const viewportHeight: number = 500;

  const users: User[] = generateUsers(1000);

  return (
    <div>
      <VirtualScroll
        itemHeight={itemHeight}
        items={users}
        viewportHeight={viewportHeight}
        renderItem={(item: User) => (
          <UserCard
            name={item.name}
            jobTitle={item.jobTitle}
            avatarSrc={item.avatarSrc}
          />
        )}
      />
    </div>
  );
};

export default App;
