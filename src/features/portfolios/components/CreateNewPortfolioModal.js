import React from "react";
import { useDispatch } from "react-redux";
import { nanoid } from "nanoid";
import { useForm } from "react-hook-form";
import {
  Modal,
  ModalContent,
  ModalBody,
  ModalFooter,
  Button,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
} from "@chakra-ui/react";

import { CREATE_NEW_PORTFOLIO } from "../actions/portfoliosActionTypes";

function CreateNewPortfolioModal(props) {
  const { isOpen, onClose } = props;
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "New portfolio",
    },
  });

  function onSubmit(data) {
    const payload = {
      id: nanoid(),
      name: data.name,
      coins: [],
    };
    dispatch({ type: CREATE_NEW_PORTFOLIO, payload });
    onClose();
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalContent>
        <form onSubmit={handleSubmit(onSubmit)}>
          <ModalBody>
            <FormControl>
              <FormLabel>Portfolio name</FormLabel>
              <Input
                placeholder="New portfolio"
                {...register("name", {
                  required: { value: true, message: "Name is required!" },
                })}
              />
              {errors.name && (
                <FormErrorMessage>{errors.name.message}</FormErrorMessage>
              )}
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button type="submit">Create portfolio</Button>
          </ModalFooter>
        </form>
      </ModalContent>
    </Modal>
  );
}

export default CreateNewPortfolioModal;
