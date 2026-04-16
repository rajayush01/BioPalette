import React, { useState, useEffect } from 'react';

interface LoadingProps {
	mode: 'timed' | 'suspense';
	size: 'sm' | 'md' | 'lg';
	duration?: number;
	onLoadingComplete?: () => void;
	showProgress?: boolean;
}

const Loading: React.FC<LoadingProps> = ({ mode, size, duration = 3000, onLoadingComplete, showProgress = true }) => {
	const [progress, setProgress] = useState(0);

	useEffect(() => {
		if (mode === 'timed' && duration && onLoadingComplete) {
			const timer = setTimeout(onLoadingComplete, duration);

			// Progress animation
			if (showProgress) {
				const interval = setInterval(() => {
					setProgress((prev) => {
						if (prev >= 100) {
							clearInterval(interval);
							return 100;
						}
						return prev + 100 / (duration / 50);
					});
				}, 50);

				return () => {
					clearTimeout(timer);
					clearInterval(interval);
				};
			}

			return () => clearTimeout(timer);
		}
	}, [mode, duration, onLoadingComplete, showProgress]);

	// Responsive size classes
	const sizeClasses = {
		sm: 'w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16',
		md: 'w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24',
		lg: 'w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32',
	};

	// Responsive logo text sizes
	const logoTextSizes = {
		sm: 'text-lg sm:text-xl md:text-2xl',
		md: 'text-xl sm:text-2xl md:text-3xl',
		lg: 'text-2xl sm:text-3xl md:text-4xl lg:text-5xl',
	};

	// Responsive ring sizes
	const getRingSizes = () => {
		switch (size) {
			case 'sm':
				return {
					ring1: 'w-14 h-14 sm:w-16 sm:h-16 md:w-18 md:h-18',
					ring2: 'w-18 h-18 sm:w-20 sm:h-20 md:w-22 md:h-22',
					ring3: 'w-22 h-22 sm:w-24 sm:h-24 md:w-26 md:h-26',
				};
			case 'md':
				return {
					ring1: 'w-18 h-18 sm:w-22 sm:h-22 md:w-26 md:h-26',
					ring2: 'w-22 h-22 sm:w-26 sm:h-26 md:w-30 md:h-30',
					ring3: 'w-26 h-26 sm:w-30 sm:h-30 md:w-34 md:h-34',
				};
			case 'lg':
				return {
					ring1: 'w-22 h-22 sm:w-26 sm:h-26 md:w-30 md:h-30 lg:w-34 lg:h-34',
					ring2: 'w-26 h-26 sm:w-30 sm:h-30 md:w-34 md:h-34 lg:w-38 lg:h-38',
					ring3: 'w-30 h-30 sm:w-34 sm:h-34 md:w-38 md:h-38 lg:w-42 lg:h-42',
				};
			default:
				return {
					ring1: 'w-18 h-18 sm:w-22 sm:h-22 md:w-26 md:h-26',
					ring2: 'w-22 h-22 sm:w-26 sm:h-26 md:w-30 md:h-30',
					ring3: 'w-26 h-26 sm:w-30 sm:h-30 md:w-34 md:h-34',
				};
		}
	};

	const ringSizes = getRingSizes();

	// Responsive data point container size
	const getDataPointContainerSize = () => {
		switch (size) {
			case 'sm':
				return 'w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36';
			case 'md':
				return 'w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40';
			case 'lg':
				return 'w-36 h-36 sm:w-40 sm:h-40 md:w-44 md:h-44 lg:w-48 lg:h-48';
			default:
				return 'w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40';
		}
	};

	return (
		<div className="flex flex-col items-center justify-center min-h-screen w-full p-4 space-y-4 sm:space-y-6 md:space-y-8">
			{/* Logo Animation Container */}
			<div className="relative flex items-center justify-center">
				{/* Main Logo - Bio Palette styled */}
				<div className={`${sizeClasses[size]} relative z-10 flex items-center justify-center`}>
					<div className="w-full h-full bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl shadow-2xl flex items-center justify-center animate-pulse">
						<div className={`text-white font-bold tracking-wider ${logoTextSizes[size]}`}>IB</div>
					</div>
					{/* Corporate glow effect */}
					<div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 opacity-30 blur-xl rounded-xl animate-ping"></div>
				</div>

				{/* Data flow rings - representing BI and analytics */}
				<div className="absolute inset-0 flex items-center justify-center">
					<div
						className={`${ringSizes.ring1} border-2 border-blue-600 border-opacity-40 rounded-full animate-spin border-dashed`}
						style={{ animationDuration: '3s', animationDirection: 'reverse' }}
					></div>
				</div>
				<div className="absolute inset-0 flex items-center justify-center">
					<div
						className={`${ringSizes.ring2} border border-blue-500 border-opacity-25 rounded-full animate-spin`}
						style={{ animationDuration: '4s' }}
					></div>
				</div>
				<div className="absolute inset-0 flex items-center justify-center">
					<div
						className={`${ringSizes.ring3} border border-slate-300 border-opacity-50 rounded-full animate-spin border-dotted`}
						style={{ animationDuration: '6s', animationDirection: 'reverse' }}
					></div>
				</div>

				{/* Data points - representing analytics and BI solutions */}
				<div className="absolute inset-0 flex items-center justify-center">
					<div className={`relative ${getDataPointContainerSize()}`}>
						{/* Main data points */}
						<div className="absolute top-1 sm:top-2 left-1/2 w-2 h-2 sm:w-3 sm:h-3 bg-blue-600 rounded-full animate-pulse transform -translate-x-1/2"></div>
						<div
							className="absolute bottom-1 sm:bottom-2 left-1/2 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-500 rounded-full animate-pulse transform -translate-x-1/2"
							style={{ animationDelay: '0.5s' }}
						></div>
						<div
							className="absolute left-1 sm:left-2 top-1/2 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-700 rounded-full animate-pulse transform -translate-y-1/2"
							style={{ animationDelay: '0.25s' }}
						></div>
						<div
							className="absolute right-1 sm:right-2 top-1/2 w-2 h-2 sm:w-3 sm:h-3 bg-blue-400 rounded-full animate-pulse transform -translate-y-1/2"
							style={{ animationDelay: '0.75s' }}
						></div>

						{/* Corner data points */}
						<div
							className="absolute top-2 sm:top-3 md:top-4 left-2 sm:left-3 md:left-4 w-1 h-1 sm:w-1.5 sm:h-1.5 bg-slate-400 rounded-full animate-ping"
							style={{ animationDelay: '1s' }}
						></div>
						<div
							className="absolute top-2 sm:top-3 md:top-4 right-2 sm:right-3 md:right-4 w-1 h-1 sm:w-1.5 sm:h-1.5 bg-slate-400 rounded-full animate-ping"
							style={{ animationDelay: '1.2s' }}
						></div>
						<div
							className="absolute bottom-2 sm:bottom-3 md:bottom-4 left-2 sm:left-3 md:left-4 w-1 h-1 sm:w-1.5 sm:h-1.5 bg-slate-400 rounded-full animate-ping"
							style={{ animationDelay: '1.4s' }}
						></div>
						<div
							className="absolute bottom-2 sm:bottom-3 md:bottom-4 right-2 sm:right-3 md:right-4 w-1 h-1 sm:w-1.5 sm:h-1.5 bg-slate-400 rounded-full animate-ping"
							style={{ animationDelay: '1.6s' }}
						></div>
					</div>
				</div>
			</div>

			{/* Company branding - responsive text sizes */}
			<div className="text-center space-y-2 sm:space-y-3 px-4">
				<h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-700 tracking-wide">Bio Palette</h2>
				<p className="text-slate-500 text-[9px] sm:text-sm font-medium tracking-wider uppercase">
					Business Intelligence Solutions
				</p>
			</div>

			{/* Loading text with responsive sizing */}
			<div className="text-slate-600 text-base sm:text-lg font-medium">
				<span className="animate-pulse">Processing</span>
				<span className="animate-bounce text-blue-600">.</span>
				<span className="animate-bounce text-blue-600" style={{ animationDelay: '0.1s' }}>
					.
				</span>
				<span className="animate-bounce text-blue-600" style={{ animationDelay: '0.2s' }}>
					.
				</span>
			</div>

			{/* Progress bar with responsive width */}
			{showProgress && (
				<div className="w-48 sm:w-64 md:w-72 lg:w-80 bg-slate-200 rounded-full h-2 sm:h-3 overflow-hidden shadow-inner">
					<div
						className="bg-gradient-to-r from-blue-700 via-blue-600 to-blue-500 h-2 sm:h-3 rounded-full transition-all duration-100 ease-out shadow-lg relative overflow-hidden"
						style={{ width: `${progress}%` }}
					>
						{/* Shimmer effect on progress bar */}
						<div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30 animate-pulse"></div>
					</div>
				</div>
			)}

			{/* Progress percentage - responsive text */}
			{showProgress && (
				<div className="text-slate-500 text-xs sm:text-sm font-semibold tracking-wide">
					{Math.round(progress)}% Complete
				</div>
			)}

			{/* Subtle tech pattern background - responsive positioning */}
			<div className="absolute inset-0 overflow-hidden pointer-events-none">
				<div
					className="absolute top-16 sm:top-20 left-6 sm:left-10 w-1 h-1 bg-blue-200 rounded-full animate-ping opacity-60"
					style={{ animationDelay: '2s' }}
				></div>
				<div
					className="absolute top-32 sm:top-40 right-12 sm:right-20 w-1 h-1 bg-blue-300 rounded-full animate-ping opacity-60"
					style={{ animationDelay: '2.5s' }}
				></div>
				<div
					className="absolute bottom-24 sm:bottom-32 left-12 sm:left-20 w-1 h-1 bg-slate-300 rounded-full animate-ping opacity-60"
					style={{ animationDelay: '3s' }}
				></div>
				<div
					className="absolute bottom-16 sm:bottom-20 right-6 sm:right-10 w-1 h-1 bg-blue-200 rounded-full animate-ping opacity-60"
					style={{ animationDelay: '3.5s' }}
				></div>
			</div>
		</div>
	);
};

export default Loading;
