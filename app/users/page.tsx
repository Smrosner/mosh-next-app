import React from 'react'

interface User {
  id: number;
  name: string;
}

const UsersPage = async () => {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/users",
    { cache: 'no-store' } // - usefull if you have data that changes frequently
    // { next: { revalidate: 10 } } // this 'next' obj can specify config params that nextjs specific
    // revalidate: 10 - means that next js is going to run a background job and get fresh data from the backend every 10s
  );
  const users: User[] = await res.json();
  return (
    <>
      <h1>Users</h1>
      <p>{new Date().toLocaleTimeString()}</p>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </>
  );
}

export default UsersPage;