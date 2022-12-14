//Iconos
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";

const Pagination = ({ page, pageCount, total }) => {
    return (
        <div>
            {/* Paginación */}
            <div className="flex flex-col items-center mt-10">
                <span className="text-sm text-gray-700 dark:text-gray-400">
                    Mostrando <span className="font-semibold text-gray-900 dark:text-white">{page}</span> de <span className="font-semibold text-gray-900 dark:text-white">{pageCount}</span> de <span className="font-semibold text-gray-900 dark:text-white">{total}</span> {total > 1 ? 'registros' : 'registro'}
                </span>
                <div className="inline-flex mt-2 xs:mt-0 space-x-2">
                    <button className="btn-pagination">
                        <ChevronLeftIcon className="w-5 h-5" />
                        <span>Anterior</span>
                    </button>
                    <button className="btn-pagination">
                        <span>Siguiente</span>
                        <ChevronRightIcon className="w-5 h-5" />

                    </button>
                </div>
            </div>
        </div>
    )
}

export default Pagination