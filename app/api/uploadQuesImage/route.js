import { writeFile, readFile } from 'fs/promises';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const data = await request.formData();
    const file = data.get('file');

    if (!file) {
      return new NextResponse(
        JSON.stringify({ success: false }),
        { status: 401 }
      );
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Write the uploaded image to the filesystem
    const imagePath = `/my basic programming/Ten Projects For Portifolio/CodeWIthharry Next js Project/panda/public/Ques/${file.name}`;
    await writeFile(imagePath, buffer);
    console.log(`Uploaded image saved at ${imagePath}`);

    // Read the existing JSON file (if it exists)
    const jsonPath = '/my basic programming/Ten Projects For Portifolio/CodeWIthharry Next js Project/panda/public/QuesImageLinks.json'; // Specify the path to your JSON file
    let jsonData = [];
    try {
      const existingData = await readFile(jsonPath, 'utf-8');
      jsonData = JSON.parse(existingData);
    } catch (error) {
      // If the JSON file doesn't exist or is invalid, ignore the error
    }

    // Add the image name to the JSON data
    jsonData.push(file.name);

    // Write the updated JSON data back to the JSON file
    await writeFile(jsonPath, JSON.stringify(jsonData, null, 2), 'utf-8');

    return new NextResponse(
      JSON.stringify({ success: true }),
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return new NextResponse(
      JSON.stringify({ success: false }),
      { status: 500 }
    );
  }
}
