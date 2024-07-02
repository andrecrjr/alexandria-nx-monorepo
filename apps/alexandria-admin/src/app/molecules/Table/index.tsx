import { Button, DropdownMenu, Table, DropdownMenuContent, 
  DropdownMenuItem, DropdownMenuTrigger, MoveHorizontalIcon, PlusIcon, 
  TableBody, TableCell, TableHead, TableHeader, TableRow } from "@alexandria/shadcn-ui";

export function ListTableComponent() {
  return (
        <div className="border shadow-sm rounded-lg">
          <div className="flex items-center justify-between border-b bg-muted/40 px-6 py-4">
            <h1 className="text-lg font-semibold">Content</h1>
            <Button>
              <PlusIcon className="h-4 w-4 mr-2" />
              Add Content
            </Button>
          </div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Title</TableHead>
                <TableHead>Author</TableHead>
                <TableHead>Publication Date</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>
                  <div className="font-medium">The Great Gatsby</div>
                </TableCell>
                <TableCell>F. Scott Fitzgerald</TableCell>
                <TableCell>April 10, 1925</TableCell>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger>
                      <Button variant="ghost" size="icon">
                        <MoveHorizontalIcon className="h-4 w-4" />
                        <span className="sr-only">Actions</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuItem onClick={()=>{
                        console.log("editei")
                      }}>Edit</DropdownMenuItem>
                      <DropdownMenuItem>Delete</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
  )
}
