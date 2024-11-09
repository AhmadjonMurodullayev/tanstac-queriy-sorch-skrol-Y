import React from "react";
import { Header } from "../../components/header";
import { useProductsList } from "./service/query/useProductsList";
import { Card } from "../../components/card";
import { Button, Container, Grid2, Stack } from "@mui/material";
import { useInView } from "react-intersection-observer";
import Copyuter from "../../components/copyuter";
import { useCopyuter } from "./service/query/useCopyuter";

export const Home = () => {
  const { data, isLoading, fetchNextPage, hasNextPage } = useProductsList();
  const {
    data: copyuter,
    isLoading: copyuterLoading,
    fetchNextPage: fetchNextPageCopyuter,
    hasNextPage: hasNextPageCopyuter,
  } = useCopyuter();
  
  const { ref: productsRef, inView: productsInView } = useInView();
  const { ref: copyuterRef, inView: copyuterInView } = useInView();

  React.useEffect(() => {
    if (productsInView && hasNextPage) fetchNextPage();
  }, [productsInView, hasNextPage]);

  React.useEffect(() => {
    if (copyuterInView && hasNextPageCopyuter) fetchNextPageCopyuter();
  }, [copyuterInView, hasNextPageCopyuter]);

  return (
    <div>
      <Header />
      <Container>
        <Grid2  spacing={"20px"} container>
          {isLoading ? (
            <h1>Loading...</h1>
          ) : (
            <>
              {data?.pages.map((page) =>
                page.map((item) => (
                  <Grid2 item xs={12} sm={3} md={2} lg={2} key={item.id}>
                    <Card {...item} />
                  </Grid2>
                ))
              )}
            </>
          )}
        </Grid2>
        {hasNextPage && <h1 ref={productsRef}>Loading more products...</h1>}
      </Container>

      <Container>
        <Grid2 container spacing={2}>
          {copyuterLoading ? (
            <h1>Loading copyuters...</h1>
          ) : (
            copyuter?.pages.map((page, pageIndex) =>
              page.map((item) => (
                <Grid2 item xs={12} sm={4} md={3} lg={2} key={`${pageIndex}-${item.id}`}>
                  <Copyuter {...item} />
                </Grid2>
              ))
            )
          )}
          {hasNextPageCopyuter && <h1 ref={copyuterRef}>Loading more copyuters...</h1>}
        </Grid2>
      </Container>
    </div>
  );
};
