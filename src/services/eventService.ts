import {eventModel as Event} from "../generated/prisma/models/event";
//import { getAllEvents as allEvents , getEventByCategory as eventByCategory , getEventById as eventById , addEvent as addNewEvent } from "../repositories/eventRepository";
import * as repo from "../repositories/eventRepositoryPrisma";

export async function getEventByCategory(category: string) {
  return repo.getEventByCategory(category);
}

export async function getAllEvents(){
   return repo.getAllEventsWithOrganizer();
}


export async function getEventById(id: number) {
    return repo.getEventByIdWithOrganizer(id);
}   


export function addEvent(newEvent: Event){
   return repo.addEvent(newEvent);
   
}

