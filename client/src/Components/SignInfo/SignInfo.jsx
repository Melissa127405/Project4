import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import "./SignInfo.css";
import moon from "../../images/moon.jpg";

const signs = [
  { name: "Aries", dates: "Mar 21 – Apr 19", element: "Fire", symbol: "♈" },
  { name: "Taurus", dates: "Apr 20 – May 20", element: "Earth", symbol: "♉" },
  { name: "Gemini", dates: "May 21 – Jun 20", element: "Air", symbol: "♊" },
  { name: "Cancer", dates: "Jun 21 – Jul 22", element: "Water", symbol: "♋" },
  { name: "Leo", dates: "Jul 23 – Aug 22", element: "Fire", symbol: "♌" },
  { name: "Virgo", dates: "Aug 23 – Sep 22", element: "Earth", symbol: "♍" },
  { name: "Libra", dates: "Sep 23 – Oct 22", element: "Air", symbol: "♎" },
  { name: "Scorpio", dates: "Oct 23 – Nov 21", element: "Water", symbol: "♏" },
  { name: "Sagittarius", dates: "Nov 22 – Dec 21", element: "Fire", symbol: "♐" },
  { name: "Capricorn", dates: "Dec 22 – Jan 19", element: "Earth", symbol: "♑" },
  { name: "Aquarius", dates: "Jan 20 – Feb 18", element: "Air", symbol: "♒" },
  { name: "Pisces", dates: "Feb 19 – Mar 20", element: "Water", symbol: "♓" },
];

export default function SignInfo() {
  return (
    <div className="sign-info-wrapper"
   style={{ backgroundImage: `url(${moon})` }}
    >
      <h2 className="text-center mb-4">Zodiac Sign Information</h2>

      <Row>
        {signs.map((sign) => (
         <Col key={sign.name} md={4} className="mb-4 sign-col">
        <Card className="sign-card">
          <Card.Body>
            <Card.Title className="text-center">
        {sign.symbol} {sign.name}
          </Card.Title>
            <Card.Text className="text-center">
          <strong>Dates:</strong> {sign.dates} <br />
          <strong>Element:</strong> {sign.element}
         </Card.Text>
          </Card.Body>
          </Card>
        </Col> 
        ))}
      </Row>
    </div>
  );
}