import React from 'react';

const Footer = () => (
  <footer>
    <hr />
    <p>Footer</p>

    <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top" className="donate-btn">
      <input type="hidden" name="cmd" value="_s-xclick" />
      <input type="hidden" name="hosted_button_id" value="5UJ8TFULUM74W" />
      <input type="image"  name="submit" alt="PayPal - The safer, easier way to pay online!" />
    </form>
  </footer>
);

export default Footer;
