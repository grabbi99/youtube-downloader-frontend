import React, { useState } from 'react'

const FetchArea = ({ fetchVideo }) => {
	let [url, setUrl] = useState('')

	return (
		<div className="fetch-area text-center">
			<h1 className="fetch-area__title">
				Download Video and Audio from
				<span className="text-color-primary">YouTube</span>
			</h1>
			<div className="search">
				<div className="red-box">
					<input
						type="text"
						className="search__input"
						placeholder="Paste your video url here..."
						value={url}
						onChange={(e) => setUrl(e.target.value)}
					/>
					<button
						className="button"
						onClick={(e) => url.length && fetchVideo(url)}
					>
						<svg
							className="button__icon"
							xmlns="http://www.w3.org/2000/svg"
							height={24}
							viewBox="0 0 24 24"
							width={24}
						>
							<path d="M0 0h24v24H0z" fill="none" />
							<path d="M12 3v9.28c-.47-.17-.97-.28-1.5-.28C8.01 12 6 14.01 6 16.5S8.01 21 10.5 21c2.31 0 4.2-1.75 4.45-4H15V6h4V3h-7z" />
						</svg>
						<span className="button__text">Fetch</span>
					</button>
				</div>
			</div>
		</div>
	)
}

export default FetchArea
