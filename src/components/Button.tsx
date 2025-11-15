import React, { ReactNode } from "react";

interface GlassButtonProps {
  children: ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}

const Button: React.FC<GlassButtonProps> = ({
  children,
  onClick,
  type = "button",
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className="
        relative w-[200px] md:w-auto px-4 py-2 md:px-8 md:py-4
        rounded-full border border-white/20
        bg-white/5 backdrop-blur-sm
        text-white font-semibold
        transition-all duration-300 ease-in-out
        hover:shadow-[0_0_12px_#c779dd]
        hover:border-purple-400/50
        active:shadow-[0_0_40px_#c779dd]
        active:scale-95
        shadow-[inset_1px_1px_2px_rgba(255,255,255,0.8)]
      "
    >
      <span className="text-my-primary">{"{ "}</span>
      {children}
      <span className="text-my-primary">{" }"}</span>
    </button>
  );
};

export default Button;
