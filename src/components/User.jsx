import { PrismaClient } from '@prisma/client';

export default function User({ data }) {
  return (
    <div>
      {data.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
}

export async function getStaticProps() {
  const prisma = new PrismaClient();
  const data = await prisma.post.findMany();
  prisma.$disconnect();

  return {
    props: {
      data,
    },
  };
}
