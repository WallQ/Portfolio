'use client';

import { env } from 'process';
import { JSX, useEffect } from 'react';
import { scan } from 'react-scan';

export function ReactScan(): JSX.Element {
	useEffect(() => {
		scan({
			enabled: env.NODE_ENV === 'development',
		});
	}, []);

	return <></>;
}
