// Endpoint	Method	Description	Data to be Passed
// http://localhost:5000/api/doctors	GET	Get all doctors	None
// http://localhost:5000/api/doctors	POST	Add a new doctor	{ "name": "Dr. John Doe", "specialization": "Cardiology", "experience": 10, "contact": "1234567890" }
// http://localhost:5000/api/doctors/:id	PUT	Update a doctor by ID	{ "name": "Dr. Jane Smith", "specialization": "Neurology", "experience": 15, "contact": "9876543210" }
// http://localhost:5000/api/doctors/:id	DELETE	Delete a doctor by ID	None
// http://localhost:5000/api/appointments	GET	Get all appointments	None
// http://localhost:5000/api/appointments	POST	Add a new appointment	{ "patientName": "Alice", "doctorId": "<doctorId>", "date": "2025-01-20", "time": "10:00 AM" }
// http://localhost:5000/api/appointments/:id	PUT	Update an appointment by ID	{ "patientName": "Bob", "doctorId": "<doctorId>", "date": "2025-01-21", "time": "11:00 AM" }
// http://localhost:5000/api/appointments/:id	DELETE	Delete an appointment by ID	None
// http://localhost:5000/api/users/register	POST	Register a new user	{ "name": "Shubham", "email": "shubham@example.com", "password": "password123" }
// http://localhost:5000/api/users/login	POST	Login user	{ "email": "shubham@example.com", "password": "password123" }
// http://localhost:5000/api/users/profile	GET	Get user profile (protected route)	Authorization Header: Bearer <JWT_Token>