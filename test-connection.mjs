import prisma from './lib/prisma.js'

async function main() {
  console.log('Testing database connection...');
  try {
    await prisma.$connect()
    console.log('Successfully connected to the database.');
    
    // Try a simple query to ensure read access
    const count = await prisma.user.count();
    console.log(`Connection verified. User count: ${count}`);
    
    await prisma.$disconnect();
    process.exit(0);
  } catch (e) {
    console.error('Database connection failed:');
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  }
}

main();
