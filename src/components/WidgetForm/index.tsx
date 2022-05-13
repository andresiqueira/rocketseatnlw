import bugImageUrl from '../../assets/bug.svg'
import idealImageUrl from '../../assets/idea.svg'
import thoughtImageUrl from '../../assets/thought.svg'
import { FeedbackTypeStep } from './Pages/FeedbackTypeStep';
import { FeedbackContentStep } from './Pages/FeedbackContentStep';
import { FeedbackSuccessStep } from './Pages/FeedbackSuccessStep';
import { useState } from 'react';

export const options = {
    BUG: {
        title: 'Problema',
        image: {
            src: bugImageUrl,
            alt: 'Imagem de um besouro'
        }
    },
    IDEA: {
        title: 'Ideia',
        image: {
            src: idealImageUrl,
            alt: 'Imagem de uma lâmpada'
        }
    },
    THOUGHT: {
        title: 'Outro',
        image: {
            src: thoughtImageUrl,
            alt: 'Imagem de um balão de pensamento'
        }
    }
}

export type FeedbackTypes = keyof typeof options

const WidgetForm = () => {
    const [feedback, setFeedback] = useState<FeedbackTypes | null>(null);
    const [feedbackSent, setFeedbackSent] = useState(false)

    const handleRestartFeedback = () => {
        setFeedback(null)
        setFeedbackSent(false)
    }

    return (
        <div className="p-4 bg-[#18181B] relative rounded-2xl mb-4 text-white flex flex-col items-center w-[calc(100vw-5rem)] md:w-auto">
            {
                feedbackSent ? <FeedbackSuccessStep handleRestartFeedback={handleRestartFeedback} /> :
                    (!feedback ? <FeedbackTypeStep onFeedbackTypeChanged={setFeedback} />
                        : <FeedbackContentStep
                            feedbackType={feedback}
                            handleRestartFeedback={handleRestartFeedback}
                            onFeedbackSent={() => setFeedbackSent(true)}
                        />)
            }
            <footer>
                Feito com ♥ pela Rocketseat
            </footer>
        </div>
    )
}
export default WidgetForm;