import { useEffect } from "react";

export default function UnknownPage() {
  useEffect(() => {
    document.title = "The Terrible Tavern | Error 404";
  });
  return (
    <>
      <h1>Unknown</h1>
    </>
  );
}
