import { Camera, Trash } from 'phosphor-react';
import html2canvas from 'html2canvas';
import { FormEvent, useState } from 'react';
import Loading from './Loading';


interface IScreenshotButton {
  onScreenshotTook: (screenshot: string | null) => void
  screenshot: string | null
}

const ScreenshotButton = ({ onScreenshotTook, screenshot }: IScreenshotButton) => {
  const [isTakingShoot, setIsTakingShoot] = useState<null | boolean>(null)

  const handleTakeScreenshot = async (event: FormEvent) => {
    event.preventDefault()
    setIsTakingShoot(true)
    const canvas = await html2canvas(document.querySelector('html')!)
    const base64image = canvas.toDataURL('image/png')
    onScreenshotTook(base64image)
    setIsTakingShoot(false)
  }

  if (screenshot) {
    return (
      <button
        onClick={(e) => {
          e.preventDefault()
          onScreenshotTook(null)
        }}
        className="p-1 w-10 h-10 rounded border-transparent flex justify-end items-end"
        style={{
          backgroundImage: `url(${screenshot})`,
          backgroundPosition: 'right bottom',
          backgroundSize: 180,
        }}
      >
        <Trash weight="fill" />
      </button>
    )
  }

  return (
    <button onClick={handleTakeScreenshot} className='p-2 bg-red-500 rounded'>
      {isTakingShoot ? <Loading /> : <Camera className='w-6 h-6' />}
    </button>
  )
}

export default ScreenshotButton