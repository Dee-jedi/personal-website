import { useContext } from 'react';
import { FormContext } from '../context/FormContext';

const InputFields = ({ type, placeholder, id, value, error }) => {
	const { handleInputChange } = useContext(FormContext);

	return (
		<div className="relative mb-4">
			<label htmlFor={id} className="sr-only">
				{placeholder}
			</label>
			<input
				type={type}
				name={id}
				id={id}
				placeholder={placeholder}
				value={value} // Controlled input value tied to state
				onChange={handleInputChange} // Ensure onChange is working properly
				className={`bg-[#161616] w-full p-4 text-base text-gray-300 placeholder:text-gray-500 border ${
					error ? 'border-red-500' : 'border-gray-700'
				} rounded-md focus:outline-none focus:border-[#00c6ff] transition duration-200`}
			/>
			{error && <p className="text-red-500 text-sm mt-1">{error}</p>}
		</div>
	);
};

export default InputFields;
