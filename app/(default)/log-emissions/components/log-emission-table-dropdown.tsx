'use client'

import { Menu, Transition } from '@headlessui/react'
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";
import Link from 'next/link'
import { EventHandler, useState } from 'react'
import { co2Emission } from '../log-emissions-table';
import EditModel from './edit-model';

interface Co2EmissionsTableItemProps {
  co2emission: co2Emission
  count: number
  onCheckboxChange: (id: number, checked: boolean) => void
  isSelected: boolean
  align :'right',
  className : string
}

export default function TableDropdown({
  align,
  className,
  co2emission, onCheckboxChange, isSelected 
}: Co2EmissionsTableItemProps) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  
  const [opened, setOpened] = useState(false)
  const {isOpen, onOpen, onOpenChange} = useDisclosure();

  const [isEditModelOpen, setIsEditModelOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const handleEditClick = (e:React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsEditModelOpen(true);
  };

  const handleDeleteClick = (e:React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsDeleteModalOpen(true);
  };

  const handleCloseEditModel = () => {
    setIsEditModelOpen(false);
  };

  const handleCloseDeleteModal = () => {
    setIsDeleteModalOpen(false);
  };
  const handleDelete = async () => {
    if (co2emission.id === 0) return;

    try {
      // await deleteLogEmission({ ids: co2emission.id });
       // Clear selected items after deletion
    } catch (error) {
      console.error("Error deleting Private Emission Factor:", error);
    }
  };

  return (
    <Menu as="div" className={`relative inline-flex ${className}`}>
      {({ open }) => (
        <>
          <Menu.Button
            className={`rounded-full ${open ? 'bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-400' : 'text-slate-400 hover:text-slate-500 dark:text-slate-500 dark:hover:text-slate-400'}`}
          >
            <span className="sr-only">Menu</span>
            <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32">
              <circle cx="16" cy="16" r="2" />
              <circle cx="10" cy="16" r="2" />
              <circle cx="22" cy="16" r="2" />
            </svg>
          </Menu.Button>
          <Transition
            className={`origin-top-right z-10 absolute top-full min-w-[9rem] bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 py-1.5 rounded shadow-lg overflow-hidden mt-1 ${align === 'right' ? 'right-0' : 'left-0'}`}
            enter="transition ease-out duration-200 transform"
            enterFrom="opacity-0 -translate-y-2"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-out duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Menu.Items as="ul" className="focus:outline-none">
              <Menu.Item as="li">
                {({ active }) => (
                  <button onClick={handleEditClick} className={`font-medium text-sm flex py-1 px-3 ${active ? 'text-slate-800 dark:text-slate-200' : 'text-slate-600 dark:text-slate-300'}`}>
                    EDIT
                  </button>
                )}
              </Menu.Item>
              <Menu.Item as="li">
                {({ active }) => (
                  <div className="relative flex items-center justify-between">
                  <button onClick={(e) => {
                      e.preventDefault(); 
                      setIsDropdownOpen(!isDropdownOpen);
                      console.log(isDropdownOpen)
                    }} className={`font-medium text-sm flex py-1 px-3 ${isDropdownOpen ? 'text-slate-800 dark:text-slate-200' : 'text-slate-600 dark:text-slate-300'}`} >
                    LABEL
                  </button>
                  {isDropdownOpen && active && (
                       <div className="absolute right-full top-0 mt-2 mr-2 w-48 z-99 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5">
                         <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                           <Link href="#option1" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300" role="menuitem">Option 1</Link>
                           <Link href="#option2" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300" role="menuitem">Option 2</Link>
                           <Link href="#option3" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300" role="menuitem">Option 3</Link>
                         </div>
                       </div>
                     )}
                  </div>
                  
                )}
              </Menu.Item>
              <Menu.Item as="li">
                {({ active }) => (
                  <button onClick={handleDeleteClick} className={`font-medium text-sm flex py-1 px-3 ${active ? 'text-rose-600' : 'text-rose-500'}`}>
                    DELETE
                  </button>
                )}
              </Menu.Item> 
              <Menu.Item as="li">
                {({ active }) => (
                  <Link className={`font-medium text-sm flex py-1 px-3 ${active ? 'text-slate-800 dark:text-slate-200' : 'text-slate-600 dark:text-slate-300'}`} href="/view">
                    VIEW MORE
                  </Link>
                )}
              </Menu.Item>                
            </Menu.Items>
          </Transition>
          <EditModel isOpen={isEditModelOpen} co2emission={co2emission} onClose={handleCloseEditModel}/> 
          {/* Modal backdrop animation */}
            <Modal 
            size='md'
            backdrop="opaque" 
            isOpen={isDeleteModalOpen} 
            onOpenChange={handleCloseDeleteModal}
            placement="top-center"
            classNames={{
              backdrop: "bg-gradient-to-t from-zinc-900 to-zinc-900/10 backdrop-opacity-20"
            }}
            motionProps={{
              variants: {
                enter: {
                  y: 0,
                  opacity: 1,
                  transition: {
                    duration: 0.3,
                    ease: "easeOut",
                  },
                },
                exit: {
                  y: -20,
                  opacity: 0,
                  transition: {
                    duration: 0.2,
                    ease: "easeIn",
                  },
                },
              }
            }}
          > 
              <ModalContent>
                {(onClose) => (
                  <>
                    <ModalHeader className="flex flex-col gap-1 font-bold">Are you absolutely sure?</ModalHeader>
                    <ModalBody>
                      <p className='font-medium'>
                      This action cannot be undone. This will permanently delete your emission.
                      </p>
                    </ModalBody>
                    <ModalFooter>
                      <Button color="danger" variant="light" onPress={onClose}>
                        Close
                      </Button>
                      <form onSubmit={(e) => {
                        e.preventDefault(); // Prevent the default form submission behavior
                        handleDelete(); // Call deleteApikey with an object containing the array of selectedItems
                      }}>
                        <Button type="submit" className="text-white bg-indigo-500 hover:bg-indigo-600 cursor-pointer">
                          Confirm
                        </Button>
                      </form>
                    </ModalFooter>
                  </>
                )}
              </ModalContent>
            </Modal>
        </>
      )}
    </Menu>
  )
}