import type { FC } from "react";
// import { useTranslations } from "next-intl";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import type { UseFormReturn } from "react-hook-form";
import type { ReadStudyItemInput } from "@/shared/api/schemas";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
} from "@/components/ui/pagination";
import { range } from "es-toolkit";

type StudyItemTableFooterProps = {
  form: UseFormReturn<ReadStudyItemInput>;
  totalCount?: number;
};

export const StudyItemTableFooter: FC<StudyItemTableFooterProps> = () => {
  // const t = useTranslations("StudyItemTable");
  // const { pages, showLeftEllipsis, showRightEllipsis } = usePagination({
  //   currentPage: table.getState().pagination.pageIndex + 1,
  //   totalPages: table.getPageCount(),
  //   paginationItemsToDisplay: 5,
  // });
  return (
    <div className="grow">
      <Pagination>
        <PaginationContent>
          {/* Previous page button */}
          <PaginationItem>
            <Button
              size="icon"
              variant="outline"
              className="disabled:pointer-events-none disabled:opacity-50"
              // onClick={() => table.previousPage()}
              // disabled={!table.getCanPreviousPage()}
              aria-label="Go to previous page"
            >
              <ChevronLeftIcon size={16} aria-hidden="true" />
            </Button>
          </PaginationItem>

          {/* Left ellipsis (...) */}
          {/* {showLeftEllipsis && (
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
          )} */}

          {/* Page number buttons */}
          {/* {pages.map((page) => { */}
          {range(10).map((page) => {
            const isActive = page === 1;
            // const isActive = page === table.getState().pagination.pageIndex + 1;
            return (
              <PaginationItem key={page}>
                <Button
                  size="icon"
                  variant={`${isActive ? "outline" : "ghost"}`}
                  // onClick={() => table.setPageIndex(page - 1)}
                  aria-current={isActive ? "page" : undefined}
                >
                  {page}
                </Button>
              </PaginationItem>
            );
          })}

          {/* Right ellipsis (...) */}
          {/* {showRightEllipsis && (
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
          )} */}

          {/* Next page button */}
          <PaginationItem>
            <Button
              size="icon"
              variant="outline"
              className="disabled:pointer-events-none disabled:opacity-50"
              // onClick={() => table.nextPage()}
              // disabled={!table.getCanNextPage()}
              aria-label="Go to next page"
            >
              <ChevronRightIcon size={16} aria-hidden="true" />
            </Button>
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
};
