import React, { Fragment } from 'react'
import { Listbox, Transition } from '@headlessui/react'

const suits = ["hearts", "diamonds", "clubs", "spades"]
const values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A']

export default function GuessTable({selectedSuit, selectedValue, setSelectedSuit, setSelectedValue}) {

    return (
        <div className="w-full flex justify-center">
          <Listbox value={selectedSuit} onChange={setSelectedSuit}>
            <div className="w-1/5">
              <Listbox.Button className="w-full mx-4 py-2 bg-white rounded-lg shadow-md cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-orange-300 focus-visible:ring-offset-2 focus-visible:border-indigo-500 sm:text-sm">
                <span className="block truncate">{selectedSuit}</span>
                {/* <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                  <SelectorIcon
                    className="w-5 h-5 text-gray-400"
                    aria-hidden="true"
                  />
                </span> */}
              </Listbox.Button>
              <Transition
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Listbox.Options className="absolute  py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                  {suits.map((person, personIdx) => (
                    <Listbox.Option
                      key={personIdx}
                      className={({ active }) =>
                        `cursor-default select-none relative py-2 pl-10 pr-4 ${
                          active ? 'text-amber-900 bg-amber-100' : 'text-gray-900'
                        }`
                      }
                      value={person}
                    >
                      {({ selectedSuit }) => (
                        <>
                          <span
                            className={`block truncate ${
                                selectedSuit ? 'font-medium' : 'font-normal'
                            }`}
                          >
                            {person}
                          </span>
                          {/* {selectedSuit ? (
                            // <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                            //   <CheckIcon className="w-5 h-5" aria-hidden="true" />
                            // </span>
                          ) : null} */}
                        </>
                      )}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Transition>
            </div>
          </Listbox>
          <Listbox value={selectedValue} onChange={setSelectedValue}>
            <div className="w-1/5">
              <Listbox.Button className=" w-full mx-8 py-2 bg-white rounded-lg shadow-md cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-orange-300 focus-visible:ring-offset-2 focus-visible:border-indigo-500 sm:text-sm">
                <span className="block truncate">{selectedValue}</span>
                {/* <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                  <SelectorIcon
                    className="w-5 h-5 text-gray-400"
                    aria-hidden="true"
                  />
                </span> */}
              </Listbox.Button>
              <Transition
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Listbox.Options className="absolute py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                  {values.map((person, personIdx) => (
                    <Listbox.Option
                      key={personIdx}
                      className={({ active }) =>
                        `cursor-default select-none relative py-2 pl-10 pr-4 ${
                          active ? 'text-amber-900 bg-amber-100' : 'text-gray-900'
                        }`
                      }
                      value={person}
                    >
                      {({ selectedValue }) => (
                        <>
                          <span
                            className={`block truncate ${
                                selectedValue ? 'font-medium' : 'font-normal'
                            }`}
                          >
                            {person}
                          </span>
                          {/* {selectedSuit ? (
                            // <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                            //   <CheckIcon className="w-5 h-5" aria-hidden="true" />
                            // </span>
                          ) : null} */}
                        </>
                      )}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Transition>
            </div>
          </Listbox>
        </div>
      )
}
