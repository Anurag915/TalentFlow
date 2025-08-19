"use client";
import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SparkleIcon } from "lucide-react";

function DasboardBtn() {
  const isCandidate = false; // Replace with actual logic to determine if the user is a candidate
  const isInterviewer = true; // Replace with actual logic to determine if the user is an interviewer
  if (isCandidate) {
    return null;
  }
  return (
    <Link href="/dashboard">
      <Button className="gap-2 font-medium" size={"sm"}>
        <SparkleIcon className="size-4" />
        Dashboard
      </Button>
    </Link>
  );
}

export default DasboardBtn;
