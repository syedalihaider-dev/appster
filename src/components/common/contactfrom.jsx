"use client"
import styles from "@/styles/components/common/contactfrom.module.scss"
import React, { useEffect, useState } from "react"
import { usePathname } from "next/navigation"
import Link from "next/link"
import { Row, Col } from "react-bootstrap"

const ContactFrom = ({ idea, appidea, discussion, popup, contactpage }) => {
    const [checkboxes, setCheckboxes] = useState([])
    const [pagenewurl, setPagenewurl] = useState("")
    const [isDisabled, setIsDisabled] = useState(false)
    const [formStatus, setFormStatus] = useState("Submit")
    const [error, setError] = useState("")

    useEffect(() => {
        setPagenewurl(window.location.href)
    }, [])

    const handleOptionChange3 = (e) => {
        const { value, checked } = e.target
        setCheckboxes(
            checked
                ? [...checkboxes, value]
                : checkboxes.filter((checkbox) => checkbox !== value)
        )
    }

    const router = usePathname()
    const currentRoute = router

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError("")
        setFormStatus("Processing...")
        setIsDisabled(true)
        // Validate fields
        const name = e.target.name.value.trim()
        const email = e.target.email.value.trim()
        const phone = e.target.phone.value.trim()
        const message = e.target.comment.value.trim()
        const price = e.target.price.value.trim()

        if (!name || !email || !phone) {
            setError("Please fill in all required fields.")
            setFormStatus("Submit")
            setIsDisabled(false)
            return
        }

        try {
            // SMTP Mailer call
            const mailData = {
                name,
                email,
                phone,
                message,
                price,
                checkboxesdata: checkboxes.join(),
                pageUrl: pagenewurl,
            }

            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(mailData),
            })

            if (response.ok) {
                window.location.href = "/thank-you"
            } else {
                const errorData = await response.json();
                console.error("API Error:", errorData);
                setFormStatus("Failed...")
                setIsDisabled(false)
                alert("Submission failed. Please try again or contact us directly.")
            }
        } catch (error) {
            console.error("Error during form submission:", error)
            setFormStatus("Failed...")
            setIsDisabled(false)
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <div
                className={`${styles.commonFrom} ${idea ? styles.ideaFrom : ""} ${appidea ? styles.appideaFrom : ""
                    } ${discussion ? styles.discussionFrom : ""} ${popup ? styles.popupFrom : ""
                    }  ${contactpage ? styles.contactPage : ""}`}
            >
                <Row className="gy-lg-3">
                    <Col lg={6} sm={12}>
                        <div className={styles.fieldBox}>
                            <input type="text" name="name" placeholder="Your Name" required />
                        </div>
                    </Col>
                    <Col lg={6} sm={12}>
                        <div className={styles.fieldBox}>
                            <input type="email" name="email" placeholder="Your Email" required />
                        </div>
                    </Col>
                    <Col lg={6} sm={12}>
                        <div className={styles.fieldBox}>
                            <input
                                type="tel"
                                name="phone"
                                placeholder="Your Phone Number"
                                required
                            />
                        </div>
                    </Col>
                    <Col lg={6} sm={12}>
                        <div className={styles.fieldBox}>
                            <input
                                type="number"
                                name="price"
                                placeholder="Project Budget"
                                required
                            />
                        </div>
                    </Col>
                    {discussion ? (
                        <textarea
                            name="comment"
                            placeholder="Tell us about your Project"
                            className="d-none"
                        ></textarea>
                    ) : (
                        <>
                            <div className={styles.fieldBox}>
                                <textarea
                                    name="comment"
                                    placeholder="Tell us about your Project"
                                ></textarea>
                            </div>
                            {popup || contactpage ? null : (
                                <>
                                    <div className={`${styles.fieldBox} ${styles.checkBox} `}>
                                        <input
                                            type="checkbox"
                                            id="check"
                                            name="nda"
                                            checked={checkboxes.includes(
                                                "Share Non Disclosure Agreement"
                                            )}
                                            onChange={handleOptionChange3}
                                            value="Share Non Disclosure Agreement"
                                        />
                                        <label htmlFor="check" className={styles.checkTxt}>
                                            Share Non Disclosure Agreement
                                        </label>
                                    </div>
                                </>
                            )}
                        </>
                    )}
                    {contactpage ? (
                        <p className={styles.paraTxt}>
                            We take your privacy seriously. Read our{" "}
                            <Link href="#">
                                Privacy Policy
                            </Link>
                        </p>
                    ) : (
                        ""
                    )}
                </Row>

                <div className={styles.buttonBox}>
                    <button type="submit" disabled={isDisabled}>
                        {formStatus}
                    </button>
                </div>
            </div>
        </form>
    )
}

export default ContactFrom
