# CodeIgniter 4 + PHP + MySQL Quiz Software algorithm
## Quiz Software ka Overall Flow

```text
Admin Login
    ↓
Admin Dashboard
    ↓
Create Quiz
    ↓
Add Questions
    ↓
Add Options
    ↓
Set Correct Answer
    ↓
Publish Quiz
    ↓
Student/User Login
    ↓
Quiz List
    ↓
Start Quiz
    ↓
Show Questions One by One
    ↓
User Selects Answer
    ↓
Next Question
    ↓
Submit Quiz
    ↓
Check Answers
    ↓
Calculate Score
    ↓
Save Result
    ↓
Show Result
```


## 1. Database Algorithm

**Main tables:**

**`users`**

```text
id
name
email
password
role
created_at
updated_at
```

**`quizzes`**

```text
id
title
description
duration
total_questions
status
created_at
updated_at
```
**`questions`**

```text
id
quiz_id
question
marks
created_at
updated_at
```
**`options`**

```text
id
question_id
option_text
is_correct
created_at
updated_at
```

**`quiz_attempts`**

```text
id
user_id
quiz_id
score
total_marks
started_at
submitted_at
```

**`answers`**

```text
id
attempt_id
question_id
selected_option_id
is_correct
marks_obtained
```

## 2. Admin Side Algorithm

**`Create Quiz`**

```text
Admin Login
   ↓
Dashboard
   ↓
Create Quiz
   ↓
Enter:
   - Quiz Title
   - Description
   - Duration
   - Status
   ↓
Validate Data
   ↓
Save Quiz
   ↓
Quiz ID Generate
   ↓
Add Questions
```

**`Add Question`**

```text
Select Quiz
   ↓
Enter Question
   ↓
Enter 4 Options
   ↓
Select Correct Option
   ↓
Set Marks
   ↓
Validate
   ↓
Save Question
   ↓
Save Options
```

## 3. Student Quiz Algorithm

```text
Student Login
     ↓
Quiz List
     ↓
Select Quiz
     ↓
Start Quiz
     ↓
Create quiz_attempt
     ↓
Get Questions
     ↓
Display Question #1
     ↓
Select Answer
     ↓
Save Answer Temporarily
     ↓
Next Question
     ↓
Repeat
     ↓
Last Question
     ↓
Submit Quiz
```

## 4. Score Calculation Algorithm

**`Suppose:`**

```text
Question 1 → Correct → 1 Mark
Question 2 → Wrong   → 0 Mark
Question 3 → Correct → 1 Mark
Question 4 → Correct → 1 Mark
Question 5 → Wrong   → 0 Mark
```
**`Algorithm:`**

```text
score = 0

For every question:

    Get correct option

    Compare:
        selected_option_id
        correct_option_id

    If both are same:
        is_correct = 1
        score = score + question_marks

    Else:
        is_correct = 0
```

**`Finally:`**
- Save score in quiz_attempts

## 5. CI4 Controllers

- Project ko roughly is tarah divide kar sakte ho:

```text
app/
├── Controllers/
│   ├── AuthController.php
│   ├── Admin/
│   │   ├── DashboardController.php
│   │   ├── QuizController.php
│   │   ├── QuestionController.php
│   │   └── UserController.php
│   │
│   └── Student/
│       ├── DashboardController.php
│       ├── QuizController.php
│       └── ResultController.php
│
├── Models/
│   ├── UserModel.php
│   ├── QuizModel.php
│   ├── QuestionModel.php
│   ├── OptionModel.php
│   ├── QuizAttemptModel.php
│   └── AnswerModel.php
│
└── Views/
    ├── auth/
    ├── admin/
    └── student/
```

## 6. Important Routes

```text
/login
/authenticate
/logout

/admin/dashboard

/admin/quizzes
/admin/quizzes/create
/admin/quizzes/store
/admin/quizzes/edit/{id}
/admin/quizzes/update/{id}
/admin/quizzes/delete/{id}

/admin/quizzes/{quiz_id}/questions
/admin/questions/create/{quiz_id}
/admin/questions/store

/student/dashboard
/student/quizzes
/student/quiz/start/{id}
/student/quiz/question/{id}
/student/quiz/submit/{id}
/student/result/{attempt_id}
```
## 7. Sabse Important Quiz Algorithm

- Student jab Start Quiz kare:
```text
START

1. Check user login hai ya nahi

2. Quiz ID receive karo

3. Quiz database se check karo

4. Quiz active hai ya nahi check karo

5. New attempt create karo

6. Attempt ID generate karo

7. Quiz ke questions fetch karo

8. First question display karo

9. Student answer select kare

10. Answer store karo

11. Next question display karo

12. Jab questions finish ho jaye:
       Submit

13. Har answer ko correct answer se compare karo

14. Score calculate karo

15. Attempt table me score update karo

16. Result page show karo

END
```
