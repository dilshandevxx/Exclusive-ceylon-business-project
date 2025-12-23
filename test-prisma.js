const { PrismaClient } = require('@prisma/client');

try {
  const prisma = new PrismaClient({
    log: ['query', 'info', 'warn', 'error'],
  });
  console.log('Prisma Client failed to throw error immediately, checking connection...');
  prisma.$connect().then(() => {
    console.log('Connected successfully');
    process.exit(0);
  }).catch((e) => {
    console.error('Connection error:', e);
    process.exit(1);
  });
} catch (e) {
  console.error('Constructor error:', e);
  process.exit(1);
}
