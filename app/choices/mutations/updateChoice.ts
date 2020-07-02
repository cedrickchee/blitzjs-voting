import db, { ChoiceUpdateArgs } from "db"

type UpdateChoiceInput = {
  where: ChoiceUpdateArgs["where"]
  data: ChoiceUpdateArgs["data"]
}

export default async function updateChoice(
  { where, data }: UpdateChoiceInput,
  ctx: Record<any, any> = {}
) {
  // Don't allow updating
  delete data.id

  const choice = await db.choice.update({ where, data })

  return choice
}
