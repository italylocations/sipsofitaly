import { S3Client, PutObjectCommand, HeadObjectCommand } from '@aws-sdk/client-s3'
import { createReadStream, readdirSync, statSync } from 'fs'
import { join } from 'path'
import dotenv from 'dotenv'
dotenv.config({ path: '.env.local' })

const s3 = new S3Client({
  region: 'auto',
  endpoint: process.env.R2_ENDPOINT,
  credentials: {
    accessKeyId: process.env.R2_ACCESS_KEY_ID,
    secretAccessKey: process.env.R2_SECRET_ACCESS_KEY
  }
})

const Bucket = process.env.R2_BUCKET
const files = readdirSync('./videos').filter(f => f.endsWith('.mp4'))

for (const file of files) {
  const path = join('./videos', file)
  const { size } = statSync(path)

  try {
    const head = await s3.send(new HeadObjectCommand({ Bucket, Key: file }))
    if (head.ContentLength === size) {
      console.log(`⏭️  Skip (già presente): ${file}`)
      continue
    }
    console.log(`♻️  Re-upload (dimensione diversa): ${file}`)
  } catch (err) {
    if (err.name !== 'NotFound' && err.$metadata?.httpStatusCode !== 404) throw err
  }

  const mb = (size / 1024 / 1024).toFixed(1)
  console.log(`⬆️  Upload ${file} (${mb} MB)...`)
  await s3.send(new PutObjectCommand({
    Bucket,
    Key: file,
    Body: createReadStream(path),
    ContentLength: size,
    ContentType: 'video/mp4'
  }))
  console.log(`✅ Uploaded: ${file}`)
}

console.log('🎉 Upload completato!')
