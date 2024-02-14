import { NextResponse, NextRequest } from "next/server"
import nodemailer from "nodemailer"

// Handles POST requests to /api

export async function POST(request: Request) {
	const username = process.env.NEXT_PUBLIC_EMAIL_USERNAME
	const password = process.env.NEXT_PUBLIC_EMAIL_PASSWORD
	// const myEmail = process.env.NEXT_PUBLIC_PERSONAL_EMAIL;

	const body = await request.json()
	const { name, email, message } = body

	const transporter = nodemailer.createTransport({
		service: "gmail",
		host: "smtp.gmail.com",
		port: 465,
		secure: true,

		auth: {
			user: username,
			pass: password,
		},
	})

	try {
		const emailRes = await transporter.sendMail({
			from: email,
			to: username,
			subject: `Contact form submission from ${name}`,
			html: `<p>You have a new contact form submission</p><br>
      <p><strong>Email: </strong> ${email} </p><br>
      <p><strong>Name: </strong> ${name} </p><br>
      <p><strong>Message: </strong> ${message} </p><br>
  
      `,
		})
	} catch (err) {
		console.log(err)
	}

	return new Response(body, { status: 200 })
}
