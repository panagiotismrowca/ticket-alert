import prisma from "c:/Users/mcpan/projects/ticket-alert/prisma/client";

export default async function getStations(req, res) {
  try {
    const data = await prisma.post.findMany();
    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json(error);
  }
}
