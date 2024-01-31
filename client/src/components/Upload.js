"use client";

import ImageUpload from "@/app/tailwindComps/ImageUpload";
import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure, Lorem, Progress } from "@chakra-ui/react";
import { useState } from "react";
import { storage } from "@/app/firebase";
import { ref, uploadBytesResumable } from "firebase/storage";
import { v4 as uuidv4 } from 'uuid';
import { useToast } from '@chakra-ui/react'

const Upload = () => {
    const toast = useToast()
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [file, setFile] = useState(null)
    const [uploading, setUploading] = useState({ progress: 0, status: 'not started' })
    const onFileCancel = () => {
        setFile(null)
    }

    const onUpload = () => {

        const storageRef = ref(storage, `reports/${uuidv4()}/` + file.name)
        const uploadTask = uploadBytesResumable(storageRef, file)
        uploadTask.on('state_changed',
            (snapshot) => {
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                // console.log('Upload is ' + progress + '% done')
                switch (snapshot.state) {
                    case 'paused':
                        // console.log('Upload is paused')
                        setUploading({ progress, status: 'paused' })
                        break
                    case 'running':
                        // console.log('Upload is running')
                        setUploading({ progress, status: 'running' })
                        break
                }
            },
            (error) => {
                console.log(error)
                toast({
                    title: "Report upload failed.",
                    description: "We couldn't upload your report for analysis.",
                    status: "error",
                    duration: 3000,
                    isClosable: true,
                })
            },
            () => {
                toast({
                    title: "Report uploaded.",
                    description: "We've uploaded your report for analysis.",
                    status: "success",
                    duration: 3000,
                    isClosable: true,
                })
                onClose()
                onFileCancel()
            }
        )
    }


    console.log(file)
    return (
        <>
            <Button onClick={onOpen}>Open Modal</Button>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Upload your report</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        {
                            file ? <div class="rounded-md bg-[#F5F7FB] py-4 px-8">
                                <div class="flex items-center justify-between">
                                    <span class="truncate pr-3 text-base font-medium text-[#07074D]">
                                        {file.name}
                                    </span>
                                    <button onClick={() => {
                                        setFile(null)

                                    }} class="text-[#07074D]">
                                        <svg
                                            width="10"
                                            height="10"
                                            viewBox="0 0 10 10"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                fill-rule="evenodd"
                                                clip-rule="evenodd"
                                                d="M0.279337 0.279338C0.651787 -0.0931121 1.25565 -0.0931121 1.6281 0.279338L9.72066 8.3719C10.0931 8.74435 10.0931 9.34821 9.72066 9.72066C9.34821 10.0931 8.74435 10.0931 8.3719 9.72066L0.279337 1.6281C-0.0931125 1.25565 -0.0931125 0.651788 0.279337 0.279338Z"
                                                fill="currentColor"
                                            />
                                            <path
                                                fill-rule="evenodd"
                                                clip-rule="evenodd"
                                                d="M0.279337 9.72066C-0.0931125 9.34821 -0.0931125 8.74435 0.279337 8.3719L8.3719 0.279338C8.74435 -0.0931127 9.34821 -0.0931123 9.72066 0.279338C10.0931 0.651787 10.0931 1.25565 9.72066 1.6281L1.6281 9.72066C1.25565 10.0931 0.651787 10.0931 0.279337 9.72066Z"
                                                fill="currentColor"
                                            />
                                        </svg>
                                    </button>
                                </div>
                                <div class="relative mt-5 h-[6px] w-full rounded-lg bg-[#E2E5EF]">
                                    <Progress value={uploading.progress} colorScheme='blue' />
                                </div>
                            </div>
                                : (<ImageUpload>
                                    <input id="dropzone-file" type="file" class="hidden" onChange={(e) => { setFile(e.target.files[0]) }} />
                                </ImageUpload>)
                        }

                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme="red" variant='ghost' onClick={() => {
                            onClose()
                            onFileCancel()
                        }}>Cancel</Button>
                        <Button colorScheme='blue' mr={3} isDisabled={file ? false : true}
                            onClick={() => {
                                onUpload()
                            }}
                        >
                            Med Scan it
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>

        </>
    )
}

export default Upload