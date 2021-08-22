import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

const ProductPage = (props) => {
  return (
    <div className="cards">
      <Card>
        <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
        <CardBody>
          
          <Button>Button</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default ProductPage;