"use client";

import {Loader, Map} from "lucide-react";
import {useEffect, useState} from "react";

export function Locations({
    onSelectLocation,
    locationFilter,
}: {
    onSelectLocation: (id: string) => void;
    locationFilter: string;
}) {
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
            <h1 className="text-xl text-gray-200 md:col-span-3 flex items-center gap-2  my-2">
                <Map />
                Locations
            </h1>

            {loading && (
                <div className="grid place-items-center md:col-span-3 p-10">
                    <Loader className="animate-spin"/>
                </div>
            )}

            {/*checks if location is active */}
            {locations.map((location) => {
                const isActive = locationFilter === location.id;

                return (
                    <div
                        key={location.id}
                        onClick={() => onSelectLocation(location.id)}
                        className={`
              cursor-pointer
              hover:opacity-80
              transition
              relative aspect-video rounded-lg overflow-hidden
              ${isActive ? "ring-2 ring-blue-500 " : ""}
            `}
                    >
                    <img
                        className="object-cover h-full w-full"
                        src={location.imageUrl}
                        width={320}
                        height={200}
                        alt={location.name}
                    />

                    <div className="absolute inset-x-0 bottom-0 p-2">
                        <h1 className="text-sm text-black ">{location.name}</h1>
                        <p className="text-xs  text-black">
                            {location.city}
                        </p>
                    </div>
                    </div>
                );
            })}
        </div>
    );
}
