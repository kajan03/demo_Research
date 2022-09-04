import React, { useEffect, useState } from "react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import Stack from "@mui/material/Stack";
import {
	Button,
	Grid,
	Container,
	TextField,
	Typography,
	Card,
	CardContent,
	CardHeader,
	MenuItem,
} from "@mui/material";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import { useFormContext, useForm, Controller } from "react-hook-form";
import axios from "axios";
import Snackbar, { SnackbarOrigin } from "@mui/material/Snackbar";
import image from "../assets/questions.jpg";

const QuestionForm = () => {
	const navigate = useNavigate();

	const [category, setCategory] = useState("");
	const [difficulty, setDifficulty] = useState(0);
	const [question, setQuestion] = useState(0);
	const [answer, setAnswer] = useState();
	const [state, setState] = React.useState({
		open: false,
		vertical: "top",
		horizontal: "center",
	});

	const { vertical, horizontal, open } = state;

	const handleClose = () => {
		setState({ ...state, open: false });
	};
	// const getCategory = () => {
	//     axios.get(`http://localhost:5000/categories`)
	//     .then((response) => {
	//         const allCat = response.categories
	//         console.log(allCat);
	//     })
	//     .catch(error => console.error(`Error: ${error}`))
	// }

	
	const resetForm = () => { 
			document.getElementById("add-question").reset();
			setDifficulty("")
			setCategory("")
		  }
	

	const fetchQuestionCategories = async () => {
		const { data } = await axios.get(`http://localhost:5000/categories`);

		console.log(data.categories);
	};
	useEffect(() => {
		fetchQuestionCategories();
	}, []);

	const handleFormSubmit = () => {
		const obj = {
			question: question,
			answer: answer,
			difficulty: difficulty,
			category: category,
		};
		setState({ open: true, vertical: "top", horizontal: "right" });
		console.log(obj);

		axios.post(`http://localhost:5000/questions`, obj).then((res) => {
			console.log(res);
			resetForm()
		});
		
	};
	const { register, handleSubmit, control, errors } = useForm({});

	const Alert = React.forwardRef(function Alert(props, ref) {
		return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
	});

	return (
		<div>
			<Container style={{ backgroundColor: "white" }}>
				<Grid container spacing={3}>
					<Grid style={{ backgroundColor: "#FFB862" }} item sm={6}>
						<img
							src={image}
							alt="loading_image"
							style={{
								paddingLeft: "50px",
								paddingTop: "100px",
								width: "80%",
							}}
						/>
					</Grid>
					<Grid item sm={6}>
						<Card>
							<CardHeader
								title="Add Question"
								titleTypographyProps={{ variant: "h4" }}
								style={{
									textAlign: "center",
									color: "#4A5568",
								}}
							></CardHeader>
							<CardContent>
								<form id="add-question" onSubmit={handleSubmit(handleFormSubmit)} >
									<Grid container spacing={3}>
										<Grid item sm={12}>
											<TextField
												id="outlined-basic"
												label="Question"
												variant="outlined"
												className="inputText"
												fullWidth
												size="medium"
												onChange={(e) => setQuestion(e.target.value)}
											/>
										</Grid>
										<Grid item sm={12}>
											<TextField
												id="outlined-basic"
												label="Answer"
												variant="outlined"
												fullWidth
												size="medium"
												onChange={(e) => setAnswer(e.target.value)}
											/>
										</Grid>
										<Grid item sm={12}>
											<TextField
												select
												label="Select"
												defaultValue=""
												onChange={(e) => setCategory(e.target.value)}
												helperText="Please select category"
												className="inputText"
												fullWidth
												size="medium"
												variant="outlined"
											>
												<MenuItem value="">
													<em>None</em>
												</MenuItem>
												<MenuItem value={1}>Trignometry</MenuItem>
												<MenuItem value={2}>Calculus</MenuItem>
												<MenuItem value={3}>Satistics</MenuItem>
												<MenuItem value={4}>Marix</MenuItem>
											</TextField>
										</Grid>
										<Grid item sm={12}>
											<TextField
												select
												label="Select"
												defaultValue=""
												className="inputText"
												onChange={(e) => setDifficulty(e.target.value)}
												helperText="Please select difficulty"
												variant="outlined"
												size="medium"
												fullWidth
											>
												<MenuItem value={1}>Easy</MenuItem>
												<MenuItem value={2}>Medium</MenuItem>
												<MenuItem value={3}>Hard</MenuItem>
											</TextField>
										</Grid>

										<Grid item sm={12}>
											<Button
												variant="contained"
												style={{
													color: "#ffffff",
													backgroundColor: "#FFB862",
													width: "100%",
													borderRadius: "6px",
												}}
												type="submit"
											>
												Submit
											</Button>
										</Grid>
									</Grid>
								</form>
							</CardContent>
						</Card>
					</Grid>
				</Grid>
				<Snackbar
					anchorOrigin={{ vertical, horizontal }}
					open={open}
					autoHideDuration={6000}
					onClose={handleClose}
				>
					<Alert
						onClose={handleClose}
						severity="success"
						sx={{ width: "100%" }}
					>
						Question successfully Added
					</Alert>
				</Snackbar>
			</Container>
		</div>
	);
};

export default QuestionForm;
