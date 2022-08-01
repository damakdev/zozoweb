import React from "react";
import Button from "../../ui/Button";

function BottomAd() {
	return (
		<div className="">
			<div className="grid grid-cols-2 gap-10">
				<div className="mb-7">
					<label className="block text-4xl font-semibold mb-10 text-black">
						Down ad 1
					</label>
					<textarea
						className="bg-gray-100 rounded-lg outline-none p-5 w-11/12"
						rows="4"
						cols="60"
					></textarea>
				</div>

				<div className="mb-7">
					<label className="block text-4xl font-semibold mb-10 text-black">
						Down ad 1
					</label>
					<textarea
						className="bg-gray-100 rounded-lg outline-none p-5 w-11/12"
						rows="4"
					></textarea>
				</div>
			</div>

			<div className="grid grid-cols-2 gap-10">
				<div className="mb-7">
					<label className="block text-4xl font-semibold mb-10 text-black">
						Down ad 1
					</label>
					<textarea
						className="bg-gray-100 rounded-lg outline-none p-5 w-11/12"
						rows="4"
						cols="60"
					></textarea>
				</div>

				<div className="mb-7">
					<label className="block text-4xl font-semibold mb-10 text-black">
						Mid ad 1
					</label>
					<textarea
						className="bg-gray-100 rounded-lg outline-none p-5 w-11/12"
						rows="4"
					></textarea>
				</div>
			</div>

			<div className="grid grid-cols-2 gap-10">
				<div className="mb-7">
					<label className="block text-4xl font-semibold mb-10 text-black">
						Mid ad 2
					</label>
					<textarea
						className="bg-gray-100 rounded-lg outline-none p-5 w-11/12"
						rows="4"
						cols="60"
					></textarea>
				</div>

				<div  className="mb-7">
					<label className="block text-4xl font-semibold mb-10 text-black">
						Why choose us
					</label>
					<textarea
						className="bg-gray-100 rounded-lg outline-none p-5 w-11/12"
						rows="4"
					></textarea>
				</div>
			</div>

			<div className="mb-7">
				<label className="block text-4xl font-semibold mb-10 text-black">
					Testimonial
				</label>
				<textarea
					className="bg-gray-100 rounded-lg outline-none p-5 w-full"
					rows="4"
				></textarea>
			</div>

                  <Button
                  width="100%"
                  paddingY="10px"
                  name="CREATE"
                  isBoxShadow={true}
                  className="mt-5"
                  />
		</div>
	);
}

export default BottomAd;
