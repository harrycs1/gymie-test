const { PrismaClient } = require('@prisma/client')
const exercises = require('../data/exercises')
const prisma = new PrismaClient()

async function main() {
  // ... you will write your Prisma Client queries here
  
     await prisma.exercises.createMany({data:exercises})
  
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })