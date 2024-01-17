import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { Header } from '../_common/Header';

export default function Home() {
    return (
        <div className="w-full min-h-full">
            <div className="flex flex-col gap-y-8 ">
                <div className="w-full flex items-center justify-center py-12">
                    <div className="w-full mx-auto flex flex-col gap-8 py-4 px-8 md:w-4/5 lg:w-1/2">
                        <h2 className="text-4xl text-center md:text-5xl lg:text-6xl font-bold text-dark">Sign up</h2>
                    </div>
                </div>
            </div>
        </div>
    );
}
