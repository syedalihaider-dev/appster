import styles from "@/styles/services/comparison.module.scss"
import { Col, Container, Row } from "react-bootstrap"


const Comparison = ({ data }) => {
    return (
        <section className={styles.compareSection}>
            <Container>
                <div className={styles.comapareSecText}>
                    <h2>{data?.title}</h2>
                </div>
                <div className={styles.comapareSecTable}>
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col"></th>
                                <th scope="col" className="red-bg br-top"></th>
                                <th scope="col"></th>
                                <th scope="col"></th>
                            </tr>
                            <tr>
                                <th scope="col" className="offWhite-bg br-top-left pt-5"></th>
                                <th scope="col" className="red-bg pt-5">Appsters</th>
                                <th scope="col" className="pt-5 offWhite-bg">In-House</th>
                                <th scope="col" className="pt-5 offWhite-bg br-top-right">Freelance</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">Time to Identify Suitable Developers</th>
                                <td className="bg">1-3 weeks</td>
                                <td className="b-r">2-4 weeks</td>
                                <td>4-12 weeks</td>
                            </tr>
                            <tr>
                                <th className="offWhite-bg" scope="row"></th>
                                <td className="red-bg"></td>
                                <td className="offWhite-bg"></td>
                                <td className="offWhite-bg"></td>
                            </tr>
                            <tr>
                                <th scope="row">Project Initiation Time</th>
                                <td className="bg">1-2 weeks</td>
                                <td className="b-r">2-4 weeks</td>
                                <td>2-10 weeks</td>
                            </tr>
                            <tr>
                                <th className="offWhite-bg" scope="row"></th>
                                <td className="red-bg"></td>
                                <td className="offWhite-bg"></td>
                                <td className="offWhite-bg"></td>
                            </tr>
                            <tr>
                                <th scope="row">Annual Cost for Training &amp; Benefits</th>
                                <td className="bg">$500-$1,000 per developer</td>
                                <td className="b-r">Included in company benefits</td>
                                <td>N/A</td>
                            </tr>
                            <tr>
                                <th className="offWhite-bg" scope="row"></th>
                                <td className="red-bg"></td>
                                <td className="offWhite-bg"></td>
                                <td className="offWhite-bg"></td>
                            </tr>
                            <tr>
                                <th scope="row">Time to Scale Team Size</th>
                                <td className="bg">1-4 weeks</td>
                                <td className="b-r">2-6 weeks</td>
                                <td>1-10 weeks</td>
                            </tr>
                            <tr>
                                <th className="offWhite-bg" scope="row"></th>
                                <td className="red-bg"></td>
                                <td className="offWhite-bg"></td>
                                <td className="offWhite-bg"></td>
                            </tr>
                            <tr>
                                <th scope="row">Average Weekly Pricing</th>
                                <td className="bg">$1,500-$3,000</td>
                                <td className="b-r">$2,000-$4,000</td>
                                <td>$10,000-$25,000</td>
                            </tr>
                            <tr>
                                <th className="offWhite-bg" scope="row"></th>
                                <td className="red-bg"></td>
                                <td className="offWhite-bg"></td>
                                <td className="offWhite-bg"></td>
                            </tr>
                            <tr>
                                <th scope="row">Project Failure Risk</th>
                                <td className="bg">Extremely Low (95% success rate)</td>
                                <td className="b-r">Low (90% success rate)</td>
                                <td>High (60% success rate)</td>
                            </tr>
                            <tr>
                                <th className="offWhite-bg" scope="row"></th>
                                <td className="red-bg"></td>
                                <td className="offWhite-bg"></td>
                                <td className="offWhite-bg"></td>
                            </tr>
                            <tr>
                                <th scope="row">Developer Support Team Availability</th>
                                <td className="bg">Yes</td>
                                <td className="b-r">Some</td>
                                <td>No</td>
                            </tr>
                            <tr>
                                <th className="offWhite-bg" scope="row"></th>
                                <td className="red-bg"></td>
                                <td className="offWhite-bg"></td>
                                <td className="offWhite-bg"></td>
                            </tr>
                            <tr>
                                <th scope="row">Resource Dedication</th>
                                <td className="bg">Yes</td>
                                <td className="b-r">Some</td>
                                <td>No</td>
                            </tr>
                            <tr>
                                <th className="offWhite-bg" scope="row"></th>
                                <td className="red-bg"></td>
                                <td className="offWhite-bg"></td>
                                <td className="offWhite-bg"></td>
                            </tr>
                            <tr>
                                <th scope="row">Quality Assurance Guarantee</th>
                                <td className="bg">Yes</td>
                                <td className="b-r">High</td>
                                <td>Some</td>
                            </tr>
                            <tr>
                                <th className="offWhite-bg" scope="row"></th>
                                <td className="red-bg"></td>
                                <td className="offWhite-bg"></td>
                                <td className="offWhite-bg"></td>
                            </tr>
                            <tr>
                                <th scope="row">Adherence to Project Standards</th>
                                <td className="bg">High</td>
                                <td className="b-r">Some</td>
                                <td>Low</td>
                            </tr>
                            <tr>
                                <th className="offWhite-bg" scope="row"></th>
                                <td className="red-bg"></td>
                                <td className="offWhite-bg"></td>
                                <td className="offWhite-bg"></td>
                            </tr>
                            <tr>
                                <th scope="row">Professional Tools and Environment</th>
                                <td className="bg">Yes</td>
                                <td className="b-r">Yes</td>
                                <td>Uncertain</td>
                            </tr>
                            <tr>
                                <th className="offWhite-bg" scope="row"></th>
                                <td className="red-bg"></td>
                                <td className="offWhite-bg"></td>
                                <td className="offWhite-bg"></td>
                            </tr>
                            <tr>
                                <th></th>
                                <td></td>
                                <th></th>
                                <th></th>
                            </tr>
                        </tbody>
                        </table>
                </div>
            </Container>
        </section>
    )
}

export default Comparison