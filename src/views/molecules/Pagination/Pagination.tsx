import usePagination from "./usePagination";
import PageItem from "./_components/PageItem";

//TODO: On page change snap to the top
function Pagination({ currentPage, totalPages }:any) {
    const pager = usePagination({ currentPage, totalPages});

    return (
        <div className="text-white">
        <div className="flex">
        
            <button type="button" aria-label="Pagination: Previous page" onClick={pager.goToPreviousPage} className={`rounded px-6 ${pager.currentPage === 1 ? "cursor-not-allowed bg-yellow-900" : "bg-yellow-700"} `}>
                Prev
            </button>

            <div className="flex">
                <PageItem label="1" />
                <PageItem activePage={currentPage} label={currentPage} />
                <PageItem label={totalPages} />
            </div>

            <button type="button" aria-label="Pagination: Next Page" onClick={pager.goToNextPage} className={`rounded px-6 ${pager.currentPage === totalPages ? "cursor-not-allowed bg-yellow-900" : "bg-yellow-700"} `}>
                Next
            </button>

        </div>
        </div>
    )
}

export default Pagination;