"use client";

import {Calendar, Loader, AArrowUp} from "lucide-react";
import {useEffect, useState} from "react";


export function Events({
searchFilter,
locationFilter
}: {
    searchFilter: string;
    locationFilter: string;
}) {
    const [events, setEvents] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchEvents = async () => {
            const data = await fetch("/api/events/events?amount=6").then((response) =>
                response.json()
            );

            setEvents(data.events);
            setLoading(false);
        };

        fetchEvents();
    }, []);

    // filters events based on search filter
    const filteredEvents = events.filter((event) => {
        const filterSearch = event.name.toLowerCase().includes((searchFilter ?? "").toLowerCase())
        const filterLocation = locationFilter === "" || event.locationId === locationFilter;

        return filterSearch && filterLocation;
    });

    return (
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">

            {loading && (
                <div className="grid place-items-center md:col-span-3 p-10">
                    <Loader className="animate-spin"/>
                </div>
            )}

            {filteredEvents.map((event) => (
                <div className="relative aspect-video rounded-lg overflow-hidden">
                    <div className="absolute inset-x-0 bottom-0 p-2">
                        <h1 className="text-sm text-primary-foreground">{event.name}</h1>
                        <p className="text-xs text-secondary-foreground">
                            {event.locationId} - {new Date(event.date).toLocaleDateString()}
                        </p>
                    </div>

                    <img
                        className="object-cover h-full w-full"
                        src={event.imageUrl}
                        width={320}
                        height={200}
                    />
                </div>
            ))}
        </div>
    );
}
