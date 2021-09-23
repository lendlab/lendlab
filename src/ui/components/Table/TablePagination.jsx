import {
  Stack,
  Button,
  chakra,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react";
import React from "react";

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
      <Stack alignItems="center" direction="row" justifyContent="space-between" paddingY={4}>
        <Stack direction="row">
          <Button disabled={!canPreviousPage} variant="secondary" onClick={() => gotoPage(0)}>
            {"<<"}
          </Button>
          <Button disabled={!canPreviousPage} variant="secondary" onClick={() => previousPage()}>
            Volver
          </Button>
        </Stack>
        <Stack alignItems="center" direction="row">
          <chakra.span>
            Página{" "}
            <chakra.strong>
              {" "}
              {pageIndex + 1} de {pageOptions.length}
            </chakra.strong>
          </chakra.span>
          <NumberInput
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

        <Stack direction="row">
          <Button disabled={!canNextPage} variant="primary" onClick={() => nextPage()}>
            Siguiente
          </Button>
          <Button
            disabled={!canNextPage}
            variant="secondary"
            onClick={() => gotoPage(pageCount - 1)}
          >
            {">>"}
          </Button>
        </Stack>
      </Stack>
    );
  }
);
