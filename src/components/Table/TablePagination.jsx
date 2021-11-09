import {
  Stack,
  Button,
  chakra,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Text,
  ButtonGroup,
  Icon,
  IconButton,
} from "@chakra-ui/react";
import React from "react";
import { FiArrowLeft, FiArrowRight, FiFastForward } from "react-icons/fi";

export const TablePagination = React.memo(
  ({
    canPreviousPage,
    pageIndex,
    pageOptions,
    pageCount,
    canNextPage,
    nextPage,
    gotoPage,
    previousPage,
  }) => {
    const handleChange = React.useCallback(
      (value) => {
        const pageNumber = value ? Number(value) - 1 : 0;

        gotoPage(pageNumber);
      },
      [gotoPage]
    );

    return (
      <Stack
        alignItems="center"
        direction={{ md: "row", base: "column" }}
        justifyContent="space-between"
        paddingY={4}
      >
        <Stack direction="row">
          <IconButton
            disabled={!canPreviousPage}
            icon={<Icon as={FiFastForward} />}
            transform="rotate(-180deg)"
            variant="secondary"
            onClick={() => gotoPage(0)}
          />
          <IconButton
            disabled={!canPreviousPage}
            icon={<Icon as={FiArrowLeft} />}
            variant="secondary"
            onClick={() => previousPage()}
          />
        </Stack>
        <Stack alignItems="center" direction="row">
          <Text>Página</Text>
          <Text as="b" variant="bold">
            {pageIndex + 1} de {pageOptions.length}
          </Text>
          <NumberInput
            bg="white"
            defaultValue={pageIndex + 1}
            max={pageCount}
            min={1}
            w="auto"
            onChange={(value) => {
              handleChange(value);
            }}
          >
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
        </Stack>

        <ButtonGroup>
          <IconButton
            disabled={!canNextPage}
            icon={<Icon as={FiArrowRight} />}
            variant="primary"
            onClick={() => nextPage()}
          />
          <IconButton
            disabled={!canNextPage}
            icon={<Icon as={FiFastForward} />}
            variant="secondary"
            onClick={() => gotoPage(pageCount - 1)}
          />
        </ButtonGroup>
      </Stack>
    );
  }
);
