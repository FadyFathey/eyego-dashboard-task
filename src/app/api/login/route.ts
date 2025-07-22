import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const body = await request.json();
  const { email, password } = body;

  const validEmail = 'test@eyego.ai';
  const validPassword = '123456';

  if (email === validEmail && password === validPassword) {
    return NextResponse.json({ message: 'Login successful' }, { status: 200 });
  } else {
    return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
  }
}
