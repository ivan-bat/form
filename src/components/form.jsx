import { useEffect, useState, useRef } from 'react';
import { TextField } from './TextField';
import { validator } from '../utils/validator';
import './form.css';

const Form = () => {
	const [data, setData] = useState({ email: '', password: '', repPassword: '' });
	const { email, password, repPassword } = data;
	const [error, setError] = useState({});

	const submitButtonRef = useRef(null);

	const onChange = (event) => {
		const { name, value } = event.target;

		setData((prevState) => ({
			...prevState,
			[name]: value,
		}));
	};

	const isValid = Object.keys(error).length === 0;

	const validateSchema = {
		email: {
			isEmail: {
				massage: 'Email введён не корректно. Пример корректного test@test.test',
			},
			checkError: {
				massage: 'Email обязателен к заполнению',
			},
		},
		password: {
			isPassword: {
				massage:
					'Пароль должен содержать хотя бы одну латинскую букву в верхнем регистре',
			},
			isPasswordNumber: {
				massage: 'Пароль должен содержать хотя бы одну цифру',
			},
			checkError: {
				massage: 'Пароль обязателен к заполнению',
			},
		},
		repPassword: {
			checkError: {
				massage: 'Повторите пароль',
			},
		},
	};

	useEffect(() => {
		const errors = validator(data, validateSchema);
		setError(errors);
	}, [data]);

	const onSubmit = (event) => {
		event.preventDefault();
		submitButtonRef.current.focus();
		console.log(data);
	};

	return (
		<div className="page">
			<form onSubmit={onSubmit}>
				<TextField
					value={email}
					name="email"
					type="text"
					placeholder="email"
					onChange={onChange}
					label="Email"
					error={error.email}
				/>
				<TextField
					value={password}
					name="password"
					type="password"
					placeholder="Пароль"
					onChange={onChange}
					label="Пароль"
					error={error.password}
				/>
				<TextField
					value={repPassword}
					name="repPassword"
					type="password"
					placeholder="Повтор пароля"
					onChange={onChange}
					label="Повтор пароля"
					error={error.repPassword}
				/>
				<button
					className={isValid ? 'btn' : ''}
					ref={submitButtonRef}
					type="submit"
					disabled={!isValid}
				>
					{'Зарегистрироваться'}
				</button>
			</form>
		</div>
	);
};

export default Form;
