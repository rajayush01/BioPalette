import { Routes, Route, Outlet } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import MainLayout from './components/layout/MainLayout';
import { useState } from 'react';
import Loading from './components/ui/Loading';
import NotFound from './pages/NotFound';


const Home = lazy(() => import('./pages/Home'));
// const Legacy = lazy(() => import('./pages/Legacy'));
// const Location = lazy(() => import('./pages/Location'));
// const AboutUs = lazy(() => import('./pages/AboutUs'));
// const Academics = lazy(() => import('./pages/Academics'));
// const Admissions = lazy(() => import('./pages/Admissions'));
// const Infrastructure = lazy(() => import('./pages/Infrastructure'));
// const ContactUs = lazy(() => import('./pages/ContactUs'));
// const NotFound = lazy(() => import('./pages/NotFound'));

function App() {
	const [isInitialLoading, setIsInitialLoading] = useState(true);

	const handleInitialLoadingComplete = () => {
		setIsInitialLoading(false);
	};

	if (isInitialLoading) {
		return (
			<div className="flex items-center justify-center h-screen bg-white">
				<div className="scale-[2]">
					<Loading 
						mode="timed" 
						size="md" 
						duration={2000}
						onLoadingComplete={handleInitialLoadingComplete}
						showProgress={true} 
					/>
				</div>
			</div>
		);
	}

	return (
		<Suspense
			fallback={
				<div className="flex items-center justify-center min-h-screen bg-white">
					<div className="scale-[2]">
						<Loading mode="suspense" size="md" />
					</div>
				</div>
			}
		>
			<Routes>
				<Route
					path="/"
					element={
						<MainLayout>
							<Outlet />
						</MainLayout>
					}
				>
					<Route index element={<Home />} />
					{/* <Route path="/about" element={<AboutUs />} />
					<Route path="/contact-us" element={<ContactUs />} />
					<Route path='/career/UserDashboard' element={<UserDashboard/>} />
					<Route path='/career/AdminDashboard' element={<AdminDashboard/>} /> */}
				</Route>
				<Route
					path="/404"
					element={
						<MainLayout>
							<NotFound />
						</MainLayout>
					}
				/>
				<Route
					path="*"
					element={
						<MainLayout>
							<NotFound />
						</MainLayout>
					}
				/>
			</Routes>
		</Suspense>
	);
}

export default App;