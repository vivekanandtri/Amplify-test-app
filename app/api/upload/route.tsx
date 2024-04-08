// import { createPresignedPost } from '@aws-sdk/s3-presigned-post'
// import { S3Client } from '@aws-sdk/client-s3'
// import { v4 as uuidv4 } from 'uuid'

// export async function POST(request: Request) {
//   const { filename, contentType } = await request.json()

//   try {
//     const client = new S3Client({ region: process.env.AWS_REGION })
//     const { url, fields } = await createPresignedPost(client, {
//       Bucket: process.env.AWS_BUCKET_NAME="testapp8d58e50f34464798bf3d13d6886d2d3202604-dev",
//       Key: uuidv4(),
//       Conditions: [
//         ['content-length-range', 0, 10485760], // up to 10 MB
//         ['starts-with', '$Content-Type', contentType],
//       ],
//       Fields: {
//         acl: 'public-read',
//         'Content-Type': contentType,
//       },
//       Expires: 600, // Seconds before the presigned post expires. 3600 by default.
//     })

//     return Response.json({ url, fields })
//   } catch (error:any) {
//     return Response.json({ error: error.message })
//   }
// }


import { NextResponse } from "next/server";

export async function POST(req:Request,res:Response){
  let payload = await req.json()
  // if(!payload.name || !payload.File || !payload.Price || !payload.Description){
  //   return NextResponse.json({result : "Require field not found"})
  // }
  if(!payload.name || !payload.File || !payload.Price || !payload.Description){
    return NextResponse.json({result : "Require field not found" ,success : false})
  }
  
  return NextResponse.json({result : "res.body",success : true})
}