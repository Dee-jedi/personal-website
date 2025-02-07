import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollReveal = ({
	children,
	className,
	animation = { y: 100, opacity: 0 },
	duration = 1,
	threshold = 0.2,
}) => {
	const { ref, inView } = useInView({
		triggerOnce: true,
		threshold: threshold,
	});
	const [isReloaded, setIsReloaded] = useState(false);
	const location = useLocation();

	useEffect(() => {
		// Scroll to top whenever the route changes to the Contact page
		if (location.pathname === '/contact') {
			window.scrollTo(0, 0); // Ensure we scroll to the top when navigating to the contact page
		}

		// Check if the page was loaded fresh or navigated via history
		const isFreshReload =
			!document.referrer ||
			window.performance.getEntriesByType('navigation')[0]?.type ===
				'reload';

		if (isFreshReload) {
			setIsReloaded(true);
		} else {
			setIsReloaded(false);
		}
	}, [location.pathname]);

	// Only trigger animation if page was reloaded
	const shouldAnimate = isReloaded || inView;

	return (
		<motion.div
			ref={ref}
			initial={animation}
			animate={{
				y: shouldAnimate ? 0 : animation.y,
				opacity: shouldAnimate ? 1 : animation.opacity,
			}}
			transition={{
				y: {
					type: 'spring',
					stiffness: 50,
					damping: 25,
					duration: duration,
				},
				opacity: { duration: duration, ease: 'easeOut' },
			}}
			className={className}
		>
			{children}
		</motion.div>
	);
};

export default ScrollReveal;
