import React, { useContext } from 'react';
import InputFields from './InputFields';
import { FormContext } from '../context/FormContext';

const Contact = () => {
	const { handleSubmit, formData, errors, handleInputChange, isSubmitting } =
		useContext(FormContext);

	return (
		<div className="max-w-[1200px] mx-auto sm:py-20 p-6 sm:px-8" id="contact">
			<h2 className="text-4xl font-bold leading-tight primary-color text-center">
				Contact Me
			</h2>

			<div className="max-w-[800px] sm:mx-auto mt-8 mx-1">
				<div className="bg-[#161616] rounded-lg shadow-lg">
					<div className="p-8 sm:p-10">
						<form
							action="https://getform.io/f/bwnnjeja"
							method="POST"
							className="space-y-6"
							onSubmit={handleSubmit}
							noValidate
						>
							<div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
								<InputFields
									type="text"
									placeholder="Name"
									id="name"
									value={formData.name}
									error={errors.name}
								/>
								<InputFields
									type="email"
									placeholder="Email"
									id="email"
									value={formData.email}
									error={errors.email}
								/>
								<InputFields
									type="text"
									placeholder="Subject"
									id="subject"
									value={formData.subject}
									error={errors.subject}
								/>
								<div className="relative">
									<label htmlFor="message" className="sr-only">
										Message
									</label>
									<textarea
										rows={4}
										placeholder="Message"
										id="message"
										name="message"
										value={formData.message}
										onChange={handleInputChange}
										className={`bg-[#161616] w-full p-4 text-base text-gray-300 placeholder:text-gray-500 border ${
											errors.message
												? 'border-red-500'
												: 'border-gray-700'
										} rounded-md focus:outline-none focus:border-[#00c6ff] resize-none transition duration-200`}
									/>
									{errors.message && (
										<p className="text-red-500 text-sm mt-1">
											{errors.message}
										</p>
									)}
								</div>
							</div>
							<button
								type="submit"
								disabled={isSubmitting}
								className={`mt-6 w-full p-4 text-lg font-semibold text-white bg-primary-color rounded-md shadow-lg hover:opacity-90 transition duration-200 ${
									isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
								}`}
							>
								{isSubmitting ? 'Sending...' : 'Send'}
							</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Contact;
