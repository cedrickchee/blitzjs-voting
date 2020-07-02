import db, { ChoiceCreateArgs } from "db"

type CreateChoiceInput = {
  data: ChoiceCreateArgs["data"]
}
export default async function createChoice(
  { data }: CreateChoiceInput,
  ctx: Record<any, any> = {}
) {
  const choice = await db.choice.create({ data })

  return choice
}
