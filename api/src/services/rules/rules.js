import { db } from 'src/lib/db'

export const rules = () => {
  return db.rule.findMany({where : {userId : context.currentUser.id}})
}

export const rule = ({ id }) => {
  return db.rule.findUnique({
    where: { id },
  })
}

export const createRule = ({ input }) => {
  return db.rule.create({
    data: {...input, userId : context.currentUser.id},
  })
}

export const updateRule = ({ id, input }) => {
  return db.rule.update({
    data: input,
    where: { id },
  })
}

export const deleteRule = ({ id }) => {
  return db.rule.delete({
    where: { id },
  })
}
