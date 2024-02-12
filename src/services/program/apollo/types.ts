export type Thumnail = {
  alt: string
  id: number
  url: string
}

export type Program = {
  id: number
  name: string
  thumnail: Thumnail
}

export type ProgramQueryResult = {
  program: Program[]
}

export type ProgramQueryVariables = {
  limit: number
}
