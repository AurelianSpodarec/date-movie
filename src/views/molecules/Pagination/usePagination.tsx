import { useState } from "react";
import { useLocation, useSearchParams } from "react-router-dom";



const usePagination = (data:any) => {
    if(!data) return <></>
    
    let [searchParams, setSearchParams] = useSearchParams();
    
    const location = useLocation();
    const existingSearchParams = new URLSearchParams(location.search);
    const pageValue = parseInt(existingSearchParams.get('page') || 1);
    
    
    const totalPages = data && data.total_pages;
    const currentPage = data && data.page

    const firstPage = currentPage === 1;
    const lastPage = currentPage === data.totalPages;


     // Page Helpers 
    // ==========================================

    function snapToTop() {
        window.scrollTo(0, 0);
    }
    
    const updateSearchParams = (newPageValue: number) => {
        existingSearchParams.set("page", String(newPageValue));
        setSearchParams(existingSearchParams);
        snapToTop()
    };


    // Page Functionality 
    // ==========================================

    const goToNextPage = () => {
        if (pageValue === data.totalPages) return;
        updateSearchParams(pageValue + 1);
    };

    const goToPreviousPage = () => {
        if(pageValue === 1) return;
        updateSearchParams(pageValue - 1);
    };
    
    const goToPage = ({ page }:any) => {
        existingSearchParams.set("page", String(page));
        setSearchParams(existingSearchParams.toString());
    };

    return {
        currentPage,
        firstPage,
        lastPage,
        totalPages,
        goToNextPage,
        goToPreviousPage,
        goToPage
    }
}

export default usePagination;