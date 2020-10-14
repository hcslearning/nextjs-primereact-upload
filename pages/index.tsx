import { FileUpload } from 'primereact/fileupload'

export default function Home({cloudName, preset}) {

  const uploadUrl = `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`

  const beforeUpload = (e) => {
    e.formData.append('upload_preset', preset)
  }

  const uploadReady = (e) => console.dir( JSON.parse(e.xhr.response ) )

  return (
    <>
      <FileUpload name="file" url={uploadUrl} onBeforeUpload={ beforeUpload } onUpload={ uploadReady }></FileUpload>
    </>
  )
}

export async function getStaticProps() {
  const cloudName = process.env.CLOUD_NAME 
  const preset    = process.env.PRESET 

  return {
    props: {
      cloudName: cloudName,
      preset: preset
    }
  }
}