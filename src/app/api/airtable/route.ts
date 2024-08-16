import { NextRequest, NextResponse } from 'next/server'
import { isEmpty, isEmail, isMobilePhone, isLength } from 'validator'

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

  const send = await fetch(
    `https://api.airtable.com/v0/${process.env.AIRTABLE_BASE}/contact`,
    {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.AIRTABLE_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        records: [
          {
            fields: {
              Name,
              Email,
              Phone,
              Message,
            },
          },
        ],
      }),
    }
  )

  if (send.status === 200) {
    return NextResponse.json({ success: 'submitted' }, { status: 200 })
  } else {
    const error = await send.json()
    console.log(error)
    return NextResponse.json({ error: 'failed' }, { status: 500 })
  }
}
