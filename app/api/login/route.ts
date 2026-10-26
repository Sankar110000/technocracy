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
    const remember = formData.get('remember')?.toString(); // 'ok' if checked, null/undefined otherwise

    // 1. Validate inputs
    if (!email || !password) {
      return NextResponse.json(
        { success: false, message: 'Email and password are required.' },
        { status: 400 }
      );
    }

    // 2. Connect to Database
    await connectDB();

    // 3. Find user
    const user = await User.findOne({ email });
    if (!user) {
      return NextResponse.json(
        { success: false, message: 'Invalid email or password.' },
        { status: 401 }
      );
    }

    // 4. Verify password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return NextResponse.json(
        { success: false, message: 'Invalid email or password.' },
        { status: 401 }
      );
    }

    // 5. Update remember status if needed
    if (remember === 'ok') {
      user.remember = true;
      await user.save();
    }

    // TODO: Generate JWT token or session cookie here if required

    return NextResponse.json(
      { success: true, message: 'Signed in successfully.', email: user.email },
      { status: 200 }
    );
  } catch (error: any) {
    console.error('Signin Error:', error);
    return NextResponse.json(
      { success: false, message: 'Internal server error.' },
      { status: 500 }
    );
  }
}