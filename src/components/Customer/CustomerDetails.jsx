import React from 'react';
import './Custmer.css';
const customers = [
      {
        id: 11,
        name: 'Jane Smith',
        email: 'jane.smith@example.com',
        phone: '(555) 555-5555',
        address: '456 Elm St, Town, Country',
        image: 'https://www.marketing91.com/wp-content/uploads/2019/01/Way-To-Approach-Customers-5.jpg',
      },
      {
        id: 12,
        name: 'Michael Johnson',
        email: 'michael.johnson@example.com',
        phone: '(555) 123-4567',
        address: '789 Oak Ave, City, Country',
        image: 'https://thumbs.dreamstime.com/b/shopping-couple-supermarket-standing-checkout-boyfriend-paying-purchases-debit-card-smiling-young-doing-171125338.jpg',
      },
      {
        id: 13,
        name: 'Emily Davis',
        email: 'emily.davis@example.com',
        phone: '(555) 987-6543',
        address: '101 Pine Rd, Village, Country',
        image: 'https://thumbs.dreamstime.com/b/young-women-customer-buying-food-standing-cash-register-cheerful-cashier-supermarket-woman-142186808.jpg',
      },
      {
        id: 14,
        name: 'David Wilson',
        email: 'david.wilson@example.com',
        phone: '(555) 777-8888',
        address: '222 Cedar St, Town, Country',
        image: 'https://thumbs.dreamstime.com/z/cheerful-mature-couple-standing-cash-register-front-mixed-race-cashier-young-scanning-what-bought-supermarket-177936989.jpg',
      },
      {
        id: 15,
        name: 'Sarah Turner',
        email: 'sarah.turner@example.com',
        phone: '(555) 456-7890',
        address: '333 Birch Ave, City, Country',
        image: 'https://thumbs.dreamstime.com/b/couple-buying-food-grocery-store-cash-register-shopping-sale-consumerism-people-concept-happy-supermarket-84352639.jpg',
      },
      {
        id: 16,
        name: 'Daniel Clark',
        email: 'daniel.clark@example.com',
        phone: '(555) 321-6549',
        address: '444 Maple Rd, Village, Country',
        image: 'https://thumbs.dreamstime.com/z/man-paying-nfc-grocery-store-man-paying-nfc-grocery-store-158422017.jpg',
      },
      {
        id: 17,
        name: 'Olivia White',
        email: 'olivia.white@example.com',
        phone: '(555) 111-2222',
        address: '555 Pine St, Town, Country',
        image: 'https://thumbs.dreamstime.com/b/couple-buying-food-grocery-store-cash-register-shopping-sale-consumerism-people-concept-happy-supermarket-84352639.jpg',
      },
      {
        id: 18,
        name: 'William Harris',
        email: 'william.harris@example.com',
        phone: '(555) 999-8888',
        address: '666 Oak Ave, City, Country',
        image: 'https://thumbs.dreamstime.com/z/portrait-happy-young-men-handing-credit-card-to-smiling-cashier-paying-via-bank-terminal-grocery-store-happy-man-handing-104187907.jpg',
      },
      
      {
        id: 20,
        name: 'James Lee',
        email: 'james.lee@example.com',
        phone: '(555) 444-3333',
        address: '888 Birch St, Town, Country',
        image: 'https://thumbs.dreamstime.com/z/cheerful-mature-couple-standing-cash-register-front-mixed-race-cashier-young-scanning-what-bought-supermarket-177936989.jpg',
      },
    ];
    

const CustomerGrid = () => {
  return (
    <div className="container1">
  
      {customers.map((customer) => (
        <div key={customer.id} className="col-lg-4 col-md-6 col-sm-12 mb-4">
          <div className="card">
            <img
              src={customer.image}
              alt={`Customer ${customer.name}`}
              className="card-img-top mx-auto d-block"
            />
            <div className="card-body text-center">
              <h5 className="card-title">{customer.name}</h5>
              <p className="card-text">Email: {customer.email}</p>
              <p className="card-text">Phone: {customer.phone}</p>
              <p className="card-text">Address: {customer.address}</p>
              <button>Details</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  
  );
};

export default CustomerGrid;
