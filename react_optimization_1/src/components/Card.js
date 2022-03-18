import React, { useEffect, useRef } from 'react'

function Card(props) {
	const imgRef = useRef(null);

	useEffect(() => {
		const callback = (entries, observer) => {
			entries.forEach(entry => {
				// Each entry describes an intersection change for one observed
				// target element:
				//   entry.boundingClientRect
				//   entry.intersectionRatio
				//   entry.intersectionRect
				if (entry.isIntersecting) {
					console.log('is intersecting')
					entry.target.src = entry.target.dataset.src;
					observer.unobserve(entry.target);
				}
				//   entry.rootBounds
				//   entry.target
				//   entry.time
			});
		}
		const options = {
			
		}
		const observer = new IntersectionObserver(callback, options);
		observer.observe(imgRef.current);
	}, [])

	return (
		<div className="Card text-center">
			<img data-src={props.image} ref={imgRef}/>
			<div className="p-5 font-semibold text-gray-700 text-xl md:text-lg lg:text-xl keep-all">
				{props.children}
			</div>
		</div>
	)
}

export default Card
