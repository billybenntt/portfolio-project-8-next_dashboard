'use client';
import {useSearchParams, usePathname, useRouter} from "next/navigation";
import {IconGlass} from '@/assets/icons';
import {useDebouncedCallback} from "use-debounce";

function Search(props: { placeholder: string }) {

    const {placeholder} = props;

    // Get the Search Params
    const searchParams = useSearchParams();
    // Get the current path name
    const pathname = usePathname();
    const {replace} = useRouter()


    const handleSearch = useDebouncedCallback((term: string) => {
            const params = new URLSearchParams(searchParams);


            params.set("page", '1');

            if (term) {
                params.set('query', term);
            } else {
                params.delete('query');
            }


            replace(`${pathname}?${params.toString()}`);
        }

        , 400)


    return (
        <div className="relative flex flex-1 flex-shrink-0">
            <IconGlass className="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900"/>
            <label htmlFor="search" className="sr-only">
                Search
            </label>
            <input
                onChange={(e) => handleSearch(e.target.value)}
                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                placeholder={placeholder}
                defaultValue={searchParams.get('query')?.toString()}
            />
        </div>
    );
}

export default Search