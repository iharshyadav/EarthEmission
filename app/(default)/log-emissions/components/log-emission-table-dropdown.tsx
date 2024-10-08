import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button} from "@nextui-org/react";
import EditModel from './edit-model';
import { co2Emission } from '../log-emissions-table';
import { ChevronRight } from 'lucide-react';
import ScopeDropdown from './scope-dropdown';

interface Co2EmissionsTableItemProps {
    co2emission: co2Emission
    count: number
    onCheckboxChange: (id: number, checked: boolean) => void
    isSelected: boolean
    className : string
    
  }

const MultilevelDropdown = ({ co2emission, onCheckboxChange, isSelected }:Co2EmissionsTableItemProps) => {

  const [isMainOpen, setIsMainOpen] = useState(false);
  const [isSubOpen, setIsSubOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

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

  useEffect(() => {
    function handleClickOutside(event:MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        if(isSubOpen == true){
          setIsMainOpen(true); 
          setIsSubOpen(false);
        }else{
          setIsSubOpen(false);
          setIsMainOpen(false); 
        }
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownRef]);

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
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsMainOpen(!isMainOpen)}
        className=" text-[#929faf] font-bold text-2xl rounded-md"
      >
        ...
      </button>
      {isMainOpen && (
        <div className="absolute right-8 mt-2 w-32 z-50 bg-[#1e293c] border text-white border-gray-700 rounded-md shadow-lg">
          <div className="block py-2 hover:bg-[#162a4e]">
            <button
              onClick={handleEditClick}
              className={`font-medium text-sm flex py-1 px-3 dark:text-slate-200`}
            >
              EDIT
            </button>
          </div>

          <div className="relative group">
            <button
              onClick={() => setIsSubOpen(!isSubOpen)}
              className="flex w-full hover:bg-[#162a4e] items-center justify-between text-left px-3 py-2"
            >
              <div>LABEL</div>
              <ChevronRight size={18} />
            </button>
            {isSubOpen && <ScopeDropdown name={co2emission.Name} />}
          </div>
          <button className="block py-2 w-full hover:bg-[#162a4e]">
            <button
              onClick={handleDeleteClick}
              className={`font-medium text-sm flex py-1 px-3  text-rose-600`}
            >
              DELETE
            </button>
          </button>
          <Link
            className={`font-medium text-sm flex py-2 px-3  dark:text-slate-200 hover:bg-[#162a4e]`}
            href={`/viewpage/${co2emission.Name}`}
          >
            VIEW MORE
          </Link>
        </div>
      )}
      
     {/* Edit Model component */}
      <EditModel
        isOpen={isEditModelOpen}
        co2emission={co2emission}
        onClose={handleCloseEditModel}
      />

      {/* Modal backdrop animation */}
      <Modal
        size="md"
        backdrop="opaque"
        isOpen={isDeleteModalOpen}
        onOpenChange={handleCloseDeleteModal}
        placement="top-center"
        classNames={{
          backdrop:
            "bg-gradient-to-t from-zinc-900 to-zinc-900/10 backdrop-opacity-20",
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
          },
        }}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 font-bold">
                Are you absolutely sure?
              </ModalHeader>
              <ModalBody>
                <p className="font-medium">
                  This action cannot be undone. This will permanently delete
                  your emission.
                </p>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <form
                  onSubmit={(e) => {
                    e.preventDefault(); // Prevent the default form submission behavior
                    handleDelete(); // Call deleteApikey with an object containing the array of selectedItems
                  }}
                >
                  <Button
                    type="submit"
                    className="text-white bg-indigo-500 hover:bg-indigo-600 cursor-pointer"
                  >
                    Confirm
                  </Button>
                </form>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
};

export default MultilevelDropdown;
