/* eslint-disable react/no-array-index-key */
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Button, AppBar, Toolbar, Typography, Radio, FormControlLabel } from "@mui/material";
import Link from "next/link";

const Exam = () => {
  const router = useRouter();
  const [timer, setTimer] = useState(600);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null); // Store selected option

  // Dummy array of questions
  const questions = [
    {
      question: "Question 1: Apakah Ibukota Indonesia Baru?",
      options: ["Jakarta", "Medan", "Kalimantan", "Surabaya"],
    },
    {
      question: "Question 2: Manakah yang disebut hewan buas?",
      options: ["KUCING", "KELINCI", "CICAK", "SINGA"],
    },
    {
      question: "Question 3: Mata uang terkecil didunia?",
      options: ["Rupiah", "Dong", "Cen", "Dolar"],
    },
    {
      question: "Question 4: Mata uang terbesar didunia?",
      options: ["Rupiah", "Dinar", "Cen", "Dolar"],
    },
    {
      question: "Question 5: Negara Paling kaya didunia?",
      options: ["Vietnam", "Indonesia", "Qatar", "Irlandia"],
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prevTimer) => {
        if (prevTimer === 0) {
          clearInterval(interval);
          router.push("/admin/result");
        }
        return prevTimer - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [timer, router]);

  const handleNextQuestion = () => {
    if (selectedOption !== null) {
      // Move to the next question only if an option is selected
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion((prevQuestion) => prevQuestion + 1);
        setSelectedOption(null); // Clear selected option for the next question
      } else {
        router.push("/admin/result");
      }
    } else {
      // Show an alert or message that an option must be selected before moving to the next question
      // eslint-disable-next-line no-alert
      alert("Please select an option before moving to the next question.");
    }
  };

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Link href="/admin/dashboard">
            <Button color="inherit">Back to Dashboard</Button>
          </Link>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {Math.floor(timer / 60)}:{timer % 60}
          </Typography>
        </Toolbar>
      </AppBar>
      <div id="content">
        {/* Display current question */}
        <h2>{questions[currentQuestion].question}</h2>
        <form id="examForm">
          {/* Display options for the current question */}
          {questions[currentQuestion].options.map((option, index) => (
            <FormControlLabel
              key={index}
              control={<Radio onChange={handleOptionChange} checked={selectedOption === option} value={option} />}
              label={option}
            />
          ))}
        </form>
        <Button onClick={handleNextQuestion} variant="contained">
          Next
        </Button>
      </div>
    </div>
  );
};

export default Exam;
