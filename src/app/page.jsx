"use client";
import { redirect } from "next/navigation";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    redirect("/login");
  }, []);
  return <div></div>;
}
