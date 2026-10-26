import { NextResponse } from 'next/server';
import { connectDB } from '@/db/dbConnect';
import { User } from '@/schema/user';
import bcrypt from 'bcryptjs';

export async function POST(req: Request) {
  try {
    // Parse incoming FormData
    const formData = await req.formData();
    const email = formData.get('email')?.toString().trim();
    const password = formData.get('password')?.toString();
    const confirmPassword = formData.get('confirmPassword')?.toString();

    // 1. Validate inputs
    if (!email || !password || !confirmPassword) {
      return NextResponse.json(
        { success: false, message: 'All fields are required.' },
        { status: 400 }
      );
    }

    if (password !== confirmPassword) {
      return NextResponse.json(
        { success: false, message: 'Passwords do not match.' },
        { status: 400 }
      );
    }

    // 2. Connect to Database
    await connectDB();

    // 3. Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json(
        { success: false, message: 'An account with this email already exists.' },
        { status: 409 }
      );
    }

    // 4. Hash password securely
    const hashedPassword = await bcrypt.hash(password, 10);

    // 5. Create new user
    await User.create({
      email,
      password: hashedPassword,
      remember: false,
    });

    return NextResponse.json(
      { success: true, message: 'Account created successfully.' },
      { status: 201 }
    );
  } catch (error: any) {
    console.error('Signup Error:', error);
    return NextResponse.json(
      { success: false, message: 'Internal server error.' },
      { status: 500 }
    );
  }
}