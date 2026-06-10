'use client';
import { useState } from 'react';
import Image from 'next/image';

export default function PropertyGallery({ photos }: { photos: { asset: { url: string } }[] }) {
  const [selected, setSelected] = useState(0);

  return (
    <div className="space-y-4">
      <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
        <Image
          src={photos[selected].asset.url}
          alt="Property"
          fill
          className="object-cover"
        />
      </div>
      <div className="grid grid-cols-5 gap-2">
        {photos.map((photo, i) => (
          <button key={i} onClick={() => setSelected(i)} className="relative aspect-[4/3] rounded overflow-hidden">
            <Image src={photo.asset.url} alt="Thumb" fill className="object-cover" />
          </button>
        ))}
      </div>
    </div>
  );
}
