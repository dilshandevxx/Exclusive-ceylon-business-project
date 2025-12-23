// Prisma connection disabled for mock data mode
// import { Pool } from 'pg'
// import { PrismaPg } from '@prisma/adapter-pg'
// import { PrismaClient } from '@prisma/client'

// const connectionString = process.env.DATABASE_URL

// const pool = new Pool({ connectionString })
// const adapter = new PrismaPg(pool)

// const prismaClientSingleton = () => {
//   return new PrismaClient({
//     adapter,
//     log: ['query', 'info', 'warn', 'error'],
//   })
// }

// const globalForPrisma = globalThis

// const prisma = globalForPrisma.prisma ?? prismaClientSingleton()

// export default prisma

// if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma

const prisma = {};
export default prisma;
