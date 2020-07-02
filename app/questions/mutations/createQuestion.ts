import db, { QuestionCreateArgs } from "db"

type CreateQuestionInput = {
  data: QuestionCreateArgs["data"]
}
export default async function createQuestion(
  { data }: CreateQuestionInput,
  ctx: Record<any, any> = {}
) {
  const question = await db.question.create({ data })

  return question
}
