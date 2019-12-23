import React from "react";
import PropTypes from "prop-types";
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardLink
} from 'reactstrap';

class FanficsPage extends React.Component {
    render() {
        const fanfics = this.props.fanfics;
        return (
            <div className="container col-sm-4">
                {fanfics.map(({ title, img, fanficText }) => (
                    <Card>
                        <CardImg top src={img} alt="Card image cap" />
                        <CardBody>
                            <CardTitle title={title}>{title}</CardTitle>
                            <CardText>{fanficText}</CardText>
                            <CardLink href="#">Card Link</CardLink>
                            <CardLink href="#">Another Link</CardLink>
                        </CardBody>
                    </Card>
                ))}

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