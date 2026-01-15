import { NextResponse } from 'next/server';

// Mock database - in production, this would connect to a real database
const attendees = [
  { name: 'Ana Clara', paid: true },
  { name: 'Beatriz', paid: false },
  { name: 'Camila', paid: true },
  { name: 'Diana', paid: true },
  { name: 'Eduarda', paid: false },
  { name: 'Fernanda', paid: true },
  { name: 'Gabriela', paid: false },
  { name: 'Helena', paid: true },
  { name: 'Isabela', paid: true },
  { name: 'Júlia', paid: false },
  { name: 'Laura', paid: true },
  { name: 'Mariana', paid: false },
  { name: 'Natália', paid: true },
  { name: 'Olivia', paid: false },
  { name: 'Paula', paid: true },
];

export async function GET() {
  return NextResponse.json(attendees);
}
