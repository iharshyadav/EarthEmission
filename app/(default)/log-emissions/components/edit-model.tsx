import { FC } from 'react'
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Checkbox, Input, Link, Autocomplete} from "@nextui-org/react";
import { co2Emission } from '../log-emissions-table';

interface editModelProps {
  isOpen : boolean
  co2emission: co2Emission
  onClose : () => void
}

const EditModel: FC<editModelProps> = ({isOpen,co2emission,onClose}) => {
  return (
    <div>
      <Modal
        size="4xl"
        backdrop="opaque"
        isOpen={isOpen}
        onOpenChange={onClose}
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
              <ModalHeader className="flex flex-col gap-1 w-96">
                Edit Your Information
              </ModalHeader>
              {/* <form onSubmit={formSubmitHandler} className='flex flex-col gap-6'> */}
              <ModalBody>
                {/* Company Mail Address */}
                {/* <div>
                      <label className="block text-sm font-medium mb-1" htmlFor="company-name">Emission Name <span className="text-rose-500">*</span></label>
                      <input required id="Name" value={Name} onChange={(event) => setName(event.target.value)} className="form-input w-full" type="text"/>
                    </div> */}

                <Input
                  autoFocus
                  size="lg"
                  name="Name"
                  placeholder="Enter Emission Name"
                  variant="bordered"
                  value={co2emission.Name}
                  //   onChange={(event) => setName(event.target.value)}
                  style={{
                    outline: "none",
                    boxShadow: "none",
                    border: "none",
                  }}
                />

                <div className="flex flex-row gap-20">
                  {/* <div>
                      <label className="block text-sm font-medium mb-1" htmlFor="sectors">Sector <span className="text-rose-500">*</span></label>
                      <ReactSelect 
                        id="sectors" 
                        options={sectors_get.map(sector => ({ label: sector.sector, value: sector.sector }))} 
                        onChange={(selectedOption) => setSector(selectedOption.value)} 
                        className="form-select w-full outline-none"
                        // styles={customStyles}
                      />
                    </div> */}

                  <div>
                    <Input
                      autoFocus
                      size="lg"
                      name="Name"
                      placeholder="Enter Emission Name"
                      variant="bordered"
                      value={co2emission.sector}
                      //   onChange={(event) => setName(event.target.value)}
                      style={{
                        outline: "none",
                        boxShadow: "none",
                        border: "none",
                      }}
                    />
                  </div>

                  <div>
                    <Input
                      autoFocus
                      size="lg"
                      name="Name"
                      placeholder="Enter Emission Name"
                      variant="bordered"
                      value={co2emission.category}
                      //   onChange={(event) => setName(event.target.value)}
                      style={{
                        outline: "none",
                        boxShadow: "none",
                        border: "none",
                      }}
                    />
                  </div>
                </div>

                <div className="flex flex-row gap-20">
                  <div>
                    <Input
                      autoFocus
                      size="lg"
                      name="Name"
                      placeholder="Enter Emission Name"
                      variant="bordered"
                      value={co2emission.region}
                      //   onChange={(event) => setName(event.target.value)}
                      style={{
                        outline: "none",
                        boxShadow: "none",
                        border: "none",
                      }}
                    />
                  </div>
                  <div>
                    <Input
                      autoFocus
                      size="lg"
                      name="Name"
                      placeholder="Enter Emission Name"
                      variant="bordered"
                      // @ts-ignore
                      value={co2emission.co2e}
                      //   onChange={(event) => setName(event.target.value)}
                      style={{
                        outline: "none",
                        boxShadow: "none",
                        border: "none",
                      }}
                    />
                  </div>
                </div>
                <div className="flex flex-row gap-20">
                  <div>
                    <Input
                      autoFocus
                      size="lg"
                      name="Name"
                      placeholder="Enter Emission Name"
                      variant="bordered"
                      // @ts-ignore
                      value={co2emission.year}
                      //   onChange={(event) => setName(event.target.value)}
                      style={{
                        outline: "none",
                        boxShadow: "none",
                        border: "none",
                      }}
                    />
                  </div>
                  <div>
                    <Input
                      autoFocus
                      size="lg"
                      name="Name"
                      placeholder="Enter Emission Name"
                      variant="bordered"
                      // @ts-ignore
                      value={co2emission.co2e_unit}
                      //   onChange={(event) => setName(event.target.value)}
                      style={{
                        outline: "none",
                        boxShadow: "none",
                        border: "none",
                      }}
                    />
                  </div>
                </div>

                {/* {sector === 'Information and Communication' && (
                      <>
                    <AddemissionsCloud ref={childRef} sectorProp={sector} categoryProp={category_set} nameProp={Name} />
                    </>)} */}

                {/* {sector === 'Transport' && (
                       <>
                    <AddemissionsFreight ref={childRef} sectorProp={sector} categoryProp={category_set} nameProp={Name} />
                    </>)} */}
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="flat" onPress={onClose}>
                  Cancel
                </Button>
                <Button
                  type="submit"
                  color="primary"
                  onPress={onClose}
                  //   onClick={handleChildSubmit}
                >
                  Edit
                </Button>
              </ModalFooter>

              {/* </form> */}
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}

export default EditModel