import db, { FindOneChoiceArgs } from "db"

type GetChoiceInput = {
  where: FindOneChoiceArgs["where"]
  // Only available if a model relationship exists
  // include?: FindOneChoiceArgs['include']
}

export default async function getChoice(
  { where /* include */ }: GetChoiceInput,
  ctx: Record<any, any> = {}
) {
  const choice = await db.choice.findOne({ where })

  return choice
}
