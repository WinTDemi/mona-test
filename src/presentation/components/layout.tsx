import { ReactNode } from 'react';
import Categories from './categories';
import CreateOrder from './Order/createOrder';

type LayoutProps = {
    children: ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
    return (
        <div className='flex'>
            <header className='hidden lg:basis-1/6 lg:block'>
                <CreateOrder />
                <Categories />
            </header>
            <main className="lg:basis-5/6 basis-full">
                {children}
            </main>
        </div>
    );
};