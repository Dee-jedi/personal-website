// FormContext.js
import { createContext, useState } from 'react';

export const FormContext = createContext({});

const FormProvider = ({ children }) => {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		subject: '',
		message: '',
	});
	const [errors, setErrors] = useState({});
	const [isSubmitted, setIsSubmitted] = useState(false);
	const [isSubmitting, setIsSubmitting] = useState(false);

	const handleInputChange = e => {
		const { name, value } = e.target;

		setFormData(prevData => ({
			...prevData,
			[name]: value,
		}));

		setErrors(prevErrors => {
			const newErrors = { ...prevErrors };
			if (name === 'name' && !value.trim()) {
				newErrors.name = 'Name is required.';
			} else if (name === 'name') {
				delete newErrors.name;
			}

			if (name === 'email') {
				if (!value.trim()) {
					newErrors.email = 'Email is required.';
				} else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
					newErrors.email = 'Invalid email address.';
				} else {
					delete newErrors.email;
				}
			}

			if (name === 'subject' && !value.trim()) {
				newErrors.subject = 'Subject is required.';
			} else if (name === 'subject') {
				delete newErrors.subject;
			}

			if (name === 'message' && !value.trim()) {
				newErrors.message = 'Message is required.';
			} else if (name === 'message') {
				delete newErrors.message;
			}

			return newErrors;
		});
	};

	const validateForm = () => {
		const newErrors = {};

		if (!formData.name.trim()) {
			newErrors.name = 'Name is required.';
		}
		if (!formData.email.trim()) {
			newErrors.email = 'Email is required.';
		} else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
			newErrors.email = 'Invalid email address.';
		}
		if (!formData.subject.trim()) {
			newErrors.subject = 'Subject is required.';
		}
		if (!formData.message.trim()) {
			newErrors.message = 'Message is required.';
		}

		setErrors(newErrors);
		return Object.keys(newErrors).length === 0;
	};

	const handleSubmit = e => {
		e.preventDefault();

		if (validateForm()) {
			setIsSubmitting(true);

			setTimeout(() => {
				e.target.submit();
				setIsSubmitting(false);
				setIsSubmitted(true);

				setFormData({
					name: '',
					email: '',
					subject: '',
					message: '',
				});
			}, 1000);
		}
	};

	return (
		<FormContext.Provider
			value={{
				formData,
				setFormData,
				handleInputChange,
				errors,
				handleSubmit,
				isSubmitting,
				isSubmitted,
			}}
		>
			{children}
		</FormContext.Provider>
	);
};

export default FormProvider;
