import { NextResponse } from "next/server";
const nodemailer = require("nodemailer");

export async function POST(req) {
    try {
        const body = await req.json();
        const { 
            name, 
            email, 
            phone, 
            service, 
            budget, 
            message, 
            IP, 
            city, 
            region, 
            country, 
            pageUrl 
        } = body;

        const brandname = 'Appsters - Mobile App Studio LP';

        const transporter = nodemailer.createTransport({
            host: "mail.appsters.io",
            port: 465,
            secure: true,
            auth: {
                user: 'no-reply@appsters.io', 
                pass: "N;v-Om+OIZJ8?tdD" 
            },
            tls: {
                rejectUnauthorized: false
            }
        });

        const mailOptions = {
            from: '"Appsters" <no-reply@appsters.io>',
            to: 'testing@mailinator.com,ali.haider@canvasdigital.org, osama.azeem@iceanimations.com, zain@iceanimations.com, no-reply@appsters.io',
            subject: `Appsters LP Lead: ${name}`,
            html: `
                <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
                    <h2 style="color: #1128E6;">New Lead from Appsters Mobile App Studio Landing Page</h2>
                    <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
                        <tr>
                            <th style="text-align: left; padding: 10px; border-bottom: 1px solid #ddd;">Field</th>
                            <th style="text-align: left; padding: 10px; border-bottom: 1px solid #ddd;">Value</th>
                        </tr>
                        <tr>
                            <td style="padding: 10px; border-bottom: 1px solid #ddd;"><b>Name</b></td>
                            <td style="padding: 10px; border-bottom: 1px solid #ddd;">${name}</td>
                        </tr>
                        <tr>
                            <td style="padding: 10px; border-bottom: 1px solid #ddd;"><b>Email</b></td>
                            <td style="padding: 10px; border-bottom: 1px solid #ddd;">${email}</td>
                        </tr>
                        <tr>
                            <td style="padding: 10px; border-bottom: 1px solid #ddd;"><b>Phone</b></td>
                            <td style="padding: 10px; border-bottom: 1px solid #ddd;">${phone}</td>
                        </tr>
                        <tr>
                            <td style="padding: 10px; border-bottom: 1px solid #ddd;"><b>Service Interest</b></td>
                            <td style="padding: 10px; border-bottom: 1px solid #ddd;">${service || 'N/A'}</td>
                        </tr>
                        <tr>
                            <td style="padding: 10px; border-bottom: 1px solid #ddd;"><b>Budget Range</b></td>
                            <td style="padding: 10px; border-bottom: 1px solid #ddd;">${budget || 'N/A'}</td>
                        </tr>
                        <tr>
                            <td style="padding: 10px; border-bottom: 1px solid #ddd;"><b>Message</b></td>
                            <td style="padding: 10px; border-bottom: 1px solid #ddd;">${message || 'N/A'}</td>
                        </tr>
                        <tr>
                            <td style="padding: 10px; border-bottom: 1px solid #ddd;"><b>IP Address</b></td>
                            <td style="padding: 10px; border-bottom: 1px solid #ddd;">${IP || 'Unknown'}</td>
                        </tr>
                        <tr>
                            <td style="padding: 10px; border-bottom: 1px solid #ddd;"><b>Location</b></td>
                            <td style="padding: 10px; border-bottom: 1px solid #ddd;">${city || 'N/A'}, ${region || 'N/A'}, ${country || 'N/A'}</td>
                        </tr>
                        <tr>
                            <td style="padding: 10px; border-bottom: 1px solid #ddd;"><b>Page URL</b></td>
                            <td style="padding: 10px; border-bottom: 1px solid #ddd;">${pageUrl}</td>
                        </tr>
                        <tr>
                            <td style="padding: 10px; border-bottom: 1px solid #ddd;"><b>Source</b></td>
                            <td style="padding: 10px; border-bottom: 1px solid #ddd;">${brandname}</td>
                        </tr>
                    </table>
                </div>
            `
        };

        await transporter.sendMail(mailOptions);
        
        return NextResponse.json({ 
            message: "Lead submitted successfully", 
            status: 200 
        });

    } catch (error) {
        console.error("Email Error:", error);
        return NextResponse.json({ 
            message: "Failed to submit lead", 
            error: error.message, 
            status: 500 
        });
    }
}
