import { Fragment } from 'react';

import { cn } from '@/lib/utils';
import { Separator } from '@/components/ui/separator';
import { Skeleton } from '@/components/ui/skeleton';

export default function HomeLoadingPage() {
	return (
		<Fragment>
			<div className='grid grid-cols-1 grid-rows-2 items-center justify-items-center pb-16 sm:grid-cols-10 sm:grid-rows-1 sm:justify-items-end sm:gap-x-16 gap-y-8'>
				<div className='order-2 sm:order-1 sm:col-span-6 w-full'>
					<div className='flex flex-col items-center gap-y-4 sm:items-start'>
						<Skeleton className='rounded-md w-96 h-12' />
						<Skeleton className='rounded-md w-96 h-12' />
						<Skeleton className='rounded-md w-full h-16' />
						<div className='flex justify-start items-center gap-x-4'>
							<Skeleton className='rounded-md w-32 h-10' />
							<Skeleton className='rounded-md w-32 h-10' />
						</div>
					</div>
				</div>
				<div className='order-1 sm:order-2 sm:col-span-4'>
					<Skeleton className='rounded-full h-64 w-64' />
				</div>
			</div>
			<div className='flex flex-col gap-y-8 pb-16'>
				<Skeleton className='rounded-md w-96 h-9' />
				<div className='flex flex-col gap-y-4'>
					<Skeleton className='rounded-md w-full h-20' />
					<Skeleton className='rounded-md w-full h-20' />
					<Skeleton className='rounded-md w-full h-20' />
					<Skeleton className='rounded-md w-full h-20' />
					<Skeleton className='rounded-md w-full h-20' />
				</div>
			</div>
			<div className='flex flex-col gap-y-8 pb-16'>
				<Skeleton className='rounded-md w-96 h-9' />
				<Skeleton className='rounded-md w-full h-20' />
				<div className='flex gap-4'>
					{Array.from({ length: 3 }).map((_, index) => (
						<div
							key={`${index}-experience`}
							className='md:basis-1/2 lg:basis-1/3'>
							<Skeleton className='rounded-lg w-full h-40' />
						</div>
					))}
				</div>
			</div>
			<div className='flex flex-col gap-y-8 pb-16'>
				<Skeleton className='rounded-md w-96 h-9' />
				<Skeleton className='rounded-md w-full h-20' />
				<Separator />
				{Array.from({ length: 3 }).map((_, index) => (
					<div
						key={`${index}-experience`}
						className='flex flex-col gap-y-8'>
						<div className='grid grid-cols-1 gap-y-8 sm:grid-cols-10 sm:gap-x-16'>
							<Skeleton className='col-span-4 h-full w-full rounded-md' />
							<div className='col-span-6 flex flex-col justify-between gap-y-4'>
								<div className='flex flex-col items-start gap-y-4'>
									<div className='flex flex-wrap gap-2'>
										{Array.from({ length: 4 }).map(
											(_, index) => (
												<Skeleton
													key={`${index}-tag`}
													className={cn(
														'h-6 rounded-md',
														{
															'w-16':
																index % 2 === 0,
															'w-12':
																index % 2 !== 0,
														},
													)}
												/>
											),
										)}
									</div>
									<Skeleton className='rounded-md w-1/2 h-9' />
									<Skeleton className='rounded-md w-full h-32' />
								</div>
								<Skeleton className='rounded-md w-32 h-10' />
							</div>
						</div>
						<Separator />
					</div>
				))}
				<Skeleton className='rounded-md w-32 h-10 mt-8 self-center' />
			</div>
			<div className='flex flex-col gap-y-8'>
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
