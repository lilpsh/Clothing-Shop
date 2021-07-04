import React, { useEffect } from "react";
import api from "../../api/api";
import { Card, Image, Icon, Button } from "semantic-ui-react";
import "./ItemsList.css";
import { connect } from "react-redux";

import { getItems, addBasket } from "../../redux/reducers/itemsReducer";

function ItemsList({ getItems, items, addBasket }) {
  useEffect(() => {
    api
      .getAllItems()
      .then((res) => getItems(res))
      .catch(console.error);
  }, []);

  return (
    <>
      <ul className="items-list">
        {
          items.map((item, i) => (
            <li key={i} className="list__one-item">
              <Card>
                <Image src={item.image} wrapped ui={false} />
                <Card.Content className="card-content">
                  <Card.Header className="card-content-name">
                    {item.name}
                  </Card.Header>
                  <Card.Meta>
                    <span className="card-content-category">
                      {item.category}
                    </span>
                  </Card.Meta>
                  <Card.Description className="card-content-price">
                    ${item.price}
                  </Card.Description>
                  <button
                    className="card-content-btn"
                    onClick={() => {
                      addBasket(item);
                      console.log(item);
                    }}
                    position="right"
                    animated="vertical"
                  >
                    Add to cart
                  </button>
                </Card.Content>
              </Card>
            </li>
          ))
        }
      </ul>
    </>
  );
}

const mapStateToProps = (state) => ({
  items: state.itemsReducer.items,
});

const mapDispatchToProps = {
  getItems,
  addBasket,
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemsList);
