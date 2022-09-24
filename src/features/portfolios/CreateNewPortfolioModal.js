import React from "react";
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

import usePortfolios from "../../hooks/usePortfolios";

function CreateNewPortfolioModal(props) {
  const { isOpen, onClose } = props;
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "New portfolio",
    },
  });
  const { push } = usePortfolios();

  React.useEffect(() => {
    if (!isOpen) {
      reset();
    }
  }, [isOpen, reset]);

  function onSubmit(data) {
    const payload = {
      id: nanoid(),
      name: data.name,
      coins: [],
    };
    push(payload);
    onClose();
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalContent>
        <form onSubmit={handleSubmit(onSubmit)}>
          <ModalBody>
            <FormControl isInvalid={Boolean(errors.name)}>
              <FormLabel>Portfolio name</FormLabel>
              <Input
                size="sm"
                borderRadius="md"
                placeholder="New portfolio"
                {...register("name", {
                  required: { value: true, message: "Name is required!" },
                })}
              />
              <FormErrorMessage>{errors?.name?.message}</FormErrorMessage>
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button size="sm" type="submit">
              Create portfolio
            </Button>
          </ModalFooter>
        </form>
      </ModalContent>
    </Modal>
  );
}

export default CreateNewPortfolioModal;
