import { Fragment } from 'react';

import { cn } from '@/lib/utils';
import { Separator } from '@/components/ui/separator';
import { Skeleton } from '@/components/ui/skeleton';

export default function ProjectLoadingPage() {
	return (
		<Fragment>
			<div className='grid grid-cols-1 grid-rows-2 gap-8 md:grid-rows-1 md:grid-cols-7 md:gap-16 pb-8'>
				<div className='md:col-span-4 flex flex-col gap-y-4'>
					<div className='flex flex-wrap gap-2'>
						{Array.from({ length: 4 }).map((_, index) => (
							<Skeleton
								key={`${index}-tag`}
								className={cn('h-6 rounded-md', {
									'w-16': index % 2 === 0,
									'w-12': index % 2 !== 0,
								})}
							/>
						))}
					</div>
					<Skeleton className='rounded-md w-1/2 h-9' />
					<Skeleton className='rounded-md w-full h-32' />
				</div>
				<div className='md:col-span-3 flex flex-col gap-y-4'>
					<div className='flex gap-x-4'>
						<div className='flex flex-col gap-y-2 flex-1'>
							<Skeleton className='rounded-md h-6 w-1/2' />
							<Skeleton className='rounded-md h-6' />
						</div>
						<div className='flex flex-col gap-y-2 flex-1'>
							<Skeleton className='rounded-md h-6 w-1/2' />
							<Skeleton className='rounded-md h-6' />
						</div>
					</div>
					<div className='flex flex-col gap-y-2'>
						<Skeleton className='rounded-md h-6 w-64' />
						<div className='flex flex-wrap gap-2'>
							{Array.from({ length: 8 }).map((_, index) => (
								<Skeleton
									key={`${index}-tag`}
									className={cn('h-6 rounded-md', {
										'w-24': index % 2 === 0,
										'w-16': index % 2 !== 0,
									})}
								/>
							))}
						</div>
					</div>
					<div className='flex flex-col gap-y-2'>
						<Skeleton className='rounded-md h-6 w-32' />
						<div className='flex flex-wrap gap-2'>
							{Array.from({ length: 8 }).map((_, index) => (
								<Skeleton
									key={`${index}-tag`}
									className={cn('h-6 rounded-md', {
										'w-16': index % 2 === 0,
										'w-24': index % 2 !== 0,
									})}
								/>
							))}
						</div>
					</div>
				</div>
			</div>
			<div className='flex flex-col gap-y-8'>
				<Separator />
				<div className='rounded-md border p-4 flex w-full gap-x-4'>
					<Skeleton className='rounded-md w-1/2 h-96' />
					<Skeleton className='rounded-md w-1/2 h-96' />
				</div>
				<Separator />
				<div className='grid grid-cols-1 gap-y-16 sm:grid-cols-10 sm:gap-x-16'>
					<div className='col-span-5 flex flex-col gap-y-4'>
						<Skeleton className='rounded-md w-1/2 h-9' />
						<Skeleton className='rounded-md w-full h-16' />
						<Skeleton className='rounded-md w-full h-10' />
					</div>
					<div className='col-span-5 flex flex-col gap-y-4'>
						<div className='flex w-full flex-col gap-y-4'>
							<div className='flex justify-between gap-x-4'>
								<div className='flex flex-col gap-y-2 w-full'>
									<Skeleton className='rounded-md w-20 h-5' />
									<Skeleton className='rounded-md w-full h-10' />
								</div>
								<div className='flex flex-col gap-y-2 w-full'>
									<Skeleton className='rounded-md w-20 h-5' />
									<Skeleton className='rounded-md w-full h-10' />
								</div>
							</div>
							<div className='flex flex-col gap-y-2 w-full'>
								<Skeleton className='rounded-md w-20 h-5' />
								<Skeleton className='rounded-md w-full h-10' />
								<Skeleton className='rounded-md w-64 h-5' />
							</div>
							<div className='flex flex-col gap-y-2 w-full'>
								<Skeleton className='rounded-md w-20 h-5' />
								<Skeleton className='rounded-md w-full h-20' />
							</div>
							<div className='flex justify-end'>
								<Skeleton className='rounded-md w-32 h-10' />
							</div>
						</div>
					</div>
				</div>
				<Separator />
			</div>
		</Fragment>
	);
}
