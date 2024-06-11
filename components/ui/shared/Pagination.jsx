import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import { IconButton } from "@mui/material";

export const Pagination = ({ productsPerPage, totalProducts, paginate, currentPage }) => {
    const pageNumbers = [1, 2, 3, 4, 5];

    for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <nav className="flex items-center justify-end mt-4">
            <IconButton>
                <ArrowBackIos className="text-lg" />
            </IconButton>
            <ul className="flex text-black">
                {pageNumbers?.map((number) => (
                    <li key={number} className="h-7 w-7 mx-1 bg-[#D4D4D4] rounded-md">
                        <button
                            className={`text-white h-full w-full hover:bg-slate-400 hover:rounded-md  ${currentPage === number ? 'bg-green' : ''
                                }`}
                            onClick={''}
                        >
                            {number}
                        </button>
                    </li>
                ))}
            </ul>
            <IconButton>
                <ArrowForwardIos className="text-lg" />
            </IconButton>
        </nav>
    );
};