import Image from "next/image";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/site";

type PortraitProps = {
  className?: string;
  priority?: boolean;
  sizes?: string;
  variant?: "hero" | "profile" | "avatar";
};

export function Portrait({
  className,
  priority = false,
  sizes = "(max-width: 768px) 100vw, 42vw",
  variant = "profile",
}: PortraitProps) {
  const alt = `${siteConfig.name}, international veterinarian and animal health executive`;

  if (variant === "avatar") {
    return (
      <Image
        src={siteConfig.portrait}
        alt={alt}
        width={96}
        height={96}
        className={cn("h-12 w-12 object-cover object-top", className)}
        priority={priority}
      />
    );
  }

  return (
    <Image
      src={siteConfig.portrait}
      alt={alt}
      fill
      sizes={sizes}
      priority={priority}
      className={cn(
        "object-cover object-[center_12%]",
        variant === "hero" && "scale-[1.01]",
        className
      )}
    />
  );
}
