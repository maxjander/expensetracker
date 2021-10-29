import React, { useState } from "react";
import styled from "styled-components";
import { RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { categories } from "../../constants/add-expense";
import { addExpense } from "../../redux/actions/expenses";
function AddForm() {
	const cat = categories;
	let [title, setTitle] = useState("");
	const [amount, setamount] = useState("");
	const [category, setcategory] = useState();
	const [categoryTitle, setcategoryTitle] = useState();
	const [categoryOpen, setcategoryOpen] = useState(false);
	const dispatch = useDispatch();
	const handleTitle = (e) => setTitle(e.target.value);
	const handleAmount = (e) => setamount(+e.target.value);
	const handleSubmit = (e) => {
		if (title === "" || amount === "" || !category) {
			console.log("no Data");
			return;
		}

		const data = {
			title,
			amount,
			category,
			createdAt: new Date(),
		};
		dispatch(addExpense(data));
		setcategory();
		setcategoryTitle();
		setamount("");
		setTitle("");
	};
	const handleCategory = (id, title) => {
		setcategory(id);
		setcategoryTitle(title);
		setcategoryOpen(!categoryOpen);
	};

	// useEffect(() => {
	// 	title && console.log("Titel,", title);
	// 	amount && console.log("Summa,", amount);
	// 	category && console.log("Kategori, ", category, "KategoriTitel,", categoryTitle);
	// 	return () => {};
	// }, [amount, category, title, categoryTitle]);
	return (
		<Wrapper>
			<label>Title</label>
			<input
				placeholder="Vad har du gjort för utlägg?"
				value={title}
				onChange={(e) => handleTitle(e)}
			/>
			<label>Summa</label>
			<input type="number" placeholder="Summa" value={amount} onChange={(e) => handleAmount(e)} />
			<span onClick={() => setcategoryOpen(!categoryOpen)}>
				{!!category ? <label>{categoryTitle}</label> : <label>Kategori</label>}
				{categoryOpen ? <RiArrowUpSLine /> : <RiArrowDownSLine />}
			</span>
			{categoryOpen &&
				cat.map((category, i) => (
					<div key={i} onClick={() => handleCategory(category.id, category.title)}>
						{category.title}
					</div>
				))}
			<div onClick={(e) => handleSubmit(e)}>
				<label>Add</label>
			</div>
		</Wrapper>
	);
}

export default AddForm;
const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	margin: auto;
	width: calc(100% - 12px);
	margin: 12px 6px;

	& input {
		margin: 12px 6px;
		width: 80%;
		border: none;
		outline: none;
		padding: 10px;
		border-radius: 20px;
		@media (max-width: 768px) {
			width: calc(100% - 36px);
		}
	}
	& label {
		margin: 12px 6px;
	}

	& div {
		margin: 3px 12px;
		background-color: #ffffff;

		border: none;
		outline: none;
		padding: 10px;
		border-radius: 20px;
		@media (max-width: 768px) {
			width: calc(100% - 36px);
		}
		&:hover {
			background-color: #eeeeee;
		}
	}
	& span {
		display: flex;
		align-items: center;
	}
`;
