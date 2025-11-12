"use client";

import Lottie from "lottie-react";
import robotSaysHi from "../animations/robot-says-hi.json";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"; // from shadcn/ui
import { DialogTitle } from "@radix-ui/react-dialog";

export default function FloatingRobot() {
  return (
    // fixed bottom-6 right-6
    <div className="flex flex-col items-center gap-3 z-50">
      {/* Dialog trigger */}
      <Dialog>
        <DialogTrigger asChild>
          <div>
            {/* Robot animation */}
            <div className="w-[120px] h-[120px] md:w-[160px] md:h-[160px] hover:scale-105 transition-transform animate-float">
              <Lottie
                animationData={robotSaysHi}
                loop
                autoplay
                style={{ width: "100%", height: "100%" }}
              />
            </div>
            <button
              className="px-6 py-2 text-sm font-bold text-black
              bg-white border border-white/20
              rounded-full shadow-md transition-all
              hover:shadow-[0_0_10px_#C778DD,0_0_30px_#C778DD]
              focus:outline-none focus:ring-2 focus:ring-[#C778DD]/50 md:block hidden"
            >
              Ask AI about me!
            </button>
          </div>
        </DialogTrigger>

        {/* Chatbox Dialog */}
        <DialogContent
          className="bg-[#0A0A0F]/90 border border-white/10
          text-white max-w-md w-full rounded-2xl shadow-2xl p-6"
        >
          <DialogTitle>AI chatbox</DialogTitle>
          <h2 className="text-xl font-semibold mb-2">Chat with my AI 🤖</h2>
          <p className="text-sm text-gray-300 mb-4">
            You can ask questions about me, my projects, or anything on this
            site.
          </p>

          {/* Placeholder for the chat interface */}
          <div className="h-64 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center text-gray-400">
            [AI chat will appear here soon...]
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
