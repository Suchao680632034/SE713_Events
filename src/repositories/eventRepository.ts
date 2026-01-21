import {eventModel as Event} from "../generated/prisma/models/event";


const events: Event[] = [
  {
        id: 1,
        category: "Music",
        title: "Concert",
        description: "A live concert",
        location: "London",
        date: "2021-07-01",
        time: "19:00",
        petsAllowed: false,
        organizer: "Live Nation",
    },
    {
        id: 2,
        category: "Art",
        title: "Art Exhibition",
        description: "An exhibition of modern art",
        location: "New York",
        date: "2021-08-15",
        time: "10:00",
        petsAllowed: true,
        organizer: "Art World",
    },
    {
        id: 3,
        category: "Tech",
        title: "Tech Conference",
        description: "A conference about the latest in technology",
        location: "San Francisco",
        date: "2021-09-10",
        time: "09:00",
        petsAllowed: false,
        organizer: "Tech Events Co.",
    },
    {
        id: 4,
        category: "Food",
        title: "Food Festival",
        description: "A festival featuring food from around the world",
        location: "Chicago",
        date: "2021-10-05",
        time: "12:00",
        petsAllowed: true,
        organizer: "Foodies United",
    },{
        id: 5,
        category: "Sports",
        title: "Marathon",
        description: "Annual city marathon",
        location: "Boston",
        date: "2021-11-20",
        time: "07:00",
        petsAllowed: false,
        organizer: "City Sports",
    }

]



export async function getEventByCategory(category: string): Promise<Event[]> {
    const filteredEvents = events.filter((event) => event.category === category);
    return filteredEvents;
}

export async function getAllEvents(): Promise<Event[]> {
    return events;
}


export async function getEventById(id: number): Promise<Event | undefined> {
    return events.find((event) => event.id === id);
}   


export async function addEvent(newEvent: Event): Promise<Event> {
    newEvent.id = events.length + 1; 
    events.push(newEvent);
    return newEvent;
}
