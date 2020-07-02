import db, { QuestionUpdateArgs } from "db"

type UpdateQuestionInput = {
  where: QuestionUpdateArgs["where"]
  data: QuestionUpdateArgs["data"]
}

export default async function updateQuestion(
  { where, data }: UpdateQuestionInput,
  ctx: Record<any, any> = {}
) {
  // Don't allow updating
  delete data.id

  const question = await db.question.update({ where, data })

  return question
}
