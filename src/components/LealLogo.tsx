import { cn } from "../lib/utils";

interface LealLogoProps {
  className?: string;
  variant?: "light" | "dark";
  showSubtitle?: boolean;
}

export function LealLogo({
  className,
  variant = "light",
  showSubtitle = true,
}: LealLogoProps) {
  const strokeColor = variant === "dark" ? "#FFFFFF" : "#DC1F26";
  const letterFill = "#FFFFFF";
  const letterStroke = "#DC1F26";
  const subtitleColor = variant === "dark" ? "text-zinc-200" : "text-[#DC1F26]";

  return (
    <div className={cn("inline-flex flex-col items-start select-none", className)}>
      <svg
        viewBox="0 0 218 68"
        className="h-10 w-auto sm:h-11"
        role="img"
        aria-label="Logotipo Supermercados Leal"
      >
        {/* Subtle gray diamond behind the A, matching real Leal signage */}
        <rect
          x="112"
          y="7"
          width="42"
          height="42"
          rx="8"
          transform="rotate(45 133 28)"
          fill="#D4D4D8"
          stroke="#A1A1AA"
          strokeWidth="2"
        />

        {/* L */}
        <path
          d="M12 14C12 10.7 14.7 8 18 8H24C27.3 8 30 10.7 30 14V37H44C47.3 37 50 39.7 50 43V47C50 50.3 47.3 53 44 53H18C14.7 53 12 50.3 12 47V14Z"
          fill={letterFill}
          stroke={letterStroke}
          strokeWidth="5.5"
          strokeLinejoin="round"
        />

        {/* E */}
        <path
          d="M58 14C58 10.7 60.7 8 64 8H92C95.3 8 98 10.7 98 14V18C98 21.3 95.3 24 92 24H76V27H89C92.3 27 95 29.7 95 33C95 36.3 92.3 39 89 39H76V41H92C95.3 41 98 43.7 98 47V49C98 51.2 96.2 53 94 53H64C60.7 53 58 50.3 58 47V14Z"
          fill={letterFill}
          stroke={letterStroke}
          strokeWidth="5.5"
          strokeLinejoin="round"
        />

        {/* A with iconic friendly yellow dog face */}
        <path
          d="M133 8C123.5 8 116.5 18.5 112 34C109.5 43 113.5 53 122 53C126.5 53 130 50.5 133 47C136 50.5 139.5 53 144 53C152.5 53 156.5 43 154 34C149.5 18.5 142.5 8 133 8Z"
          fill="#FACC15"
          stroke={letterStroke}
          strokeWidth="5.5"
          strokeLinejoin="round"
        />
        <circle cx="126.5" cy="26.5" r="3.2" fill="#DC1F26" />
        <circle cx="139.5" cy="26.5" r="3.2" fill="#DC1F26" />
        <path d="M129.5 33H136.5L133 37L129.5 33Z" fill="#DC1F26" />
        <path
          d="M122 36.5C122 41 127.5 42.5 133 37.5C138.5 42.5 144 41 144 36.5"
          stroke="#DC1F26"
          strokeWidth="2.8"
          strokeLinecap="round"
          fill="none"
        />

        {/* L */}
        <path
          d="M164 14C164 10.7 166.7 8 170 8H176C179.3 8 182 10.7 182 14V37H196C199.3 37 202 39.7 202 43V47C202 50.3 199.3 53 196 53H170C166.7 53 164 50.3 164 47V14Z"
          fill={letterFill}
          stroke={letterStroke}
          strokeWidth="5.5"
          strokeLinejoin="round"
        />

        {/* Outer accent line for dark background contrast */}
        {variant === "dark" && (
          <rect
            x="2"
            y="2"
            width="214"
            height="64"
            rx="12"
            stroke={strokeColor}
            strokeOpacity="0.08"
            strokeWidth="1"
            fill="none"
          />
        )}
      </svg>
      {showSubtitle && (
        <span
          className={cn(
            "-mt-1.5 pl-1 font-['Sora'] text-[10px] font-bold tracking-[0.28em] uppercase",
            subtitleColor
          )}
        >
          Supermercados
        </span>
      )}
    </div>
  );
}
