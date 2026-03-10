import {
  TableCell,
  TableFooter as Footer,
  TableRow,
} from "@/components/ui/table";

import { TableLabel } from "../table-label";

export const TableFooter = () => {
  return (
    <Footer>
      <TableRow>
        <TableCell className="h-6" colSpan={7}>
          <div className="flex flex-row text-xs">
            <TableLabel />
          </div>
        </TableCell>
      </TableRow>
    </Footer>
  );
};
