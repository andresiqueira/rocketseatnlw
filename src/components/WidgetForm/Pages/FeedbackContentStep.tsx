import { FeedbackTypes, options } from "../../WidgetForm"
import { X, ArrowLeft, Camera } from 'phosphor-react';
import { Popover } from '@headlessui/react';
import ScreenshotButton from "../../ScreenshotButton"
import { useState, FormEvent } from "react"

interface Ifeedback {
  feedbackType: FeedbackTypes
  onFeedbackSent: () => void
  handleRestartFeedback: () => void
}

export const FeedbackContentStep = ({ feedbackType, handleRestartFeedback, onFeedbackSent }: Ifeedback) => {
  const feedbackTypeInfo = options[feedbackType]
  const [screenshot, setScreenshot] = useState<string | null>(null)
  const [comment, setComment] = useState('')

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    console.log({
      screenshot,
      comment,
    })
    onFeedbackSent()
  }

  console.log('valor do ss ', screenshot);


  return (
    <>
      <header>
        <button>
          <ArrowLeft weight="bold" className="w-4 h-4 top-5 left-5 absolute" onClick={handleRestartFeedback} />
        </button>
        <span className="text-xl leading-6 flex items-center gap-2">
          <img src={feedbackTypeInfo.image.src} alt={feedbackTypeInfo.image.alt} className="w-6 h-6" />
          {feedbackTypeInfo.title}
        </span>
        <Popover.Button>
          <X className='top-5 right-5 absolute' />
        </Popover.Button>
      </header>
      <form onSubmit={handleSubmit}
        className='flex flex-col my-4 w-full'>
        <textarea
          className='bg-[#18181B] scrollbar-thumb-gray-500 scrollbar-thin scrollbar-track-transparent rounded p-2 my-2 min-w-[19rem] min-h-[7rem] w-full' name="" id=""
          placeholder="conte com detalhes"
          onChange={(e) => setComment(e.target.value)}
        ></textarea>
        <span className='flex gap-2 mt-2'>
          <ScreenshotButton
            screenshot={screenshot}
            onScreenshotTook={setScreenshot}
          />
          <button disabled={!comment} className='bg-[#8257E5] disabled:opacity-50 p-2 w-full rounded'>
            Enviar Feedback
          </button>
        </span>
      </form>
    </>
  )
}