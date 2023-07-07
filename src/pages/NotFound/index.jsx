import { Col, Container, Row } from "react-bootstrap";
import styles from './Notfound.module.css'

export default function NotFound () {
    return(
        <Container className={styles.NotFound}>
            <Row className={styles.NotFound2}>
                <Col md={6}>
                    <h1 className={styles.NotFound2}>  Page not Found</h1>
                </Col>
            </Row>
        </Container>
    )
}