import {prisma} from '../prisma';
import {Event} from '../models/event';

export function getEventByCategory(category: string) {
  return prisma.event.findMany({
    where: { category },
  });
}

export function getAllEvents() {
  return prisma.event.findMany();
}

export function getEventById(id: number) {
  return prisma.event.findUnique({
    where: { id },
  });
}

export function addEvent(newEvent: Event){
  return prisma.event.create({
      data: {
        category: newEvent.category,
        title: newEvent.title,
        description: newEvent.description,
        location: newEvent.location,
        date: newEvent.date,
        time: newEvent.time,
        petsAllowed: newEvent.petsAllowed,
       // organizer: newEvent.organizer
      }
  });
}

export function getAllEventsWithOrganizer() {
  return prisma.event.findMany({
    select: {
        id: true,
        category: true,
        organizerId:false,
        organizer: {
            select: {
               name: true,
            }
        }
    }
  });
}
//ทดลองแก้ไขส่วนของ findEventByIdWithOrganizer ให้แสดง ชื่อ เวลา และ organizer id เท่านั้น
export function getEventByIdWithOrganizer(id: number) {
  return prisma.event.findUnique({
    where: { id },
    select: {
        id: true,
        title: true,
        time: true,
        organizerId: true,
    }
  });
}
