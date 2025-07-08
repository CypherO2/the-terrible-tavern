import { useEffect } from "react";

export default function ContactPage() {
  useEffect(() => {
    document.title = "The Terrible Tavern | Contact Us";
  });
  return (
    <>
      <h1>Contact</h1>
    </>
  );
}
