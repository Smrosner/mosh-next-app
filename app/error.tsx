"use client";
import React from "react";

interface Props {
  error: Error;
  reset: () => void;
}

const ErrorPage = ({ error, reset }: Props) => {
  console.log("err: ", error);
  return (
    <>
      <div>An unexpected error has occurred.</div>
      <button className='="btn btn-primary' onClick={() => reset()}>
        Retry
      </button>
      {/*  Only use in certain parts of the app as user can keep retrying sending repeat errors to the error log */}
    </>
  );
};

export default ErrorPage;
