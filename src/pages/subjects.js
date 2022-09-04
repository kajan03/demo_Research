import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import MediaCard from "../components/QuizCard";
import { Grid, Container, Typography } from "@mui/material";

const Subjects = () => {
	return (
		<Container>
			<Grid container spacing={3}>
				<Grid item sm={12}>
					<Typography
						sx={{ fontSize: 20 }}
						color="text.secondary"
						style={{ paddingTop: "20px", fontWeight: "600" }}
					>
						Mathematics
					</Typography>
				</Grid>
				<Grid item sm={4}>
					<MediaCard title={"Quiz 1"} subject={"Algebra"} />
				</Grid>
				<Grid item sm={4}>
					<MediaCard title={"Quiz 2"} subject={"Trignometry"} />
				</Grid>
				<Grid item sm={4}>
					<MediaCard title={"Quiz 3"} subject={"Matix"} />
				</Grid>
				<Grid item sm={12}>
					<Typography
						sx={{ fontSize: 20 }}
						color="text.secondary"
						style={{ paddingTop: "20px", fontWeight: "600" }}
					>
						Information Technology
					</Typography>
				</Grid>
				<Grid item sm={4}>
					<MediaCard title={"Quiz 1"} subject={"Programming"} />
				</Grid>
				<Grid item sm={4}>
					<MediaCard title={"Quiz 2"} subject={"Numbering System"} />
				</Grid>
				<Grid item sm={4}>
					<MediaCard title={"Quiz 3"} subject={"Word Processing"} />
				</Grid>
			</Grid>
		</Container>
	);
};

export default Subjects;
