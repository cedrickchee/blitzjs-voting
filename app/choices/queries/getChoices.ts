import db, { FindManyChoiceArgs } from "db"

type GetChoicesInput = {
  where?: FindManyChoiceArgs["where"]
  orderBy?: FindManyChoiceArgs["orderBy"]
  cursor?: FindManyChoiceArgs["cursor"]
  take?: FindManyChoiceArgs["take"]
  skip?: FindManyChoiceArgs["skip"]
  // Only available if a model relationship exists
  // include?: FindManyChoiceArgs['include']
}

export default async function getChoices(
  { where, orderBy, cursor, take, skip }: GetChoicesInput,
  ctx: Record<any, any> = {}
) {
  const choices = await db.choice.findMany({
    where,
    orderBy,
    cursor,
    take,
    skip,
  })

  return choices
}
