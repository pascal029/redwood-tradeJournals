import { db } from 'src/lib/db'

export const journals = () => {
  return db.journal.findMany({
    where: { userId: context.currentUser.id }
  })
}

export const journal = ({ id }) => {
  return db.journal.findUnique({
    where: { id , userId: context.currentUser.id},
  })
}

export const createJournal = ({ input }) => {
  return db.journal.create({
    data: {...input, userId: context.currentUser.id},
  })
}

export const updateJournal = ({ id, input }) => {
  return db.journal.update({
    data: input,
    where: { id },
  })
}

export const deleteJournal = ({ id }) => {
  return db.journal.delete({
    where: { id },
  })
}

export const Journal = {
  user : (_obj, {root}) => {
    db.journal.findFirst({where : {id : root.id}}).user()
  }
}