import styles from "./MainLayout.module.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PropTypes from "prop-types";
import { Container } from "react-bootstrap";

export default function MainLayout ({children}) {
    return (
        <div className={styles.main}>
            <Header />
            <Container>
                {children}
            </Container>
            <Footer />
        </div>

    )
}

MainLayout.PropTypes = {
    children: PropTypes.node.isRequired,
}