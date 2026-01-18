import { Event } from '../models/event';
import * as db from '../db';  

export async function getAllEvents(): Promise<Event[]> {
  const result = await db.query('SELECT * FROM events ORDER BY date');
  return result.rows;
}

export async function getEventById(id: number): Promise<Event | undefined> {
  const result = await db.query('SELECT * FROM events WHERE id = $1', [id]);
  return result.rows[0];
}

export async function getEventByCategory(category: string): Promise<Event[]> {
  const result = await db.query('SELECT * FROM events WHERE category = $1 ORDER BY date', [category]);
  return result.rows;
}

export async function addEvent(newEvent: Event): Promise<Event> {
  const { title, description, date, time, location, category, petsAllowed, organizer } = newEvent;
  const result = await db.query(
    'INSERT INTO events (title, description, date, time, location, category, petsAllowed, organizer) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *',
    [title, description, date, time, location, category, petsAllowed, organizer]
  );
  return result.rows[0];
}