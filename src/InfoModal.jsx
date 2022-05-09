import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState, useEffect } from 'react'
import Card from './Card'


export default function InfoModal({ open, close}) {
    let [isOpen, setIsOpen] = useState(true)

    function closeModal() {
        setIsOpen(false)
    }    

    useEffect(() => {
        setIsOpen(open)
    }, [open])

    return (
        <>
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">                                    
                                    <div className="mt-2">
                                        <p className="text-md font-bold text-gray-500 mb-4">
                                            Guess the POKERDLE in six tries.
                                        </p>
                                        <p className="text-sm text-gray-500 mb-4">
                                            In each row you are against the opponent with your own hand and the row of cards (Texas hold'em rules)                                            
                                        </p>
                                        <p className="text-sm font-bold text-gray-500 mb-4">
                                            Your job is to guess the opponents hand
                                        </p>
                                        <p className="text-sm text-gray-500 mb-4">
                                            If your hand wins the opponents, a green <span className='text-green-400'>V</span> mark will show next to it, else, a red <span className='text-red-400'>X</span> mark
                                        </p>
                                        <div>Your hand</div>
                                        <div className='flex flex-row'>
                                            <Card card={{value: '7', suit:'hearts'}}></Card>
                                            <Card card={{value: '10', suit:'clubs'}}></Card> 
                                        </div>
                                        <div className=' mt-4'>If you win</div>
                                        <div className='flex flex-row align-middle'>
                                            <div className='flex mr-2 mt-2 mb-2 justify-center text-center items-center text-green-300 text-md font-normal'>
                                                {'V'}
                                            </div>
                                            <Card card={{value: '7', suit:'diamonds'}}></Card>
                                            <Card card={{value: '7', suit:'clubs'}}></Card>
                                            <Card card={{value: 'Q', suit:'hearts'}}></Card>
                                            <Card card={{value: '10', suit:'spades'}}></Card>
                                            <Card card={{value: '3', suit:'hearts'}}></Card>
                                        </div>
                                        <div className=' mt-4'>If you lose</div>
                                        <div className='flex flex-row align-top'>
                                        <div className='flex mr-2 mt-2 mb-2 justify-center text-center items-center text-red-300 text-md font-normal'>
                                            {'X'}
                                        </div>
                                            <Card card={{value: '2', suit:'hearts'}}></Card>
                                            <Card card={{value: 'A', suit:'diamonds'}}></Card>
                                            <Card card={{value: 'J', suit:'clubs'}}></Card>
                                            <Card card={{value: '6', suit:'hearts'}}></Card>
                                            <Card card={{value: '3', suit:'clubs'}}></Card>
                                        </div>
                                    </div>
                                    <div className='flex flex-row mt-2'>
                                        {/* <Card card={hand[0]} />
                                        <Card card={hand[1]} /> */}
                                    </div>
                                    <div className="mt-4">
                                        <button
                                            type="button"
                                            className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                            onClick={closeModal}
                                        >
                                            Got it, thanks!
                                        </button>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}
