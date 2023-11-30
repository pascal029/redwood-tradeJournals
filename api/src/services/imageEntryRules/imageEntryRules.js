import { db } from 'src/lib/db'

export const imageEntryRules = () => {
  return db.imageEntryRule.findMany()
}

export const imageEntryRule = ({ id }) => {
  return db.imageEntryRule.findUnique({
    where: { id },
  })
}

export const createImageEntryRule = ({ input }) => {
  return db.imageEntryRule.create({
    data: input,
  })
}

export const updateImageEntryRule = ({ id, input }) => {
  return db.imageEntryRule.update({
    data: input,
    where: { id },
  })
}

export const deleteImageEntryRule = ({ id }) => {
  return db.imageEntryRule.delete({
    where: { id },
  })
}
