import React, { useState } from "react";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Spinner, getKeyValue } from "@nextui-org/react";
import { useInfiniteScroll } from "@nextui-org/use-infinite-scroll";
import { useAsyncList } from "@react-stately/data";

export default function TopProd() {
  type StringNumberKey<T> = Extract<keyof T, string | number>;
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [hasMore, setHasMore] = useState<boolean>(false);

  let list = useAsyncList<any>({
    async load({ signal, cursor }) {

      if (cursor) {
        setIsLoading(false);
      }

      // If no cursor is available, then we're loading the first page.
      // Otherwise, the cursor is the next URL to load, as returned from the previous page.
      const res = await fetch(cursor || "https://swapi.py4e.com/api/people/?search=", { signal });
      let json = await res.json();

      setHasMore(json.next !== null);

      return {
        items: json.results,
        cursor: json.next,
      };
    },
  });

  const [loaderRef, scrollerRef] = useInfiniteScroll({ hasMore, onLoadMore: list.loadMore });

  return (
    <Table

      isHeaderSticky
      aria-label="Example table with infinite pagination"
      baseRef={scrollerRef}
      bottomContent={
        hasMore ? (
          <div className="flex w-full justify-center">
            <Spinner ref={loaderRef} color="danger" />
          </div>
        ) : null
      }
      classNames={{
        base: "h-[520px] overflow-scroll",
      
      }}
    >
      <TableHeader>
        <TableColumn key="name">Name</TableColumn>
        <TableColumn key="height">Height</TableColumn>
        <TableColumn key="mass">Mass</TableColumn>
        <TableColumn key="birth_year">Birth year</TableColumn>
      </TableHeader>
      <TableBody
  isLoading={isLoading}
  items={list.items}
  loadingContent={<Spinner color="danger" />}
>
{(item: any) => (
  <TableRow key={item.name}>
    {(columnKey: StringNumberKey<typeof item>) => <TableCell>{getKeyValue(item, columnKey)}</TableCell>}
  </TableRow>
)}

</TableBody>


    </Table>
  );
}
