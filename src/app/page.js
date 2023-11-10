import ClientComponentExample from '@/components/ClientComponentExample';
import ServerComponentExample from '@/components/ServerComponentExample';
import Link from 'next/link';
import Message from '@/components/Message';

export default function Home() {
  return (
    <main className="flex flex-grow flex-col items-center justify-center space-y-6">
      <Message />
      <Link href="/stations"> stations </Link>
    </main>
  );
}
