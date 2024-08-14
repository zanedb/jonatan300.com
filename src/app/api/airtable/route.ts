import { NextRequest, NextResponse } from 'next/server'
import { isEmpty, isEmail, isMobilePhone, isLength } from 'validator'
import Airtable from 'airtable'
var base = new Airtable({ apiKey: process.env.AIRTABLE_KEY }).base(
  process.env.AIRTABLE_BASE as string
)

export async function POST(request: NextRequest) {
  const body = await request.json()

  const Name = body.name
  if (isEmpty(Name) || !isLength(Name, { min: 2, max: undefined }))
    return NextResponse.json({ error: 'invalid name' }, { status: 400 })

  const Email = body.email
  if (isEmpty(Email || !isEmail(Email)))
    return NextResponse.json({ error: 'invalid email' }, { status: 400 })

  const Phone = body.phone
  if (isEmpty(Phone) || !isMobilePhone(Phone))
    return NextResponse.json({ error: 'invalid number' }, { status: 400 })

  const Message = body.message
  if (isEmpty(Message) || !isLength(Message, { min: 10, max: undefined }))
    return NextResponse.json({ error: 'invalid message' }, { status: 400 })

  await base('contact').create([
    {
      fields: {
        Name,
        Email,
        Phone,
        Message,
      },
    },
  ])

  return NextResponse.json({ success: 'submitted' }, { status: 200 })
}
