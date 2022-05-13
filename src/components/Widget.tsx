import { ChatTeardropDots } from "phosphor-react";
import { Popover } from '@headlessui/react';
import WidgetForm from './WidgetForm'

const Widget = () => {
    return (
        <Popover className="absolute bottom-10 right-10 flex flex-col items-end" >
            <Popover.Panel title="">
                <WidgetForm />
            </Popover.Panel>
            
            <Popover.Button className="rounded-full text-white overflow-hidden p-3 bg-[#8257E5] flex items-center  after:w-0 after:ease-in-out after:transition-all after:duration-500 hover:after:content-['Feedback'] hover:after:w-20">
                <ChatTeardropDots className='w-6 h-6' />
            </Popover.Button>
        </Popover>
    )
}

export default Widget;