"use client";
import LoaderUI from "@/components/LoaderUI";
import MeetingRoom from "@/components/MeetingRoom";
import MeetingSetup from "@/components/MeetingSetup";
import useGetCallById from "@/hooks/useGetCallById";
import { useUser } from "@clerk/nextjs";
import { StreamCall, StreamTheme } from "@stream-io/video-react-sdk";
import { useParams } from "next/navigation";
import React from "react";

function MeetingPage() {
  const { id } = useParams();
  const { isLoaded } = useUser();
  const { Call, isCallLoading } = useGetCallById(id);
  const [isSetupComplete, setIsSetupComplete] = React.useState(false);
  if (!isLoaded || isCallLoading) {
    return <LoaderUI />;
  }

  if (!Call) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-2xl font-semibold">Meeting Not found</p>
      </div>
    );
  }

  return (
    <StreamCall call={Call}>
      <StreamTheme>
        {!isSetupComplete ? (
          <MeetingSetup onSetupComplete={() => setIsSetupComplete(true)} />
        ) : (
          <div>
            <MeetingRoom />
          </div>
        )}
      </StreamTheme>
    </StreamCall>
  );
}

export default MeetingPage;
