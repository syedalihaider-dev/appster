import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req) {
    try {
        const body = await req.json();
        console.log("Incoming Lead Data:", body);
        const { 
            name, 
            email, 
            phone, 
            message, 
            price,
            checkboxesdata,
            pageUrl 
        } = body;

        const brandname = 'Appsters - Main Brand';

        const transporter = nodemailer.createTransport({
            host: "maltaserver.stagingtestserver.com",
            port: 465,
            secure: true,
            auth: {
                user: 'no-reply@appsters.io', 
                pass: "lG;nI8Y333TUIpfg" 
            },
            tls: {
                rejectUnauthorized: false
            }
        });

        const mailOptions = {
            from: '"Appsters" <no-reply@appsters.io>',
            to: 'zain@iceanimations.com, ppc@iceanimations.com, hassan.ali@iceanimations.com, aleehaiderbalti@gmail.com',
            subject: `Appsters Lead: ${name}`,
            html: `
                <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
                    <h2 style="color: #1128E6;">New Lead from Appsters Main Brand</h2>
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
                            <td style="padding: 10px; border-bottom: 1px solid #ddd;"><b>Project Budget</b></td>
                            <td style="padding: 10px; border-bottom: 1px solid #ddd;">${price || 'N/A'}</td>
                        </tr>
                        <tr>
                            <td style="padding: 10px; border-bottom: 1px solid #ddd;"><b>Message</b></td>
                            <td style="padding: 10px; border-bottom: 1px solid #ddd;">${message || 'N/A'}</td>
                        </tr>
                        <tr>
                            <td style="padding: 10px; border-bottom: 1px solid #ddd;"><b>NDA</b></td>
                            <td style="padding: 10px; border-bottom: 1px solid #ddd;">${checkboxesdata || 'No'}</td>
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
            message: "Email sent successfully", 
            status: 200 
        });

    } catch (error) {
        console.error("Email Error:", error);
        return NextResponse.json({ 
            message: "Failed to send email", 
            error: error.message, 
            status: 500 
        });
    }
}
