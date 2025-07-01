"use client";
const Error = () => {
  return (
    <main className="error">
      <h1>Something went wrong!</h1>
      <p>
        We are unable to fetch the meals at the moment. Please try again later.
      </p>
      <p>Error: Database connection failed</p>
    </main>
  );
};

export default Error;
