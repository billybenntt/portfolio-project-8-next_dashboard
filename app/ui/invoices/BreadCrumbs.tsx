import {clsx} from 'clsx';
import Link from 'next/link';
import {Breadcrumb} from "@/types/definitions";


interface IProps<T> {
    breadcrumbs: T[]
}


function BreadCrumbs(props: IProps<Breadcrumb>) {

    const {breadcrumbs} = props

    return (
        <nav aria-label="Breadcrumb" className="mb-6 block">
            <ol className={clsx('flex text-xl md:text-2xl')}>

                {breadcrumbs.map((breadcrumb, index) => {

                    return (
                        <li key={breadcrumb.href}
                            aria-current={breadcrumb.active}
                            className={clsx(breadcrumb.active ? 'text-gray-900' : 'text-gray-500')}>
                            <Link href={breadcrumb.href}>
                                {breadcrumb.label}
                            </Link>
                            {index < breadcrumbs.length - 1 ? (<span className="mx-3 inline-block">/</span>) : null}
                        </li>
                    )
                })}
            </ol>
        </nav>
    );
}

export default BreadCrumbs