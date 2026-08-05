"use client";

import { useState } from "react";
import Image from "next/image";
import { FolderKanban } from "lucide-react";

export function ProjectImage({ src, alt }: { src?: string; alt: string }) {
  const [error, setError] = useState(false);

  if (!src || error) {
    return (
      <div className="from-primary/15 via-surface to-surface absolute inset-0 flex items-center justify-center bg-gradient-to-br">
        <FolderKanban className="text-muted-foreground size-10" aria-hidden />
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
      className="object-cover"
      onError={() => setError(true)}
    />
  );
}
