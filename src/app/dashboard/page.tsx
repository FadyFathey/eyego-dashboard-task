import { redirect } from 'next/navigation';

const dashboardPage = () => {
  return redirect('/dashboard/table');
};

export default dashboardPage;
