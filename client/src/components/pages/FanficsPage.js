import React from "react";
import PropTypes from "prop-types";
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardLink
} from 'reactstrap';

class FanficsPage extends React.Component {
    render() {
        return (
            <div className="container col-sm-4">
                <Card>
                    <CardImg top src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F1%2F18%2FGlatt_-_Glattbrugg_IMG_6869.jpg%2F1200px-Glatt_-_Glattbrugg_IMG_6869.jpg&f=1&nofb=1" alt="Card image cap" />
                    <CardBody>
                        <CardTitle ></CardTitle>
                        <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                        <CardLink href="#">Card Link</CardLink>
                        <CardLink href="#">Another Link</CardLink>
                    </CardBody>
                </Card>
            </div>
        );
    }
}


Card.propTypes = {
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
    inverse: PropTypes.bool,
    color: PropTypes.string,
    body: PropTypes.bool,
    className: PropTypes.string
};

CardBody.propTypes = {
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
    className: PropTypes.string
};

CardImg.propTypes = {
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
    className: PropTypes.string,
    top: PropTypes.bool,
    bottom: PropTypes.bool
};

CardLink.propTypes = {
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
    className: PropTypes.string,
    innerRef: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
};

CardText.propTypes = {
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
    className: PropTypes.string
};

CardTitle.propTypes = {
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
    className: PropTypes.string
};

export default FanficsPage;