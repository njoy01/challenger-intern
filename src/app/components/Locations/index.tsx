"use client";

import { Loader, AArrowUp, Map } from "lucide-react";
import { useEffect, useState } from "react";

export function Locations() {
  const [locations, setLocations] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLocations = async () => {
      const data = await fetch("/api/locations/locations?amount=6").then(
        (response) => response.json()
      );

      setLocations(data.locations);
      setLoading(false);
    };

    fetchLocations();
  }, []);

  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
      <h1 className="text-xl text-black md:col-span-3 flex items-center gap-2">
        <Map /> Locations
      </h1>

      {loading && (
        <div className="grid place-items-center md:col-span-3 p-10">
          <Loader className="animate-spin" />
        </div>
      )}

      {locations.map((location) => (
        <div className="relative aspect-video rounded-lg overflow-hidden">
          <div className="absolute inset-x-0 bottom-0 p-2">
            <h1 className="text-sm text-primary-foreground">{location.name}</h1>
            <p className="text-xs text-secondary-foreground">
              {location.locationId}
            </p>
          </div>

          <img
            className="object-cover h-full w-full"
            src={location.imageUrl}
            width={320}
            height={200}
          />
        </div>
      ))}
    </div>
  );
}
