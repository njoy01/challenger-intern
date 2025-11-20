import { getEvents } from "./mock-data"
import { getLocations } from "./mock-data"

export const database = {
  getEvents: async (amount: number, offset: number) => {
    const events = await getEvents()

    return events
      .slice(offset, amount + offset)
  },
  getEvent: async (id: number) => {
    const events = await getEvents()

    return events.find((event) => event.id === id) ?? null
  },
  getLocations: async (amount: number, offset: number) => {
    const locations = await getLocations()

    return locations
      .slice(offset, amount + offset)
  },
  getLocation: async (id: number) => {
    const locations = await getLocations()
    
    return locations.find((location) => location.id === id) ?? null
  }
}
