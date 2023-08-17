import { writeFile } from 'fs/promises'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request) {
    try {
        const data = await request.formData()
  const file = data.get('file')

  if (!file) {
    return NextResponse.json({ success: false },{status:401})
  }

  const bytes = await file.arrayBuffer()
  const buffer = Buffer.from(bytes)

  // With the file data in the buffer, you can do whatever you want with it.
  // For this, we'll just write it to the filesystem in a new location
  const path = `/my basic programming/Ten Projects For Portifolio/CodeWIthharry Next js Project/panda/public/tmp/${file.name}`
  await writeFile(path, buffer)
  console.log(`open ${path} to see the uploaded file`)

  return (
    NextResponse.json({ success: true },{status:200})
  )
    } catch (error) {
        console.log(error)
        return NextResponse.json({ success: fail },{status:500});
    }
}