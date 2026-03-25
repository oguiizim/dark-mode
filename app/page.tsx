"use client";

import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

export default function Home() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="w-full min-h-screen flex items-center justify-center">
      <Button onClick={() => setTheme("light")}>White</Button>
      <Button onClick={() => setTheme("dark")}>Dark</Button>
      <Button onClick={() => setTheme("red")}>Red</Button>
    </div>
  );
}
