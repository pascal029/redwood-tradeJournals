import { db } from 'src/lib/db'

export const plans = () => {
  return db.plan.findMany({
    where: { userId: context.currentUser.id },
  })
}

export const plan = ({ id }) => {
  return db.plan.findUnique({
    where: { id, userId: context.currentUser.id },
  })
}

export const createPlan = ({ input }) => {
  return db.plan.create({
    data: { ...input, userId: context.currentUser.id },
  })
}

export const updatePlan = ({ id, input }) => {
  return db.plan.update({
    data: input,
    where: { id },
  })
}

export const deletePlan = ({ id }) => {
  return db.plan.delete({
    where: { id },
  })
}
