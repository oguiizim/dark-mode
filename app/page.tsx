"use client";

import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

export default function Home() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme == "light" ? "dark" : "light");
  };
  return (
    <div className="w-full min-h-screen flex items-center justify-center">
      <Button onClick={toggleTheme}>
        Toggle
      </Button>
    </div>
  );
}
