import db, { ChoiceDeleteArgs } from "db"

type DeleteChoiceInput = {
  where: ChoiceDeleteArgs["where"]
}

export default async function deleteChoice(
  { where }: DeleteChoiceInput,
  ctx: Record<any, any> = {}
) {
  const choice = await db.choice.delete({ where })

  return choice
}
