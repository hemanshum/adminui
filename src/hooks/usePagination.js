import { useState, useEffect, useCallback } from "react";

const usePagination = () => {
  const [items, setItems] = useState([]);
  const [pages, setPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageItems, setPageItems] = useState([]);
  const [startNum, setStartNum] = useState(0);

  const currentPageItems = useCallback(() => {
    setPageItems(items.slice(startNum, 10));
  }, [items, startNum]);

  useEffect(() => {
    setPages(Math.trunc(items.length / 10));
  }, [items]);

  useEffect(() => {
    currentPageItems();
  }, [currentPageItems]);

  return [pageItems, setItems, pages, currentPage, setCurrentPage, setStartNum];
};

export default usePagination;
