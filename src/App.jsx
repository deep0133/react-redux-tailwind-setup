import { useGetUsersQuery } from "./redux/slices/userSlice";

function App() {
  const { data, error, isLoading } = useGetUsersQuery();

  console.log(isLoading);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error : {error.error}</div>;
  }
  return (
    <>
      <div>
        <div>
          <h3>User Data :</h3>
          {data.map((user) => {
            return <div key={user.id}>{user.name}</div>;
          })}
        </div>
      </div>
    </>
  );
}

export default App;
