import { redirect } from 'next/navigation';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'User Table | EyeGo Dashboard',
  description: 'View and manage user data.',
};
const dashboardPage = () => {
  return redirect('/dashboard/table');
};

export default dashboardPage;
