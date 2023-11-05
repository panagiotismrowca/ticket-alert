const { PrismaClient } = require("@prisma/client");

global.prisma = global.prisma || new PrismaClient();

if (process.env.NODE_ENV === "development") {
  global.prisma = prisma;
}

module.exports = global.prisma;