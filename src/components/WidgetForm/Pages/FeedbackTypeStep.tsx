import { X } from 'phosphor-react';
import { Popover } from '@headlessui/react';
import { options } from "../../WidgetForm"
import { FeedbackTypes } from "../../WidgetForm"

interface IsetFeedbackProps {
  onFeedbackTypeChanged: (type: FeedbackTypes) => void
}

export const FeedbackTypeStep = ({ onFeedbackTypeChanged }: IsetFeedbackProps) => {
  return (
    <>
      <header>
        Deixe seu feedback
        <Popover.Button>
          <X className='top-5 right-5 absolute' />
        </Popover.Button>
      </header>
      <div className='flex flex-row items-center py-8 w-full gap-2'>
        {Object.entries(options).map(([key, value]) => {
          return (
            <button
              className='flex flex-col items-center w-24 bg-black gap-2 border-2 rounded-md p-4'
              onClick={() => {
                onFeedbackTypeChanged(key as FeedbackTypes)
              }}
              key={key}
            >
              <img src={value.image.src} alt={value.image.alt} />
              <span>{value.title}</span>
            </button>
          )
        })}
      </div>
    </>
  )
}

