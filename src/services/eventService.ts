import {Event} from "../models/event";
//import { getAllEvents as allEvents , getEventByCategory as eventByCategory , getEventById as eventById , addEvent as addNewEvent } from "../repositories/eventRepository";
import * as repo from "../repositories/eventRepository";

export async function getEventByCategory(category: string): Promise<Event[]> {
  return repo.getEventByCategory(category);
}

export async function getAllEvents(): Promise<Event[]> {
   return repo.getAllEvents();
}


export async function getEventById(id: number): Promise<Event | undefined> {
    return repo.getEventById(id);
}   


export function addEvent(newEvent: Event): Promise<Event> {
   return repo.addEvent(newEvent);
   
}

