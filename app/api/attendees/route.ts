import { NextResponse } from 'next/server';
import { db, users } from '../config/db';

export async function GET() {
  const attendees = await db.select().from(users);
  return NextResponse.json(attendees);
}
