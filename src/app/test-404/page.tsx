import { redirect } from 'next/navigation';

export default function Test404() {
  // This will trigger the 404 page
  redirect('/non-existent-page');
}
